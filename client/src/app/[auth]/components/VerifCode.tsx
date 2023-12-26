import React, { useRef, ChangeEvent, useState } from "react";
import { verifyCode } from "@/utils/useApi";
import { IoClose } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
const VerifCode = ({ setCodeV, setUpdatePassV, email }) => {
  const code1 = useRef<HTMLInputElement>(null);
  const code2 = useRef<HTMLInputElement>(null);
  const code3 = useRef<HTMLInputElement>(null);
  const code4 = useRef<HTMLInputElement>(null);
  const code5 = useRef<HTMLInputElement>(null);
  const inputs = [code1, code2, code3, code4, code5];
  const [errorMessagePop, setErrorMessagePop] = useState<Boolean>(false);
  const [ErrMessage, setErrMessage] = useState<string>("");
  const { mutateAsync } = useMutation({
    mutationFn: verifyCode,
    onSuccess: async (response) => {
      if (response?.status == 400) {
        setErrMessage("this code is invalid try again");
        setErrorMessagePop(true);
      } else {
        setCodeV(false);
        setUpdatePassV(true);
      }
    },
  });
  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target;

    // Allow only one digit
    const digit = input.value.replace(/\D/g, "");
    input.value = digit;

    if (digit && index < 4) {
      // Move focus to the next input
      inputs[index + 1]?.current?.focus();
    }

    // Check if all inputs are filled
    const allFilled = inputs.every(
      (inputRef) => inputRef?.current?.value.length === 1
    );

    if (allFilled) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const fullCode = inputs
      .map((inputRef) => inputRef?.current?.value)
      .join("");

    if (fullCode.length === 5 && /^\d+$/.test(fullCode)) {
      try {
        const numericCode = parseInt(fullCode, 10);
        // Check if the conversion is successful and it's a valid number
        await mutateAsync({ email, fullCode: numericCode });
      } catch (error) {
        console.error("Mutation error:", error);
      }
    } else {
      setErrMessage(`Invalid code: ${fullCode}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col">
        <label
          htmlFor="verificationCode"
          className={`text-white transition-all text-lg font-normal font-['SF Pro Display'] tracking-tight`}
        >
          Verify Code
        </label>
        <div className="flex gap-5">
          {inputs.map((inputRef, index) => (
            <input
              key={index}
              id={`code${index + 1}`}
              ref={inputRef}
              className="h-8 text-xl p-4 w-[100px] py-5 bg-white bg-opacity-0 border-b-2 outline-none"
              maxLength={1}
              onChange={(e) => handleInputChange(index, e)}
            />
          ))}
        </div>
        {errorMessagePop && (
          <p className="text-[red] pt-3  font-semibold flex justify-center items-center">
            {ErrMessage} <IoClose className="ml-1 text-2xl" />
          </p>
        )}
      </div>
      <button
        className="bg-white w-28 h-10 hover:opacity-80 transition-opacity rounded-md"
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default VerifCode;
