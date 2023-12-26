import Link from 'next/link';
import React from 'react'

 const TopButtonHome = () => {
    return (
        <div className="flex z-20 flex-col gap-5 lg:flex-row items-center justify-around mt-20 ">
          <Link href={"AllProduct"}>
            <button className="w-60 h-12  bg-[#382e29] rounded-lg justify-center items-center text-white text-xl font-medium ">
              Main Collection
            </button>
          </Link>
          <button className="text-white text-xl font-medium w-60 h-12 px-26 bg-[#70565099] rounded-lg justify-center items-center">
            Creators Market
          </button>
        </div>
      );
}
export default TopButtonHome