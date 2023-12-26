"use client";
import facebook from "@public/facebook.png";
import cherche from "@public/chercher.png";
import apple from "@public/logo-apple.png";

import Image from "next/image";
import axios from "axios";
const AuthButtons = () => {
  const handleSignupGoogle = async () => {
    window.open("http://localhost:8080/users/Google", "_self");
    // const a = await axios.get("http://localhost:8080/users/GoogleRedirect");
    // console.log(a);
  };
  return (
    <>
      <div
        onClick={handleSignupGoogle}
        className="  cursor-pointer  w-[300px] text-lg rounded-full flex items-center font-semibold justify-center h-12 px-6  outline-none   transition-colors duration-300 bg-white shadow text-black  focus:shadow-outline hover:bg-slate-200"
      >
        <Image src={cherche} alt="Google Logo" width={20} height={20} />
        <span className="ml-4">Continue with Google</span>
      </div>

      <button className="  w-[300px] text-lg  flex bg-blue-600 items-center font-semibold rounded-full justify-center h-12 px-6 mt-4  outline-none   transition-colors duration-300 text-white  focus:shadow-outline hover:bg-slate-200">
        <Image src={facebook} alt="Facebook Logo" width={20} height={20} />
        <span className="ml-4">Continue with Facebook</span>
      </button>
      <button className=" w-[300px] text-lg  bg-black rounded-full  flex items-center font-semibold justify-center h-12 px-6 mt-4  outline-none   transition-colors duration-300  shadow text-white  focus:shadow-outline hover:bg-slate-200">
        <Image src={apple} alt="Apple Logo" width={20} height={20} />
        <span className="ml-4">Continue with Apple</span>
      </button>
    </>
  );
};
export default AuthButtons;
