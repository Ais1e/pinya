import React from "react";
import Image from "next/image";
import PikuAd from "../../../public/pikuad.png";
const MainCTA = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full py-4 2xl:px-32 xl:px-32 lg:px-12">
        <div className="relative flex flex-col lg:items-start md:items-center isolate overflow-hidden bg-slate-100 border border-slate-200 p-12 text-center sm:rounded-3xl sm:px-16 xs:rounded-xl">
          <h2 className="text-3xl font-bold tracking-tight text-blackberry-300 sm:text-4xl ">
            Unleash your creativity at Studio Pinya.
          </h2>
          <p className="mt-6 text-lg leading-8 text-blackberry-300">
            where stories come to life. Join us and share your unique voice with
            the world
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <button
              type="button"
              className="text-white font-quicksand font-bold rounded-md bg-guava-300 px-3.5 py-2.5 text-base text-gray-900 hover:opacity-90 "
            >
              Start Writing
            </button>
            <button
              type="button"
              className="text-blackberry-300 font-quicksand font-bold px-3.5 py-2.5 hover:bg-slate-200 rounded-md"
            >
              View Novels
            </button>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
          </svg>
          <div className="absolute left-0 w-full xs:hidden sm:hidden md:hidden  lg:block z-[-10]">
            <Image className="absolute right-20 b-0" src={PikuAd} alt={""}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCTA;
