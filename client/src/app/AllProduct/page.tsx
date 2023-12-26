"use client";
import { getAllproduct } from "../utils/useApi";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import { Addfav, Addwallet } from "../utils/useApi";
// import { useRouter } from "next/router";
import Link from "next/link";
// import {SlideBar} from "./Components/SlideBar"


// import { Error } from "./error";
// import { Loading } from "./loading";

const AllProduct = () => {
  const { data, isLoading ,isError} = getAllproduct();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    // const [showOptions, setShowOptions] = useState(false);
    const [isCartHovered, setIsCartHovered] = useState(false);
    const [like, setLike] = useState(false);
    const [heart, setheart] = useState("white");
    

    const [favorites, setFavorites] = useState([]);
 
  // const data: string[] = [];
  console.log(typeof data,
    'DDDDDDDDDDDDDDDDDDDDDDDDDDD'); 

  const {mutate}= Addfav() 
  const {mutate:wallet} = Addwallet()

  if (isLoading) return <h1>loading</h1>;
  if (isError) return <h1>error</h1>;
  
    const Like =(productId: string)=>{
      mutate(productId) 
     
    } 
    const BuyNow =(productId:string)=>{
      wallet(productId)
    }
       
  //    const showAllProducts = () => {
  //      setFilteredProducts([]);
  //      setSelectedCategory(null);
  //    };

  //    const toggleOptions = () => {
  //      setShowOptions(!showOptions);
  //    };

    //  const filter = (cat) => {
    //    const res = products.filter((current) => current.category === cat);
    //    setFilteredProducts(res);
    //    setSelectedCategory(cat);
    //    setShowOptions(false);
    //  };

    //  const Newrelease = () => {
    //    const res = products.filter((current) => current.isNew);
    //    setFilteredProducts(res);
    //    setSelectedCategory(null);
    //    setShowOptions(false);
    //  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with white background */}
      {/* <SlideBar/> */}
      
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
        className={`mb-4 ${
          isCartHovered
            ? "bg-white"
            : "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500"
        } `}
        onMouseEnter={() => setIsCartHovered(true)}
        onMouseLeave={() => setIsCartHovered(false)}
        ></div>
        <div>
          {!selectedCategory &&
          !filteredProducts.length &&
          `${products.length} items`}
        {selectedCategory && `in ${selectedCategory}`}
        {filteredProducts.length > 0 && ` | ${filteredProducts.length} items`}
        </div>

        <br />
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.map((product:any) => (
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
                    //  setheart("red") 
                  }}
                  // color={heart}
                 
                >

                  {like ? <FcLikePlaceholder /> : <FcLike />}
                </div>
                </Link> 
                <Link 
                href='/Wallet'
                >
                <button
                  className="mt-2 ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md self-center"
                  onClick={()=>{
                    BuyNow(product.id)
                  }}
                >
                  Buy Now
                </button> 
                </Link>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;