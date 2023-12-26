"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../../utils/useApi";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const Signup = ({ selected }: { selected: string }) => {
  const route = useRouter();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isfullNameFocused, setIsfullNameFocused] = useState(false);
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

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: async (response) => {
      if (response?.status == 201) {
        route.push("/auth/sign-in");
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      await mutateAsync(data);
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
      className="w-[400px] bg-[#6689a7cf] rounded-[10px] flex-col flex justify-center items-center p-8"
    >
      <div className="  flex flex-col w-full ">
        <p className="text-start mb-2 w-fit   text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">
          Sign Up
        </p>

        <div>
          <span className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
            already Have accounte ?
          </span>{" "}
          <Link href="/auth/sign-in">
            <span className="text-white text-md font-medium font-['SF Pro Display'] tracking-tight">
              {"  "}
              Sign In
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
              className="h-8  bg-white p-4 py-5 bg-opacity-0 w-full border-b-2 outline-none"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="fullName"
              className={`${
                isfullNameFocused ? "translate-y-[-20px]" : "translate-y-[0px]"
              } text-white transition-all absolute text-lg font-normal font-['SF Pro Display'] tracking-tight`}
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              onFocus={() => handleAnimation("fullName")}
              onBlur={() => handleBlur("fullName")}
              ref={fullNameRef}
              className="h-8 bg-white py-5 p-4 bg-opacity-0 w-full outline-none border-b-2 "
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
              type="password"
              onFocus={() => handleAnimation("password")}
              onBlur={() => handleBlur("password")}
              ref={passwordRef}
              className="h-8 bg-white py-5 p-4 bg-opacity-0 w-full outline-none border-b-2 "
            />
          </div>

          <div className="relative flex flex-col">
            <label
              className={`text-white transition-all  text-lg font-normal font-['SF Pro Display'] tracking-tight`}
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
        className=" w-full rounded-md  flex items-center font-semibold justify-center h-12 px-6 mt-4  outline-none   transition-colors duration-300 bg-white shadow text-black  focus:shadow-outline hover:bg-slate-200"
      >
        {isPending ? "Sign Up..." : "Sign Up"}
      </button>
      <ToastContainer />
    </form>
  );
};

export default Signup;
