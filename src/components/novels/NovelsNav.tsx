import { Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const NovelReadHeader = () => {
  return (
    <>
      <nav
        className="flex w-full items-center py-4 bg-dark-blackberry-200/50 px-20 justify-between absolute bottom-0 backdrop-blur-md border-t border-violet-500/10"
        aria-label="Global"
      >
        <Link

          href={"/novels/AchillesBoy/volume-1/chapter-1"}
          className="pl-2 py-3 bg-violet-800 pr-4 text-slate-200 rounded-md"
        >
          <div className="flex flex-row gap-2">
            <ChevronLeftIcon className="w-6 h-6" />
            Previous Chapter
          </div>
        </Link>

        <div className="pr-4 pl-5 py-2 bg-violet-800   text-slate-200 rounded-md flex flex-row gap-4 items-center font-semibold">
          Chapter 1
          <div className="p-1 hover:bg-violet-500 rounded">
            <Bars3Icon className="w-8"></Bars3Icon>
          </div>
        </div>
        <Link

          href={"/novels/AchillesBoy/volume-1/chapter-2"}
          className="pr-3 py-3 bg-violet-800  pl-4 text-slate-200 rounded-md"
        >
          <div className="flex flex-row gap-2">
            Next Chapter
            <ChevronRightIcon className="w-6 h-6" />
          </div>
        </Link>
      </nav>
    </>
  );
};

export default NovelReadHeader;
