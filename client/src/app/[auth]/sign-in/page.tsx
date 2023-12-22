"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthButtons from "@/[auth]/components/authButtons";
import { LoginData } from "../../utils/useApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signin = ({ selected }: { selected: string }) => {
  const router = useRouter();

  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { mutate, isPending } = LoginData();

  const handleAnimation = (field: string) => {
    if (field === "email") {
      setIsEmailFocused(true);
    } else if (field === "password") {
      setIsPasswordFocused(true);
    }
  };

  const handleBlur = (field: string) => {
    if (field === "email") {
      setIsEmailFocused(false);
      if (emailRef.current?.value !== "") {
        setIsEmailFocused(true);
      }
    } else if (field === "password") {
      setIsPasswordFocused(false);
      if (passwordRef.current?.value !== "") {
        setIsPasswordFocused(true);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      selected === "" ||
      emailRef.current?.value === "" ||
      passwordRef.current?.value === ""
    ) {
      toast.error("Check your Information", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("form submission");
    } else {
      const data = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      };
      mutate(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] bg-white bg-opacity-20 rounded-[10px] flex-col flex justify-center items-center p-8"
    >
      <div className="  flex flex-col w-full ">
        <p className="text-start mb-2 w-fit   text-gray-400 text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">
          Sign In
        </p>

        <div>
          <span className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
            New ?
          </span>{" "}
          <Link href="/auth/sign-up">
            <span className="text-indigo-500 text-md font-medium font-['SF Pro Display'] tracking-tight">
              {"  "}
              Create an account
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-14 mt-8">
          <div className="relative">
            <label
              htmlFor="email"
              className={`${
                isEmailFocused ? "translate-y-[-20px]" : "translate-y-[0px]"
              } text-white transition-all absolute  text-lg font-normal font-['SF Pro Display'] tracking-tight`}
            >
              Email Address
            </label>
            <input
              id="email"
              onFocus={() => handleAnimation("email")}
              onBlur={() => handleBlur("email")}
              ref={emailRef}
              className="h-8 autofill:bg-yellow-200   p-4  py-5 bg-white bg-opacity-0 w-full border-b-2 outline-none"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className={`${
                isPasswordFocused ? "translate-y-[-20px]" : "translate-y-[0px]"
              } text-white transition-all absolute text-lg font-normal font-['SF Pro Display'] tracking-tight`}
            >
              Password
            </label>
            <input
              id="password"
              onFocus={() => handleAnimation("password")}
              onBlur={() => handleBlur("password")}
              ref={passwordRef}
              className="h-8 bg-white p-4 py-5 bg-opacity-0 w-full outline-none border-b-2 "
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className=" w-full  flex items-center font-semibold justify-center h-12 px-6 mt-4  outline-none   transition-colors duration-300 bg-white shadow text-black  focus:shadow-outline hover:bg-slate-200"
      >
        {isPending ? "Login..." : "Login"}
      </button>

      <p className="my-2">OR ?</p>
      <AuthButtons />
      <ToastContainer />
    </form>
  );
};

export default Signin;
