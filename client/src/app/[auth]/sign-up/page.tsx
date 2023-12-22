"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserData } from "../../utils/useApi";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Signup = ({ selected }: { selected: string }) => {
  const router = useRouter();
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [isfullNameFocused, setIsfullNameFocused] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  interface Data {
    role: string | undefined;
    email: string | undefined;
    password: string | undefined;
    fullName: string | undefined;
    birthDate: string | undefined;
  }
  const { mutate, isPending } = UserData();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      selected === "" ||
      emailRef.current?.value === "" ||
      passwordRef.current?.value === "" ||
      fullNameRef.current?.value === "" ||
      dateRef.current?.value === ""
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
    } else {
      const data: Data = {
        role: selected,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        fullName: fullNameRef.current?.value,
        birthDate: dateRef.current?.value,
      };
      mutate(data);
    }
  };

  const handleAnimation = (field: string) => {
    if (field === "email") {
      setIsEmailFocused(true);
    } else if (field === "password") {
      setIsPasswordFocused(true);
    } else if (field === "fullName") {
      setIsfullNameFocused(true);
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
    } else if (field === "fullName") {
      setIsfullNameFocused(false);
      if (fullNameRef.current?.value !== "") {
        setIsfullNameFocused(true);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] bg-white bg-opacity-20 rounded-[10px] flex-col flex justify-center items-center p-8"
    >
      <div className="  flex flex-col w-full ">
        <p className="text-start mb-2 w-fit   text-[#7cbf39] text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">
          Sign Up
        </p>

        <div>
          <span className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
            already Have accounte ?
          </span>{" "}
          <Link href="/auth/sign-in">
            <span className="text-indigo-500 text-md font-medium font-['SF Pro Display'] tracking-tight">
              {"  "}
              Sign Up
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-14 mt-8">
          <div className="relative">
            <label
              htmlFor="email"
              className={`${
                isEmailFocused ? "translate-y-[-20px]" : "translate-y-[0px]"
              } text-[#5948ac] transition-all absolute  text-lg font-normal font-['SF Pro Display'] tracking-tight`}
            >
              Email Address
            </label>
            <input
              id="email"
              onFocus={() => handleAnimation("email")}
              onBlur={() => handleBlur("email")}
              ref={emailRef}
              className="h-8  bg-white p-4 py-5 bg-opacity-0 w-full border-b-2 outline-none"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="fullName"
              className={`${
                isfullNameFocused ? "translate-y-[-20px]" : "translate-y-[0px]"
              } text-[#5948ac] transition-all absolute text-lg font-normal font-['SF Pro Display'] tracking-tight`}
            >
              Full Name
            </label>
            <input
              id="fullName"
              onFocus={() => handleAnimation("fullName")}
              onBlur={() => handleBlur("fullName")}
              ref={fullNameRef}
              className="h-8 bg-white py-5 p-4 bg-opacity-0 w-full outline-none border-b-2 "
            />
          </div>

          <div className="relative">
            <label
              typeof="password"
              htmlFor="password"
              className={`${
                isPasswordFocused ? "translate-y-[-20px]" : "translate-y-[0px]"
              } text-indigo-500 transition-all absolute text-lg font-normal font-['SF Pro Display'] tracking-tight`}
            >
              Password
            </label>
            <input
              id="password"
              onFocus={() => handleAnimation("password")}
              onBlur={() => handleBlur("password")}
              ref={passwordRef}
              className="h-8 bg-white py-5 p-4 bg-opacity-0 w-full outline-none border-b-2 "
            />
          </div>

          <div className="relative flex flex-col">
            <label
              className={`text-indigo-500 transition-all  text-lg font-normal font-['SF Pro Display'] tracking-tight`}
            >
              Date Of Birth
            </label>

            <input
              className=" outline-none  mt-3 bg-transparent w-fit cursor-pointer"
              type="date"
              id="start"
              name="trip-start"
              ref={dateRef}
              min="2018-01-01"
              max="2030-12-31"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className=" w-full  flex items-center font-semibold justify-center h-12 px-6 mt-4  outline-none   transition-colors duration-300 bg-white shadow text-black  focus:shadow-outline hover:bg-slate-200"
      >
        {isPending ? "Sign Up..." : "Sign Up"}
      </button>
      <ToastContainer />
    </form>
  );
};

export default Signup;
