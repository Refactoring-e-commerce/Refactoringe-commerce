"use client"
import React from "react";
 import {  useState } from "react";
import { imageDb } from "../firebase.config"

import { MdEdit } from "react-icons/md";

import {getAllCreator} from "../utils/useApi"
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Creator: React.FC = () => {
  const [img, setImg] = useState<File | null>(null); // Use File type for img state
     const [imgUrl, setImgUrl] = useState<string[]>([]);
    
      const [creatorData, setCreatorData] = useState<any>({});

       const {
     data,
     isLoading,
     isError,
    }: { data: any; isLoading: boolean; isError: boolean } = getAllCreator();

    if (isLoading) {
     return <h1>Loading</h1>;
   }

   if (isError) {
      return <h1>Error</h1>;
    }


     const handleClickCover = async () => {
       if (imgUrl.length === 0 && img !== null) {
         try {
           const imgRef = ref(imageDb, `files/${v4()}`);
           const value = await uploadBytes(imgRef, img);
           console.log(value);
           const url = await getDownloadURL(value.ref);
           setImgUrl([url]); 
         } catch (error) {
           console.error("Error uploading image:", error);
         }
       } else {
         console.warn("You can only upload one photo at a time.");
       }
     };
  return (
    <div className="self-center w-full max-w-[1041px] mt-20 max-md:max-w-full max-md:mt-10">
      <h1 className="mb-4 text-3xl  text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          ALL
        </span>{" "}
        Creators
      </h1>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch max-md:mt-8">
            <div className="bg-white bg-opacity-10 flex w-full flex-col items-stretch pt-6 pb-3.5 px-5 rounded-md">
              <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <h1>all</h1>
                  {data?.map((image: any) => (
                    <div className="text-indigo-500 text-base font-semibold tracking-normal my-auto">
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={image.image}
                        alt="all"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col max-md:max-w-full max-md:mt-8">
            <div className="flex gap-3.5 self-start items-start">
              <div className="flex grow basis-[0%] flex-col items-stretch mt-1.5">
                {data?.map((creator: any) => (
                  <div
                    key={creator.id}
                    className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
                  >
                    <div className="text-white text-xl font-semibold whitespace-nowrap">
                      {creator.fullName}
                    </div>

                    <div className="text-white text-opacity-50 text-base mt-3">
                      {creator.email}
                    </div>
                    <div className="text-white text-base font-medium self-stretch mt-8 max-md:max-w-full">
                      {creator.bio}
                    </div>
                    <div className="text-white text-base font-medium self-stretch mt-8 max-md:max-w-full">
                      <img src={creator.image} alt="imm" />
                      <input
                        type="file"
                        onChange={(e: any) => setImg(e.target.files[0])}
                      />
                      <button
                        onClick={handleClickCover}
                        className="float-right w-[100px] h-[30px] rounded-[20px] text-white  bg-white bg-opacity-10 flex flex-col-2  "
                      >
                        <MdEdit /> Uplode
                      </button>
                      <br />
                      {imgUrl.map((dataVal) => (
                        <div>
                          <img src={dataVal} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Creator



