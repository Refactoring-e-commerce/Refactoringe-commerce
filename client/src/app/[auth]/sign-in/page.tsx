"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import AuthButtons from "@/[auth]/components/AuthButtons";
import cookieCutter from "cookie-cutter";
import "react-toastify/dist/ReactToastify.css";

import { signin } from "../../utils/useApi";
import { ToastContainer, toast } from "react-toastify";
import ForgetForm from "../components/ForgetForm";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const Signin = ({ selected }: { selected: string }) => {
  const route = useRouter();
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [forgetPassForm, setForgetPassForm] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signin,

    onSuccess: async (response) => {
      if (response?.status == 401) {
        toast.error(" Invalid Password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (200) {
        const { token } = await response?.json();
        cookieCutter.set("token", token);
        route.push("/");
      }
    },
  });

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
      console.log("form err");
    } else {
      const data = {
        role: selected,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      };

      await mutateAsync(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] bg-[#6689a7cf]  rounded-[10px] flex-col flex justify-center items-center p-8"
    >
      {forgetPassForm && <ForgetForm setForgetPassForm={setForgetPassForm} />}
      <div className="  flex flex-col w-full ">
        <p className="text-start mb-2 w-fit   text-white text-3xl font-extrabold font-['SF Pro Display'] tracking-tight">
          Sign In
        </p>

        <div>
          <span className="text-white text-lg font-normal font-['SF Pro Display'] tracking-tight">
            New ?
          </span>{" "}
          <Link href="/auth/sign-up">
            <span className="text-white text-md font-medium font-['SF Pro Display'] tracking-tight">
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
              } text-white hover:text-white   transition-all absolute text-lg font-normal font-['SF Pro Display'] tracking-tight`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
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
        className=" w-full cursor-pointer  flex items-center font-semibold justify-center h-12 px-6 mt-4  outline-none   transition-colors duration-300 bg-white shadow text-black  focus:shadow-outline hover:bg-slate-200"
      >
        {isPending ? "Login..." : "Login"}
      </button>
      <div
        className=" cursor-pointer hover:text-white   transition-all"
        onClick={() => setForgetPassForm(true)}
      >
        Forget password ?
      </div>
      <p className="my-2">OR ?</p>
      <AuthButtons />
      <ToastContainer />
    </form>
  );
};

export default Signin;
