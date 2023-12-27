"use client";
import React, { useState } from "react";

export const Questions = () => {
  const allLabels = [
    {
      oneLabel: "Describe Your Experience",
    },
    {
      oneLabel: "Your Thoughts Matter",
    },
    {
      oneLabel: "Your Thoughts Matter",
    },
  ];

  const SecondLabel = [
    {
      oneLabel: "Let Us Know Your Insights",
    },
    {
      oneLabel: "Describe Your Interaction",
    },
    {
      oneLabel: "Detail Your Feedback",
    },
  ];

  return (
    <div className="flex flex-col  z-50 lg-flex-row justify-center items-center">
      <h1
        style={{ textShadow: "#5e5959 0px 0px 12px" }}
        className="text-[#734532] md:text-black	text-center text-5xl font-bold  "
      >
        Frequently Asked <br />
        Quetion{" "}
      </h1>
      <p className="flex flex-col text-xl  text-center md:text-[#eee]  m-6 md:w-[600px]">
        Get the answers you need quickly and effortlessly with our Frequently
        Asked Questions—your key to a smooth and informed{" "}
        <strong>NEW MODA</strong> experience.
      </p>
      <div className="flex items-center bg-[#0000008c] md:bg-transparent  justify-around flex-col gap-6 p-6 pt-8 mb-6 ">
        <p className="text-white   font-bold">Wanna Ask Something?</p>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="flex flex-col gap-3 w-96  ">
            {allLabels.map((holder, i) => {
              return <InputQuetions key={i} {...holder} />;
            })}
          </div>
          <div className="flex flex-col gap-3  w-96  ">
            {SecondLabel.map((holder, i) => {
              return <InputQuetions key={i} {...holder} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const InputQuetions = ({ oneLabel }) => {
  const [label, setLabel] = useState(false);
  console.log(oneLabel);

  return (
    <div className="flex flex-col">
      <label
        className={`  ${
          label ? "translate-y-0" : "translate-y-10"
        } font-semibold transition-all text-[#eeeeee7b]`}
      >
        {oneLabel}
      </label>
      <input
        type="text"
        onClick={() => {
          setLabel(true);
        }}
        onBlur={() => setLabel(false)}
        className="opacity-50 text-white  border-b-2 border-emerald-50 bg-transparent border-solid outline-none p-2"
      />
    </div>
  );
};
