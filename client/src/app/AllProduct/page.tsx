"use client";
import { getAllproduct } from "../utils/useApi";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import { Addfav } from "../utils/useApi";
// import { useRouter } from "next/router";
import Link from "next/link";

// import { Error } from "./error";
// import { Loading } from "./loading";

const AllProduct = () => {
  const { data } = getAllproduct();
   const [like, setLike] = useState(false);
  // const data: string[] = [];
  console.log(data); 

  const {mutate}= Addfav()

  // if (isLoading) return <h1>loading</h1>;
  // if (isError) return <h1>error</h1>;

  //  const dislike = (id:any) => {
  //    setLike(!like);
       
  //      } 
     
    const Like =(productId: string)=>{
      mutate(productId) 
     

    }
       
 

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with white background */}
      <div className="shadow-sm bg-white bg-opacity-10 flex max-w-[300px] w-full flex-col items-stretch mx-auto pl-6 mt-10 pr-5 py-11 rounded-xl">
        <div className="px-4 py-4 ">
          <ul className="mt-6 space-y-1">
            <li>
              <a
                href=""
                className="block rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700"
              >
                FILTER
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Collection </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Spring-Summer
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      AutunmWinter
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Category </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Men
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Women
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Status </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Ok
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Not OK
                  </a>
                </li>
              </ul>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Price </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    A--Z
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Z--A
                  </a>
                </li>
              </ul>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> ALL </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    FavList
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Wallet
                  </a>
                </li>
              </ul>
            </details>
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                BrandProfile
              </a>
            </li>
            <br />
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                CreatorProfile
              </a>
            </li>
          </ul>
        </div>
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

        <div
        // className={`mb-4 ${
        //   isCartHovered
        //     ? "bg-white"
        //     : "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500"
        // } `}
        // onMouseEnter={() => setIsCartHovered(true)}
        // onMouseLeave={() => setIsCartHovered(false)}
        ></div>
        <div>
          {/* {!selectedCategory &&
          !filteredProducts.length &&
          `${products.length} items`}
        {selectedCategory && `in ${selectedCategory}`}
        {filteredProducts.length > 0 && ` | ${filteredProducts.length} items`} */}
        </div>

        <br />
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.map((product: any) => (
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
                <Link 
                href="/FavoriteList"
                >
                <div
                  className="mr-4 "
                  onClick={() => { 
                     Like( product.id)
                     setLike(true)  
                  }}
                >

                  {like ? <FcLikePlaceholder /> : <FcLike />}
                </div>
                </Link>
                <button
                  className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center"
                  // onClick={() => addToFavorites(product)} // Also add the product to favorites on button click
                >
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
