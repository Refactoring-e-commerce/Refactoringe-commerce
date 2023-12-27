"use client";
import React, { lazy, useState } from "react";
import { Addfav, getAllproduct } from "@/utils/useApi";
import Image from "next/image";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
export const ItemIncomingHome = () => {
  const { data } = getAllproduct();

  const [like, setLike] = useState(false);

  const { mutate } = Addfav();
  const Like = (productId: string) => {
    mutate(productId);
  };

  return (
    <div className="z-20 ">
      <div className="flex flex-col lg-flex-row justify-center items-center mt-20 text-5 text-center">
        <h1
          style={{ textShadow: "#5e5959 0px 0px 12px" }}
          className="text-[#734532] text-5xl md:text-black font-bold mb-3"
        >
          New - Trending
        </h1>
        <p className="flex flex-col m-6 md:text-white text-xl md:w-[600px]">
          Discover unparalleled style with our latest and trending products,
          where innovation meets elegance in every piece.
        </p>
      </div>

      <div className="flex p-10  cursor-pointer gap-x-20">
        {data?.slice(0, 6).map((product: any) => (
          <div
            key={product.id}
            className={`p-2 bg-white rounded-md shadow-md transition-transform transform bg-[#ffffff1a] `}
          >
            <img
              src={product.image}
              alt={product.name}
              className=" w-64  hover:scale-95 hover:opacity-80 transition-all hover:shadow-md object-cover mb-2 rounded-md"
            />
            <div className="font-medium font-['Poppins'] text-gray-500 mb-1">
              <strong> Category:</strong> {product.category}
            </div>
            <div className="flex font-medium items-center justify-start gap-28">
              <div className=" font-['Poppins']   flex mb-1 ">
                <strong> product: </strong> {product.name}
              </div>
              <div className="text-lg font-bold text-green-600">
                ${product.price}
              </div>
            </div>

            <div className="flex items-center justify-around">
              <div>
                <div
                  className="mr-4 "
                  onClick={() => {
                    Like(product.id);
                    setLike(!like);
                  }}
                >
                  {like ? (
                    <FcLikePlaceholder className="text-3xl" />
                  ) : (
                    <FcLike className="text-3xl " />
                  )}
                </div>
              </div>
              <button className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md self-center">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
