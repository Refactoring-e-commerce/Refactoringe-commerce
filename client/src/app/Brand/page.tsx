"use client"
import React,{useState} from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaPen } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { IoIosAddCircleOutline } from 'react-icons/io'
import CollectionComp from './Components/collectioncomp'
import Formadd  from './Components/Formadd '
import { getoneBrandProfile } from "../utils/useApi";
// import { log } from 'console'

// import { Error } from "./error";
// import { Loading } from "./loading";



const BrandProfile = () => {
  const { data, isLoading, isError }: { data: any; isLoading: boolean; isError: boolean } = getoneBrandProfile();
  const [show,setShow] = useState(false)
  if (isLoading) {return <h1>Loading</h1>; }
  if (isError) {return <h1>Error</h1>;}


  return (
    <>
      <div className="h-fit min-h-full w-full px-12 py-7">
        <div className=" relative flex w-full flex-col items-center justify-center p-10">
          <div className="relative">
            <img
              src={data.cover}
              className="bg-container  md: md: h-[455px] w-[1540px] rounded-[5px] bg-Liver bg-opacity-10 brightness-100"
            />
            <div className=" absolute bottom-2  right-[10px] flex h-10  w-10 cursor-pointer items-center  justify-center rounded-[150px] bg-Liver">
              <FaPen className="text-md  bg-[#733709bc}-500  absolute text-BabyPowder " />
            </div>
          </div>

          <div className="relative top-[-70px] flex flex-col items-center justify-center">
            <img
              src={data.image}
              className="  bottom-[-40px] h-[200px] w-[200px] rounded-full border-2 border-white"
            />
            <div className=" absolute bottom-0 right-0 flex h-20  w-10 cursor-pointer items-center  justify-center rounded-[150px] bg-Liver">
              <FaCamera className="text-md bg-Liver text-black " />
            </div>
          </div>
          <p className=" font-['SF Pro Display'] bottom-[50px] w-fit text-center text-[28px] font-semibold text-VanDyke md:absolute md:bottom-[67px]">
            {data.fullName}
          </p>

          <div className=" md:absolute flex h-[45px] w-[164px] items-center justify-center gap-2.5 rounded-[150px] bg-VanDyke p-2.5 md:bottom-[90px] md:right-[00px]">
            <span className="font-['SF Pro Display'] absolute cursor-pointer text-base font-semibold text-black">
              Edit Profile
            </span>
          </div>
          <span className="font-['SF Pro Display']  w-fit text-center text-base font-normal leading-[25px] text-VanDyke text-opacity-80 md:absolute md:bottom-[-4px] md:w-[896px]">
            {data.bio}
          </span>
        </div>
        <div>
      
        <div>
          <IoIosAddCircleOutline className="my-16 cursor-pointer rounded-[150px] bg-Liver text-black" size={30} onClick={() => setShow(true)} />
          {show && (
              <IoIosCloseCircleOutline
                className="cursor-pointer rounded-[150px] bg-Liver text-black ml-auto"
                size={30}
                onClick={() => setShow(false)}
              />
            )}
          {show && <Formadd />}
        </div>
    </div>
      
        <div className="flex flex-col md:flex-row">
          <div className=" my-16 mr-24 w-[540px] rounded-[15px] bg-black bg-opacity-10 py-20  "></div>
            <CollectionComp />
            
        </div>
      </div>
    </>
  );
}

export default BrandProfile