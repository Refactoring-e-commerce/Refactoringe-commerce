import Image from "next/image";
import React, { useState } from "react";
import Brand from "@public/brand.png";
import Creator from "@public/creator.png";
import Userr from "@public/user.png";
const Role = ({ setEmailV, setRoleV, setRole }) => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const SubmitRole = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (selectedImage !== "") {
      setRole(selectedImage);
      setRoleV(false);
      setEmailV(true);
    }
  };

  return (
    <div className="flex gap-10 items-center justify-center min-h-screen flex-col lg:flex-row">
      <div className={`flex flex-col justify-center items-center relative w-[600px]  overflow-hidden`}>
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
                selectedImage === "brand" ? " w-48" : "w-32"
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
                selectedImage === "creator" ? " w-44" : "w-32"
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
          <button
            className="bg-white w-28 h-10 hover:opacity-80  transition-opacity rounded-md"
            onClick={SubmitRole}
          >
            Next
          </button>
      </div>
    </div>
  );
};
export default Role;
