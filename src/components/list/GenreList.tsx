import Link from "next/link";
import React from "react";

const Genres = [
  {
    name: "Romance",
    hover: "hover:bg-pink-500",
    color: "hover:text-white",
    border: "hover:border-pink-500",
    bg: "bg-pink-50",
    textcolor: "text-pink-500",
  },
  {
    name: "Action",
    hover: "hover:bg-teal-500",
    color: "hover:text-white",
    border: "hover:border-teal-500",
    bg: "bg-teal-50",
    textcolor: "text-teal-500",
  },
  {
    name: "Fantasy",
    hover: "hover:bg-purple-700",
    color: "hover:text-white",
    border: "hover:border-purple-700",
    bg: "bg-purple-50",
    textcolor: "text-purple-500",
  },
  {
    name: "Slice of Life/Drama",
    hover: "hover:bg-blue-500",
    color: "hover:text-white",
    border: "hover:border-blue-500",
    bg: "bg-blue-50",
    textcolor: "text-blue-500",
  },
  {
    name: "Comedy",
    hover: "hover:bg-yellow-500",
    color: "hover:text-white",
    border: "hover:border-yellow-500",
    bg: "bg-yellow-50",
    textcolor: "text-yellow-500",
  },
  {
    name: "Boy's Love",
    hover: "hover:bg-red-500",
    color: "hover:text-white",
    border: "hover:border-red-500",
    bg: "bg-red-50",
    textcolor: "text-red-500",
  },
];

const GenreList = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
      
        {Genres.map((item) => (
          <div key={item.name}>
            <Link href="#" scroll={false}>
              <div
                className={`duration-200 ease-in-out text-base font-quicksand font-bold px-4 py-2 ${item.bg} ${item.textcolor} ${item.border} ${item.border} ${item.color} rounded-md ${item.hover}`}
              >
                {item.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreList;
