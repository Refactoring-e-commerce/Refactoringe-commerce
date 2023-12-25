import React, { useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { updatePassword } from "@/utils/useApi";
import { IoClose } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
const UpdateForgetPassword = ({
  setUpdatePassV,
  email,
  setForgetPassForm,
  role,
}) => {
  const passRef = useRef<HTMLInputElement>(null);
  const ConPassRef = useRef<HTMLInputElement>(null);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConPass, setShowConPass] = useState<boolean>(false);

  const [errorMessagePop, setErrorMessagePop] = useState<Boolean>(false);
  const [ErrMessage, setErrMessage] = useState<string>("");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updatePassword,
    onSuccess: async (response) => {
      if (response?.status == 400) {
        setErrorMessagePop(true);
        setErrMessage("verification failed check code");
      } else {
        setUpdatePassV(false);
        setForgetPassForm(false);
      }
    },
  });
  const SubmitUpdatePass = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const password = passRef.current?.value;
    const confirmPass = ConPassRef.current?.value;
    if (
      password !== confirmPass ||
      !confirmPass ||
      !password ||
      password.length < 8
    ) {
      setErrorMessagePop(true);
      setErrMessage(" Check Your Code");
    } else if (confirmPass.length < 8 || password.length < 8) {
      setErrorMessagePop(true);
      setErrMessage("should lenth of password more than 8");
    } else {
      await mutateAsync({ email, password, role });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className={`text-white transition-all text-lg font-normal font-['SF Pro Display'] tracking-tight`}
        >
          New Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPass ? "text" : "password"}
            ref={passRef}
            className="h-8 text-xl p-4 w-[500px] py-5 bg-white bg-opacity-0 border-b-2 outline-none pr-8"
          />
          <span
            className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        <label
          htmlFor="confirmPassword"
          className={`text-white transition-all text-lg font-normal font-['SF Pro Display'] tracking-tight`}
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            type={showConPass ? "text" : "password"}
            ref={ConPassRef}
            className="h-8 text-xl p-4 w-[500px] py-5 bg-white bg-opacity-0 border-b-2 outline-none pr-8"
          />
          <span
            className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
            onClick={() => setShowConPass(!showConPass)}
          >
            {showConPass ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        {errorMessagePop && (
          <p className="text-[red] pt-3  font-semibold flex justify-center items-center">
            {ErrMessage} <IoClose className="ml-1 text-2xl" />
          </p>
        )}
      </div>
      <button
        className="bg-white w-28 h-10 hover:opacity-80 transition-opacity rounded-md"
        type="submit"
        disabled={isPending}
        onClick={SubmitUpdatePass}
      >
        Submit
      </button>
    </div>
  );
};

export default UpdateForgetPassword;
