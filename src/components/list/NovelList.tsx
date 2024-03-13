import React from "react";

import {
  EyeIcon,
  HandThumbUpIcon,
  HeartIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Novels from "@/data/novelsData"
import Link from "next/link";

const NovelList = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        {Novels.map((novels) => (
          <div key={novels.name} className="flex flex-row gap-4 py-4">
            <Image
              className="rounded-md transition-transform duration-200 hover:scale-105"
              src={novels.img}
              width={140}
              height={250}
              alt="Picture of the author"
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg hover:underline">
                <Link href={`novels/${novels.href}`}>{novels.name}</Link>
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
    </>
  );
};

export default NovelList;
