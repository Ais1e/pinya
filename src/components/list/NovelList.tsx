import React from "react";

import {
  EyeIcon,
  HandThumbUpIcon,
  HeartIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import Image1 from "../../../public/AchillesBoy.png";
import Image2 from "../../../public/HellsConsort.png";
import Image3 from "../../../public/HusbandsPastLives.png";
import Image4 from "../../../public/MatchmakerPrince.png";
import Image5 from "../../../public/ThreeLifetimes.png";
import Image6 from "../../../public/Cultivating.png";

const Novels = [
  {
    name: "Achilles and the Boy Next Door",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image1,
    chapters: 200,
  },
  {
    name: "Hells Consort",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image2,
    chapters: 100,
  },
  {
    name: "HusbandsPastLives",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image3,
    chapters: 99,
  },
  {
    name: "MatchmakerPrince",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image4,
    chapters: 50,
  },
  {
    name: "ThreeLifetimes",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image5,
    chapters: 78,
  },
  {
    name: "Cultivating",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image6,
    chapters: 100,
  },
  {
    name: "Achilles and the Boy Next Door",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image1,
    chapters: 40,
  },
  {
    name: "Hells Consort",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image2,
    chapters: 40,
  },
  {
    name: "HusbandsPastLives",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image3,
    chapters: 100,
  },
  {
    name: "MatchmakerPrince",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image4,
    chapters: 300,
  },
  {
    name: "ThreeLifetimes",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image5,
    chapters: 11,
  },
  {
    name: "Cultivating",
    views: "12k",
    likes: "16k",
    saves: "23k",
    genre: {
      name: "Romance",
    },
    href: "#",
    discription:
      "Myong Lina is an outstanding career-driven woman from the 22nd century, and is the epitome of success. However, there is one thing she lacks: LOVE. With numerous failed past relationships, and almost hitting the big 3-0, she decides that maybe she should ask a fortune teller for help with her love life, as crazy as that sounds. Perhaps her problem doesn’t lie in the present, but in the past?",
    img: Image6,
    chapters: 89,
  },
];

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
                <a href={novels.href}>{novels.name}</a>
              </h1>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-1 font-medium text-ube-300 flex-row">
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
                {novels.discription}
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
