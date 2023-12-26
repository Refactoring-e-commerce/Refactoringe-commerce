"use client";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BsBag } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { getallCollectionbyBrand } from "../../utils/useApi";

const CollectionComp = () => {
  const {
    data,
    isLoading: collectionLoading,
    isError: collectionError,
  } = getallCollectionbyBrand();
  if (collectionLoading) return <h1>Loading</h1>;
  if (collectionError) return <h1>Error</h1>;

 

  return (
    <div className="py-20  w-[840px] ">
      {data?.map((coll: any) => (
        <div key={coll.id}>
          <div className=" relative top-[-10px] flex items-center">
            <img
              src={coll.Creator.image}
              className="  h-[70px] w-[70px] rounded-full border-2 border-white"
            />
            <p className="font-['SF Pro Display'] ml-2 text-[15px] font-semibold text-VanDyke">
              {coll.Creator.fullName}
            </p>
          </div>
          <Carousel>
            {coll.product.map((element: any) => {;

              return (
                <div>
                  <img className=" " src={element.image[0]} />
                  <p className="legend">{element.description}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default CollectionComp;