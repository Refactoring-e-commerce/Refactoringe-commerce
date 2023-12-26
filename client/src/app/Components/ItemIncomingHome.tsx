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
          style={{ textShadow: "0 0 4px #00000070" }}
          className="text-[#734532] text-5xl md:text-black font-bold mb-3"
        >
          New - Trending
        </h1>
        <p  className="flex flex-col m-6 md:text-white md:w-[600px]">
          Discover unparalleled style with our latest and trending products,
          where innovation meets elegance in every piece.
        </p>
      </div>

      <div className="grid grid-cols-1 p-10   md:grid-cols-3 l  cursor-pointer gap-x-20">
        {data?.slice(0, 6).map((product: any) => (
          <div
            key={product.id}
            className={`p-2 bg-white rounded-md shadow-md transition-transform transform bg-[#ffffff1a] `}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96  hover:scale-95 hover:opacity-80 transition-all hover:shadow-md object-cover mb-2 rounded-md"
            />
            <div className="text-xs font-medium font-['Poppins'] text-gray-500 mb-1">
              {product.category}
            </div>
            <div className="flex items-center justify-around">
              <div className="text-lg   mb-1 ">
                <strong>product: </strong>
                {product.name}
              </div>
              <div className="text-lg font-bold text-green-600">
                ${product.price}
              </div>
            </div>

            <div className="flex items-center">
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
