"use client";
import { Fragment } from "react";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import HomeHeader from "@/components/headers/HomeHeader";
import Image1 from "../../../../../public/AchillesBoy.png";
import Image from "next/image";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  EyeIcon,
  HandThumbUpIcon,
  HeartIcon,
  BookOpenIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import Novels from "@/data/novelsData";
import Volume from "@/data/volumeData";
import IconDropdown from "@/components/buttons/IconDropdown";

export default function NovelName() {
  console.log();
  function classNames(arg0: string, arg1: string): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <main className="flex flex-col justify-center w-full pb-10 pt-20 bg-slate-50">
        <HomeHeader />
        <section className="flex flex-col w-full justify-center items-center  py-10">
          <div className="2xl:px-80 xl:px-32 lg:px-12 gap-6 w-full overscroll-none">
            {Novels.length > 0 && (
              <div key={Novels[0].name}>
                <div className="flex gap-8">
                  <Image
                    src={Image1}
                    width={300}
                    height={200}
                    alt={"none"}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">
                      Achilles and the Boy Next Door
                    </h1>
                    <div className="flex flex-row items-center gap-4 ">
                      <div className="flex flex-row gap-2">
                        <div className="flex gap-1 font-medium text-ube-300 flex-row">
                          <p>{Novels[0].views}</p>
                          <EyeIcon className="h-6 w-6" />
                        </div>
                        <div className="flex flex-row gap-1 font-medium text-blueberry-300">
                          <p>{Novels[0].likes}</p>
                          <HandThumbUpIcon className="h-6 w-6" />
                        </div>
                        <div className="flex flex-row gap-1 font-medium text-strawberry-300">
                          <p>{Novels[0].saves}</p>
                          <HeartIcon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <p className="text-md font-semibold font-quicksand w-full">
                      {Novels[0].description}
                    </p>
                    <div className="flex flex-row gap-1">
                      <StarIcon className="w-8 h-8 text-pineapple-300" />
                      <StarIcon className="w-8 h-8 text-pineapple-300" />
                      <StarIcon className="w-8 h-8 text-pineapple-300" />
                      <StarIcon className="w-8 h-8 text-pineapple-300" />
                      <StarIcon className="w-8 h-8 text-pineapple-300" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl font-bold text-blackberry-300 font">
                        Creator
                      </h1>
                      <div className="mb-2">
                        <Link
                          href={"/creator/aisle-sensei"}
                          className="hover:underline text-md font-medium text-white bg-ube-300 py-1 px-2"
                        >
                          Aisle Sensei
                        </Link>
                      </div>
                      <h2 className="font-semibold font-quicksand text-slate-500 italic">
                        I'm thrilled to share with you the culmination of
                        countless hours of dedication and passion in my latest
                        series, "Achilles and the Boy Next Door."
                      </h2>
                      <div>
                        <Link
                          type="button"
                          className=" font-quicksand rounded-md bg-blackberry-300 px-5 py-2.5 text-lg font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          href={"/novels/AchillesBoy/volume-1/chapter-1"}
                        >
                          Start Reading
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="flex flex-col 2xl:px-80 xl:px-32 lg:px-12 gap-4">
          <div className="flex flex-col  gap-4 w-full mt-10 ">
            <div className="flex flex-row items-center w-full justify-between">
              <h1 className="text-xl font-bold text-blackberry-300 font">
                Chapters
              </h1>
            </div>
            <div className="flex flex-row items-center gap-3">
              <button
                type="button"
                className="mr-2 font-quicksand rounded-md bg-blackberry-300 px-5 py-2.5 font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Read Latest
              </button>
              <h1 className="font-bold">Volume 5</h1>
              <p>:</p>
              <h1>12 Chapters</h1>
              <p>:</p>
              <h1 className="font-semibold">Going into moms house</h1>
            </div>
          </div>
          {Volume.map((items) => (
            <div
              key={items.id}
              className="flex flex-row justify-between items-center w-full p-7 border-2 border-slate-300 rounded-lg"
            >
              <div className="flex flex-row gap-6">
                <h1 className="font-bold">
                  Volume <span>{items.number}</span>
                </h1>
                <h1>
                  <span>{items.chapters}</span> Chapters
                </h1>
              </div>
              <button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ube-300">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          )).reverse()}
        </section>
      </main>
    </>
  );
}
