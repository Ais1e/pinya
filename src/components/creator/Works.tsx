import React from "react";
import Novels from "@/data/novelsWorksData";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpenIcon,
  EyeIcon,
  HandThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";


const Works = () => {
  return (
    <>
      <div className="w-full pt-24">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-2xl font-bold">Works</h1>
          <button
            type="button"
            className="text-blackberry-300 font-quicksand font-bold border-2 rounded-md border-blackberry-300 bg-white-300 px-3.5 py-2.5 text-base shadow-sm hover:bg-blackberry-300 hover:text-white"
          >
            View All
          </button>
        </div>
        <div className="flex flex-col gap-6 overflow-auto pb-24 h-full mt-4 w-full">
          {Novels.map((novels) => (
            <div key={novels.name} className="flex flex-row gap-4 pr-4 w-full">
              <div className="w-full h-62 flex justify-center items-center rounded-md  overflow-hidden">
                <Image
                  className="rounded-md transform duration-400 hover:scale-110 transition-transform w-full h-full object-cover"
                  src={novels.img}
                  alt="Picture of the author"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-lg hover:underline">
                  <Link href={`/novels/${novels.href}`}>{novels.name}</Link>
                </h1>
                <div className="flex flex-row gap-2">
                  <div className="flex gap-1 font-medium text-ube-300 flex-row">
                    <p>{novels.views}</p>
                    <EyeIcon className="h-6 w-6" />
                  </div>

                  <div className="flex flex-row gap-1 font-medium text-blueberry-300">
                    <p>{novels.likes}</p>
                    <HandThumbUpIcon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-row gap-1 font-medium text-strawberry-300">
                    <p>{novels.saves}</p>
                    <HeartIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <h2 className="font-bold font-quicksand text-slate-400">
                    Genre
                  </h2>
                  <div>·</div>
                  <div className="text-sm text-pink-400 font-quicksand font-bold bg-pink-50 px-4 py-1 rounded-full">
                    {novels.genre.name}
                  </div>
                </div>
                <div className="text-base text-blackberry-300 font-semibold font-quicksand line-clamp-3">
                  {novels.description}
                </div>
                <div className="flex flex-row gap-1 font-bold">
                  <BookOpenIcon className="h-6 w-6 mr-1" />
                  {novels.chapters}
                  <p>Chapters</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
