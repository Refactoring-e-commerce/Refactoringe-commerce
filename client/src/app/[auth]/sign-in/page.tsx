"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { GoogleSignInButton } from "@/components/authButtons";

interface CredentialsFormProps {
  csrfToken?: string;
}
const Signin = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInResponse = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      //Redirect to homepage (/)
      router.push("/");
    } else {
      console.log("Error: ", signInResponse);
      setError("Your Email or Password is wrong!");
    }
  };

  return (
    <form
      className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
      onSubmit={handleSubmit}
    >
      <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>

      <p>
        New user?{" "}
        <Link href={"/sign-up"} className="ml-2">
          Create Account
        </Link>
      </p>

      {error && (
        <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
          {error}
        </span>
      )}
      <div className="flex items-center gap-2">
        <input type="checkbox" name="User" id="" />
        <input type="checkbox" name="Creator" id="" />
        <input type="checkbox" name="Brand" id="" />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
      >
        Log in
      </button>
      <div className="flex flex-col items-center w-fit shadow-md p-5 bg-slate-100">
        <span className="text-2xl font-semibold text-white text-center mt-8">
          Or
        </span>
        <GoogleSignInButton />
      </div>
    </form>
  );
};
export default Signin