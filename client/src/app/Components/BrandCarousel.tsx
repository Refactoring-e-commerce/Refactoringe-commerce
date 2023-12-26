import React from "react";

import adidas from "../../../public/adidas.png";
import fila from "../../../public/fila.png";
import marmot from "../../../public/marmot.png";
import nike from "../../../public/nike.png";
import reebok from "../../../public/reebok.png";
import coq from "../../../public/Le_coq_sportif.png";
import puma from "../../../public/puma.png";
import { Slot } from "@radix-ui/react-slot";
import Marquee from "react-fast-marquee";
const brands = [
    {
        pic: adidas,
    },
    {
        pic: fila,
    },
    {
        pic: marmot,
    },
    {
        pic: nike,
    },
    {
        pic: reebok,
    },
    {
        pic: coq,
    },
    {
        pic: puma,
    },
];
export const BrandCarousel = async() => {
    return (
        <>
          <div className="py-8 w-full overflow-hidden z-20 bg-[#ffffffcc] shadow-md">
            <Marquee
              gradient
              gradientColor="hsl(var(--widget))"
              className="text-muted-foreground"
            >
              {brands.map((icon,index) => (
                <div key={index} className="mx-20 transition-all cursor-pointer hover:scale-125">
                  <Slot className="w-28"><img src={icon.pic.src} alt="" /></Slot>
                </div>
              ))}
            </Marquee>
          </div>
        </>
      );
};
