import { forgetPassword } from "@/utils/useApi";
import { useMutation } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
export const YourEmail = ({ setEmailV, setCodeV, setEmail, role }) => {
  const emailRef = useRef<HTMLInputElement>(null);

  const [errorMessagePop, setErrorMessagePop] = useState<Boolean>(false);
  const [ErrMessage, setErrMessage] = useState<string>("");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: forgetPassword,
    onSuccess: async (response) => {
      if (response?.status == 400) {
        setErrMessage("This Email Doesn't Exist");
        setErrorMessagePop(true);
      } else {
        setEmailV(false);
        setCodeV(true);
      }
    },
  });

  const submitForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const userEmail = emailRef.current?.value;
      if (userEmail) {
        setEmail(userEmail);
        await mutateAsync({ email: userEmail, role });
      } else {
        setErrorMessagePop(true);
        setErrMessage("Please Add Your Email");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col ">
        <label
          htmlFor="email"
          className={` text-white transition-all   text-lg font-normal font-['SF Pro Display'] tracking-tight`}
        >
          Email Address
        </label>
        <input
          id="email"
          ref={emailRef}
          className="h-8  text-xl  p-4 w-[500px] py-5 bg-white bg-opacity-0  border-b-2 outline-none"
        />
        {errorMessagePop && (
          <p className="text-[red] pt-3  font-semibold flex justify-center items-center">
            {ErrMessage} <IoClose className="ml-1 text-2xl" />
          </p>
        )}
      </div>
      <button
        className="bg-white w-28 h-10 hover:opacity-80  transition-opacity rounded-md"
        type="submit"
        disabled={isPending}
        onClick={submitForm}
      >
        Next
      </button>
    </div>
  );
};
export default YourEmail;
