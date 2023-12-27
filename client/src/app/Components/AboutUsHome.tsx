import React from "react";

export const AboutUsHome = () => {
  return (
    <div className=" flex flex-col lg-flex-row z-20 justify-center items-center mt-20 text-5 text-center">
      <h1
        style={{ textShadow: "#5e5959 0px 0px 12px" }}
        className="text-[#734532] md:text-black	 text-5xl font-bold  "
      >
        {" "}
        About Us{" "}
      </h1>
      <p className="flex flex-col text-xl  md:text-[#eee]  m-6 md:w-[600px]">
        {" "}
        <strong className="mb-2">New SPORT MODA</strong> {""}
        Embark on an exhilarating journey with New SPORT MODA — more than just a
        sportswear destination, it's your exclusive gateway to a meticulously
        curated world of athletic elegance. Immerse yourself in our carefully
        selected, exclusive collections that redefine the very essence of sports
        sophistication.
      </p>
      <div className="lg:flex-row-reverse relative justify-center flex flex-col items-center md:justify-between mt-20">
        <div
        className=""
          style={{
            width: 374,
            height: 447,
            right: 0,
            marginTop: 10,
            position: "relative",
            
          }}
        >
          <img
            style={{
              width: 324,
              height: 397,
              left: 0,
              top: 0,
              position: "absolute",
              boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.35)",
              borderRadius: 10,
            }}
            className="h-full"
          src="https://cdn.shopify.com/s/files/1/2513/1876/products/1jacketblackcalisthenics_300x.jpg?v=1658142896"
          />
        </div>
        <div className="mt-15 items-center md:text-[#eee]  relative flex flex-col justify-center">
          <h1
            style={{ textShadow: "#5e5959 0px 0px 12px" }}
            className="  text-6xl text-black font-sans font-bold mt-2"
          >
            Fashion That Speaks
          </h1>
          <p className="flex-col  my-5 p-2 md:text-[#eee]  text-xl justify-center items-center w-full  lg:w-[800px] text-center  ">
            Established in 2014, New SPORT MODA surfaced as a visionary force
            poised to revolutionize the exploration of sport fashion. Right from
            the beginning, our mission has been to craft an exclusive haven
            where innovators and enthusiasts of sports-inspired style come
            together. Come and be part of the celebration of the dynamic
            evolution of sportswear, as New SPORT MODA consistently creates
            ripples in the realm of luxury sport fashion.
          </p>
          <div className="flex item-center mr-20">
            <button className="bg-[#733709bc] p-3 rounded-md text-white font-sans w-16 mb-20 ml-14 justify-center">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
