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
    <div className="py-10">
      {data?.map((coll: any) => (
        <Carousel>
          <div>
            <img src="assets/1.jpeg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      ))}
    </div>
  );
};

export default CollectionComp;
