"use client";
import { FEATURES, FEATURES2, FEATURES3 } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const handleNextClick = () => {
//   if (currentContent < FEATURES.length - 1) {
//     setCurrentContent(currentContent + 1);
//   }
// };

const R = [
  { session: "Session 1", features: FEATURES },
  { session: "Session 2", features: FEATURES2 },
  { session: "Session 3", features: FEATURES3 },
];

const Features = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
        <div className="sm:flex sm:justify-end sm:w-[1850px] sm:-ml-96 sm:mb-8">
          <div className="lg:mr-36">
            <div className="bg-blue-500 mt-10 lg:-mt-0 p-4 lg:p-8 max-sm:m-14 xl:max-h-[200px] xl:rounded-5xl xl:py-8 relative overflow-hidden rounded-5xl">
              <h1 className="text-5xl capitalize text-white px-7 py-2 max-sm:text-base">
                <strong>OUR SPEAKERS</strong>
              </h1>
              <Image
                src="/quote.svg"
                alt="camp-2"
                width={186}
                height={219}
                className="camp-quote"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center sm:px-10">
          {/* back button */}
          <div className="h-[100%] max-sm:hidden p-2">
            <button
              className={`mt-4 border border-1  text-white p-3 rounded-full ${
                index === 0 ? "bg-gray-100" : ""
              }`}
              onClick={() => setIndex(index - 1)}
              disabled={index === 0}
            >
              <FaChevronLeft size={20} color="black" />
            </button>
          </div>
          <div className="lg:flex max-container padding-container relative w-full justify-end shadow shadow-gray-20 sm:h-[800px]">
            <div className="flex justify-center items-center flex-1 lg:min-h-[900px] lg:pb-40">
              <h1 className="regular-32 bold-40 lg:pb-0">
                {R[index].session}
              </h1>
            </div>
            <div className="z-20 flex w-full flex-col lg:w-[65%] p-14">
              {/* <div id='speaker' className='relative'>
            <h2 className="bold-40 lg:bold-64">Our Speakers</h2>
          </div> */}
              <ul className="mt-5 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
                {R[index].features.map((feature) => (
                  <FeatureItem
                    key={feature.title}
                    title={feature.title}
                    icon={feature.icon}
                    description={feature.description}
                    topic={feature.topic}
                  />
                ))} 
              </ul>
            </div>
          </div>

          {/* next button */}
          <div className="p-2">
          <button
            className={`mt-4 border border-1 text-white p-3 rounded-full max-sm:hidden ${
              index === R.length - 1 ? "bg-gray-100" : ""
            }`}
            onClick={() => setIndex(index + 1)}
            disabled={index === R.length - 1}
          >
            <FaChevronRight size={20} color="black" />
          </button>
          </div>
         
        </div>

        
        <div className="flex gap-6">

          {/* back button */}
        <button
            className={`mt-4 border border-1 text-white p-3 rounded-full sm:hidden  ${
              index === 0 ? "bg-gray-100" : ""
            }`}
            onClick={() => setIndex(index - 1)}
            disabled={index === 0}
          >
            <FaChevronLeft size={20} color="black" />
          </button>

          {/* next button */}
          <button
            className={`mt-4 border border-1 text-white p-3 rounded-full sm:hidden  ${
              index === R.length - 1 ? "bg-gray-100" : ""
            }`}
            onClick={() => setIndex(index + 1)}
            disabled={index === R.length - 1}
          >
            <FaChevronRight size={20} color="black" />
          </button>
        </div>
      </section>
    </div>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  topic: string;
};

const FeatureItem = ({ title, icon, description, topic }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="flex items-center">
        <div className="rounded-full p-4 lg:p-7 bg-blue-500">
          <Image src={icon} alt="map" width={28} height={28} />
        </div>
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize p-3">{topic}</h2>
      </div>
      <h2 className="bold-20 lg:bold-28 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30  lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
