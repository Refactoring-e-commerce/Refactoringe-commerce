"use client";
import React, { useState } from "react";
import Image from "next/image";
import Brand from "@public/brand.png";
import Creator from "@public/creator.png";
import Userr from "@public/user.png";
import { usePathname } from "next/navigation";
import Signin from "../sign-in/page";
import Signup from "../sign-up/page";
const User = () => {
  const pathname = usePathname();

  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const getParagraphContent = () => {
    switch (selectedImage) {
      case "brand":
        return "Selected Brand ";
      case "creator":
        return "Selected Creator ";
      case "user":
        return "Selected User ";
      default:
        return "Explore the world of meta fashion";
    }
  };

  return (
    <div className="flex gap-10 items-center justify-center min-h-screen flex-col lg:flex-row">
      <div className={`flex flex-col relative w-[600px]  overflow-hidden`}>
        <div className="flex  gap-5 md:flex-row items-center justify-center transition-all">
          <div
            className={`flex flex-col items-center hover:scale-105 cursor-pointer left-0`}
            id="brand"
            onClick={() => handleImageClick("brand")}
          >
            <p
              className={`${
                selectedImage === "brand"
                  ? " bg-[#e3c6af] text-white"
                  : "bg-white"
              } p-3 rounded-full cursor-pointer transition-all `}
            >
              Brand
            </p>
            <Image
              className={`${
                selectedImage === "brand" ? " w-56" : "w-32"
              }   transition-all`}
              src={Brand}
              alt=""
            />
          </div>

          <div
            className={`flex flex-col items-center hover:scale-105 cursor-pointer transition-all`}
            id="creator"
            onClick={() => handleImageClick("creator")}
          >
            <p
              className={`${
                selectedImage === "creator"
                  ? " bg-[#e3c6af] text-white"
                  : "bg-white"
              } p-3 rounded-full cursor-pointer transition-all`}
            >
              Creator
            </p>
            <Image
              className={`${
                selectedImage === "creator" ? "w-52" : "w-32"
              }  transition-all `}
              src={Creator}
              alt=""
            />
          </div>

          <div
            className={`flex flex-col items-center cursor-pointer hover:scale-105 transition-all right-0`}
            id="user"
            onClick={() => handleImageClick("user")}
          >
            <p
              className={`${
                selectedImage === "user"
                  ? " bg-[#e3c6af] text-white"
                  : "bg-white"
              } p-3 rounded-full cursor-pointer transition-all`}
            >
              User
            </p>

            <Image
              className={`${
                selectedImage === "user" ? " w-36" : "w-32"
              } transition-all`}
              src={Userr}
              alt=""
            />
          </div>
        </div>
        <p className="font-sans font-semibold text-xl text-center">
          {getParagraphContent()}
        </p>
      </div>
      {pathname === "/auth/sign-in" ? (
        <Signin selected={selectedImage}  />
      ) : (
        <Signup selected={selectedImage}  />
      )}
    </div>
  );
};

export default User;
