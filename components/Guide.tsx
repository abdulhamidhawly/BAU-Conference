import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div id='program' className="padding-container max-container w-full pb-24 -mt-10">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          {/* <p className="regular-16 bold-40 lg:bold-64 xl:max-w-[390px]">FOR THE DEVELOPMENT OF TRIPOLI AND THE NORTH – YES WE CAN</p> */}
          <p className="flex justify-center items-center text-center w-full mt-14 lg:text-3xl font-bold bold-30 text-black pb-6 ">
            FOR THE DEVELOPMENT OF TRIPOLI AND THE NORTH –{" "}
            <span className="text-blue-500"> YES WE CAN</span>
          </p>

          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <p className="regular-16 text-gray-50  lg:text-3xl font-bold">
              The aim of the conference is to:
            </p>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-500-500 dark:text-blue-500-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="font-bold">
                Encourage Lebanese to change their reality for the better, by
                creating new job opportunities for them,
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-500-500 dark:text-blue-500-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="font-bold">
                Reveal and show case the potential of the North on the Economic
                , Industrial, Social, developmental and touristic levels,
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="font-bold">
                Support promising business projects, benefiting from the
                success, experience of immigrants, and their global network of
                relationships.
              </span>
            </li>
          </ul>

          {/* <p className="regular-16 text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p> */}
        </div>
      </div>

      <div className="flexCenter max-container relative w-[70%]">
        <Image
          src="/bau2.jpg"
          alt="boat"
          width={1000}
          height={80}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Location</p>
                <p className="bold-16 text-blue-500"></p>
              </div>
              <p className="bold-20 mt-2">
                Beirut Arab University - Tripoli Campus
              </p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Time</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Friday & Saturday May 5 & 6, 2023
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
