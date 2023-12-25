"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getFav, deleteFavoriteProduct } from "../utils/useApi";
import { GoHeartFill } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { log } from "console";
const favoriteList = () => {
  const [heart, setheart] = useState("red");
  const { data } = getFav();
 console.log(data);

  const { mutate } = deleteFavoriteProduct();

  // if (isError) return <h1>error</h1>;
  // if (isLoading) return <h1>Loading</h1>;

  const dislike = (productId: string) => {
    mutate(productId);
  };

  return (
    <div>
      <div className="flex flex-col bg-red justify-center items-center bg-opacity">
        <ToastContainer />

        <h1 className="text-white text-[50px]">Liked Products</h1>
      </div>

      <div className="  justify-center flex flex-wrap gap-10 m-10 ">
        {data?.map((Product: any)  => {
          console.log(Product,'gg');

          return (
            <div className="flex flex-col-2 justify-center  " key={Product.id}>
              <div className="w-[384.12px] h-[534.58px] flex flex-col-4 justify-center bg-black  bg-opacity-10 rounded-lg shadow ">
                <div className="rounded-lg m-5 relative top-4 transform h-64  w-60 transition duration-500 hover:scale-125">
                  <img className="w-[240px] h-[282px]" src={Product.Product.image} />
                  <div className=" relative ">
                    <div className="flex flex-col-2 gap-24">
                      <h1 className="text-white text-xl text-opacity-50 font-medium font-['Poppins'] ">
                        {Product.name}
                      </h1>
                      <h2 className="text-white text-sm font-bold font-['Poppins'] ">
                        {Product.price}.000$
                      </h2>
                    </div>
                  </div>

                  <button className=" relative top-10 cursor-pointer [border:none] py-[7.303840637207031px] px-[14.607681274414062px] bg-[transparent] flex-1 rounded-5xs-3 [background:linear-gradient(232.11deg,_#ff5b29,_rgba(255,_242,_245,_0.64)_13.54%,_rgba(255,_61,_0,_0.74)_41.15%,_rgba(144,_12,_63,_0.82)_74.48%,_#900c3f_98.96%)] h-[37px] flex flex-row items-center justify-center box-border hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:bg-orangered">
                    <div className="relative text-mini-6 font-semibold font-poppins text-white text-left inline-block w-[84.3px] h-[21.9px] shrink-0">
                      Buy Now
                    </div>
                  </button>
                </div>

                <GoHeartFill
                  onClick={() => {
                    dislike(Product.id);
                    setheart("white");
                  }}
                  size={40}
                  color={heart}
                  className="text-red-700 text- float-right relative top-[400px] "
                />
              </div>
            </div>
          );
        })}
      </div>
      </div>
  
  );
};

export default favoriteList;
