import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const NovelReadHeader = () => {
  return (
    <>
      <nav
        className="flex w-full items-center py-4 bg-dark-blackberry-200 border-b-1 border-dark-blackberry-50/25 px-20 justify-between"
        aria-label="Global"
      >
        <div className="flex flex-row items-center gap-4">
          <Link href={"/novels/AchillesBoy"}>
            <svg
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 8H1M1 8L7.75 14.75M1 8L7.75 1.25"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h1 className="text-white text-2xl font-bold">
            Achilles Boy Next Door
          </h1>
        </div>
        <h1 className="text-white">Chapter 1</h1>
      </nav>
  
    </>
  );
};

export default NovelReadHeader;
