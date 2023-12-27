"use client"
import Link from "next/link";

const Box1 = () => {
  return (
    <div className=" h-full relative w-full my-20 flex flex-col lg:flex-row  justify-center items-center ">
      <div>
        <h1
          style={{ textShadow: "#5e5959 0px 0px 12px" }}
          className="text-[#705650] pb-5  md:text-black text-6xl font-extrabold font-['SF Pro Display'] text-center"
        >
          New MODA
        </h1>
        <div className="text-center md:text-[#eee]  ">
          <strong> Elevate Your Style, Effortlessly! </strong>
          <p className="flex-col justify-center items-center m-6  text-center">
            Discover curated luxury, connect with top creators, and shop
            exclusive fashion effortlessly on New MODA. Your go-to app for a
            seamless blend of opulence and simplicity. Redefine your style with
            us. #NewMODA Style✨
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 mt-6">
          <button className=" w-40 h-12 bg-gradient-to-bl bg-[#382e29] rounded-lg justify-center items-center gap-2.3 inline-flex text-white text-xl font-medium font-['Poppins']">
            Explore Now
          </button>
          <Link href={"/allProduct"}>
            <button className="text-white text-xl font-medium font-['Poppins'] w-28 h-12 px-5 py-2.5 ] top-0  bg-[#70565099] rounded-lg justify-center items-center gap-2.5 inline-flex">
              Products
            </button>
          </Link>
        </div>
        <div className="flex justify-center gap-20 py-4 mt-5 items-center text-center">
          <div>
            <h1 className=" text-white text-3xl font-bold font-['Poppins']">
              100+
            </h1>
            <p className="text-[blanchedalmond] text-xl font-medium font-['Poppins']">
              Brands
            </p>
          </div>
          <div>
            <h1 className=" text-white text-3xl font-bold font-['Poppins']">
              20k+
            </h1>
            <p className="text-[blanchedalmond] text-xl font-medium font-['Poppins']">
              Fashion Designer
            </p>
          </div>
          <div>
            <h1 className=" text-white text-3xl font-bold font-['Poppins']">
              60+
            </h1>
            <p className="text-[blanchedalmond] text-xl font-medium font-['Poppins']">
              Fashion Shows
            </p>
          </div>
        </div>
      </div>

      <div className="w-fit h-full    relative grid  overflow-hidden auto-rows-max gap-5 justify-items-center place-items-center grid-cols-3 ">
        <img
          className="brightness-75   w-full md:w-full  rounded-lg hover:brightness-100 transition-all shadow-md  h-fit"
          src="https://fashinza.com/textile/wp-content/uploads/2021/11/shutterstock_1121333510-1.jpg"
        />
        <img
          className="brightness-75   w-full md:w-full hover:brightness-100 transition-all"
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/376151/15/fnd/PNA/fmt/png/Fuse-2.0-Men's-Training-Shoes"
        />
        <img
          className="brightness-75   w-full hover:brightness-100 transition-all  row-span-3 rounded-lg shadow-md  h-fit"
          src="https://fentral.com/clothes/activewear/NEWBALANCE/NEWBALANCE_MODEL14.png"
        />
        <img
          className="brightness-75   w-full hover:brightness-100 transition-all md:w-full rounded-lg shadow-md  h-fit"
          src="https://image.made-in-china.com/2f0j00pOihBQjsZWzI/Custom-Logo-Workout-Apparel-Men-Fashion-Fitness-T-Shirt-Active-Wear-Sport-Clothing-for-Gym-Men-Work-out-Shirt-Clothes.webp"
        />
        <video
          autoPlay={true}
          loop={true}
          className="brightness-75   w-full hover:brightness-100 transition-all md:w-full rounded-lg shadow-md  h-fit"
          src="https://videos.puma.net/videos/376151/13/vid01/fnd/PNA/"
        ></video>

        <img
          className="brightness-75   w-full hover:brightness-100 transition-all md:w-full rounded-lg shadow-md  h-fit"
          src="https://www.gornation.com/cdn/shop/products/1streetworkouttanktopblack_400x.jpg?v=1658144214"
        />

        <img
          className="brightness-75   w-full hover:brightness-100 transition-all md:w-full rounded-lg shadow-md  h-fit"
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/522128/92/mod01/fnd/PNA/fmt/png/PUMA-Fit-WovenMen's-Training-Jacket"
        />
      </div>
    </div>
  );
};
export default Box1;
