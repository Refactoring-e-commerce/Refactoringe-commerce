"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Addfav, getProductsByCategory, getAllproduct } from "../utils/useApi";
import { log } from "console";

const AllProduct = () => {
  const { data, isLoading, isError, isFetched } = getAllproduct();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [like, setLike] = useState(false);
  const { mutate } = Addfav();

  const mutation = getProductsByCategory(selectedCategory);

  const [products, setProducts] = useState(data);
  // console.log(mutation.data);

  console.log(products);

  const Like = (productId: any) => {
    mutate(productId);
    setLike(!like);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with white background */}
      <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
        <div className="shadow-sm bg-white bg-opacity-10 flex w-full grow flex-col items-stretch mt-1 mx-auto pl-7 pr-5 py-11 rounded-xl max-md:mt-10 max-md:pl-5">
          <div className="flex items-stretch justify-between gap-5 pr-3.5">
            <div className="flex flex-col items-stretch">
              <div className="flex items-center justify-between gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/300cd292d494e77036915e0b960f551719046842ecc6ee255b15386277011bbf?"
                  className="aspect-[1.71] object-contain object-center w-[29px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <button className="text-white text-2xl font-semibold self-stretch">
                  Filters
                </button>
              </div>

              <button className="text-white text-base font-medium mt-14 max-md:mt-10">
                Personal Collections
              </button>
              <div>
                <select
                  className="text-black text-base font-medium mt-14 max-md:mt-10"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  onClick={() => {
                    mutation.mutate(selectedCategory);
                    setProducts(mutation.data);
                  }}
                >
                  <option value="T-Shirt">T-Shirt</option>
                  <option value="SWEAT-SHIRT">SWEAT-SHIRT</option>

              
                </select>
              </div>
            </div>
            <button
              className="text-white text-base font-medium mt-14 max-md:mt-10"
            
            >
              Newrelease
            </button>
          </div>

          <div className="flex flex-col items-center mt-24 self-end max-md:hidden max-md:mt-10"></div>
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-12 mb-[724px] pr-4 max-md:my-10"></div>
      </div>

  
      <div className="w-3/4 p-4 ">
        <h1 className="mb-4 text-3xl  text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Product
          </span>{" "}
          Card
        </h1>
        <p className="text-lg font-normal text-center text-gray-500 lg:text-xl dark:text-gray-400">
          Explore today and find your best fit
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {selectedCategory === "" &&
            data?.map((product: any) => {
              return (
                <div
                  key={product.id}
                  className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-100 object-cover mb-2 rounded-md"
                  />
                  <div className="text-xs font-medium font-['Poppins'] text-gray-500 mb-1">
                    {product.category}
                  </div>
                  <div className="flex">
                    <div className="text-sm text-white font-extralight mb-1 mr-20">
                      {product.name}
                    </div>
                    <div className="text-sm font-bold text-green-600">
                      ${product.price}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Link href="/FavoriteList">
                      <div
                        className="mr-4 "
                        onClick={() => {
                          Like(product.id);
                          setLike(true);
                        }}
                      >
                        {like ? <FcLikePlaceholder /> : <FcLike />}
                      </div>
                    </Link>
                    <button className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center">
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          {mutation.data &&
            mutation.data?.map((product: any) => (
              <div
                key={product.id}
                className={`p-2 rounded-md shadow-md transition-transform transform bg-[#ffffff1a] hover:bg-transparent hover:scale-105 hover:opacity-80`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-100 object-cover mb-2 rounded-md"
                />
                <div className="text-xs font-medium font-['Poppins'] text-gray-500 mb-1">
                  {product.category}
                </div>
                <div className="flex">
                  <div className="text-sm text-white font-extralight mb-1 mr-20">
                    {product.name}
                  </div>
                  <div className="text-sm font-bold text-green-600">
                    ${product.price}
                  </div>
                </div>

                <div className="flex items-center">
                  <Link href="/FavoriteList">
                    <div
                      className="mr-4 "
                      onClick={() => {
                        Like(product.id);
                        setLike(true);
                      }}
                    >
                      {like ? <FcLikePlaceholder /> : <FcLike />}
                    </div>
                  </Link>
                  <button className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
