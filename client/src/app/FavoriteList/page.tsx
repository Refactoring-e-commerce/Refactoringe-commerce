"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { getFav, deleteFavoriteProduct } from "../utils/useApi";
import { GoHeartFill } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { log } from "console";
const favoriteList = () => {
  const [heart, setheart] = useState("red");
  const { data,isError,isLoading } = getFav();
 console.log(data);

  const { mutate } = deleteFavoriteProduct();

//   if (isError) return <h1>error</h1>;
//   if (isLoading) return <h1>Loading</h1>;

  const dislike = (productId: string) => {
    mutate(productId);
  };

  return (
    <div>
      <div className="flex flex-col bg-red justify-center items-center bg-opacity">
        <ToastContainer />

        <h1 className="mb-4 text-3xl  text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Favorite
          </span>{" "}
          List
        </h1>
      </div>

      <div className="  justify-center flex flex-wrap gap-10 m-10 ">
      {data?.map((Product: any) => (
            <div
              key={Product.id}
              className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
            >
              <img
                src={Product.Product.image}
                alt={Product.Product.name}
                className="w-full h-100 object-cover mb-2 rounded-md"
              />
              <div className="text-xs font-medium font-['Poppins'] text-gray-500 mb-1">
                {Product.Product.category}
              </div>
              <div className="flex">
                <div className="text-sm text-white font-extralight mb-1 mr-20">
                  {Product.Product.name}
                </div>
                <div className="text-sm font-bold text-green-600">
                  ${Product.Product.price}
                </div>
              </div>

              <div className="flex items-center">
              
              <div
                  className="mr-4 "
                  onClick={() => { 
                     dislike(Product.Product.id)
                     setheart('white')
                     window.location.reload()
                  
                  }} 
                  color={heart}
                >
                  {heart? <FcLikePlaceholder /> : <FcLike />}
                </div>
                </div>
                <button
                  className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center"
                >
                  Buy Now
                </button>
              </div>
            
          ))}
      </div> 
      { data && data.length <= 0 && 
      <div className="flex justify-center m-9">
      <h1 className="text-xl text-white  ">U Haven't Liked Any Products yet</h1>
    </div> }
      </div>
  
  );
}; 
export  default favoriteList