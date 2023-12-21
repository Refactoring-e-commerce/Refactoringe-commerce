'use client'
import {MyContext,MyContextType} from '../context/_MyContext'
import { useContext } from 'react';
const getAllProduct = async () => {
    const res = await fetch ("http://localhost:8080/Product/product")
    return res.json()
};

export default async function Allproduct() {
  const { user, setUser } = useContext<MyContextType>(MyContext);
  console.log(user);
  
  const product = await getAllProduct();

  return (
    <div className="w-3/4 p-4 ">
      <h2 className="text-3xl font-bold mb-6">Product Cart</h2>
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
        {product.map((product: any) => (
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
                name
              </div>
              <div className="text-sm font-bold text-green-600">
                ${product.price}
                price
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-4 ">
                {/* {like ? <FcLikePlaceholder /> : <FcLike />} */}
              </div>
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
  );
};

