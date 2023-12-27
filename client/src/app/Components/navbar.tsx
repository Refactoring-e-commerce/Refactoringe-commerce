"use client";
import Link from "next/link";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

interface MyComponentProps {
  // Define the props here if there are any
}

const logout = () => {
  Cookies.remove("token");
};

function MyComponent(props: MyComponentProps) {
  const pathname = usePathname();

  const token = Cookies.get("token");
  const userData: any = token ? jwtDecode(token) : null;

  const [showUser, setShowUser] = useState<Boolean>(false);
  const [showMore, setShowMore] = useState<Boolean>(false);
  return (
    <div className="flex  border-b py-5 items-center shadow-md justify-around gap-11 max-md:flex-wrap ">
      <div className="flex items-center  justify-between  gap-6 px-5 max-md:max-w-full max-md:flex-wrap">
        <Link
          href={"/"}
          className="text-lime-600 text-4xl font-bold self-center whitespace-nowrap"
        >
          NeW-MoDa
        </Link>
        {pathname === "/AllProduct" && (
          <div className=" flex  relative items-center justify-between gap-4 px-4 py-3.5 rounded-[300px] border-[0.5px] border-solid border-white border-opacity-50 max-md:pr-5">
            <IoIosSearch className="text-white  " />
            <input
              type="text"
              className="bg-transparent outline-none text-md"
              placeholder="Search"
            />
          </div>
        )}

        <Link
          href="/"
          className="text-green-800 text-base font-semibold self-center my-auto"
        >
          Home
        </Link>
        {userData && userData.role == "user" && (
          <Link
            href="/Brand"
            className="text-green-800 text-base font-semibold self-center my-auto"
          >
            Brand
          </Link>
        )}
        {userData && (
          <Link
            href="/FavoriteList"
            className="text-green-800 text-base font-semibold self-center my-auto"
          >
            Personal Collection
          </Link>
        )}

        <Link
          href="/AllProduct"
          className="text-green-800 text-base font-semibold self-center my-auto"
        >
          AllProduct
        </Link>

        <div
          onClick={() => setShowMore(!showMore)}
          className="text-green-800 cursor-pointer text-base font-semibold self-center relative my-auto"
        >
          {" "}
          More
          {showMore && (
            <ul
              onMouseLeave={() => setShowMore(false)}
              className="flex flex-col absolute top-[55px] left-[-50px] w-[200px]  bg-slate-100 rounded-md  z-30 "
            >
              <Link
                className="userNav border-b-2 relative py-3 w-full text-center  text-sm  font-bold hover:bg-[#e1e1e15c]  transition-all"
                href={"AllCreator"}
              >
                All Creators
              </Link>
              <Link
                className="userNav  relative py-3 w-full text-center text-sm font-bold hover:bg-[#e1e1e15c]  transition-all"
                href={"/statistique"}
              >
                Statistique
              </Link>
            </ul>
          )}
        </div>
      </div>
      {userData && (
        <div className="flex items-start gap-2.5 px-5 self-start relative">
          {userData.role === "user" && (
            <div className="flex items-center gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f82c10f13384df40dd432f70ca57f1214f1fdc4941d8d52ea5a944683cac4b0?"
                className="aspect-[2.71] object-contain object-center w-[57px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                alt="Wallet Icon"
              />
              <Link
                href="/Wallet"
                className="text-white text-base font-semibold tracking-wide whitespace-nowrap justify-center items-stretch self-center grow my-auto px-8 py-2.5 rounded-md border-[0.5px] border-solid border-white max-md:px-5"
              >
                Wallet
              </Link>
            </div>
          )}

          <img
            loading="lazy"
            src={userData.image}
            className="aspect-square cursor-pointer object-contain rounded-full object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full "
            alt="Some Image"
            onClick={() => setShowUser(!showUser)}
          />

          {showUser && (
            <ul
              onMouseLeave={() => setShowUser(false)}
              className="flex flex-col absolute top-[70px] bg-slate-100 rounded-md  z-30 right-0"
            >
              {userData && userData.role !== "user" && (
                <Link
                  className="userNav border-b-2 relative py-3 px-10 hover:bg-[#e1e1e15c]  transition-all  "
                  href={`/${
                    userData.role.charAt(0).toUpperCase() +
                    userData.role.slice(1)
                  }`}
                >
                  Profile
                  <span className="headerSpan w-0 bottom-0 hover:w-full transition-all left-0   absolute "></span>
                </Link>
              )}
              <Link
                className="userNav border-b-2 relative py-3 px-10 hover:bg-[#e1e1e15c]  transition-all "
                href={""}
                onClick={logout}
              >
                Logout
                <span className="headerSpan w-0 bottom-0 hover:w-full transition-all left-0   absolute"></span>
              </Link>
            </ul>
          )}
        </div>
      )}

      {!userData && (
        <div className="flex gap-4  items-center justify-center mr-8">
          <Link
            rel="stylesheet"
            className="border-2 px-5 py-2 hover:bg-[#eee] transition-all bg-white shadow-sm rounded-md "
            href="/auth/sign-in"
          >
            SignIn
          </Link>
          <Link
            rel="stylesheet"
            className="border-2 px-5 py-2 hover:bg-[#eee] transition-all bg-white shadow-sm   rounded-md "
            href="/auth/sign-up"
          >
            SignUp
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
