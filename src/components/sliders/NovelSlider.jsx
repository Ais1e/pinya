"use client"
import React, { useRef } from "react"; // Add useRef here
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import Image from "next/image";
import {Navigation} from "swiper/modules";

import Image1 from "../../../public/AchillesBoy.png";
import Image2 from "../../../public/HellsConsort.png";
import Image3 from "../../../public/HusbandsPastLives.png";
import Image4 from "../../../public/MatchmakerPrince.png";
import Image5 from "../../../public/ThreeLifetimes.png";
import Image6 from "../../../public/Cultivating.png";

import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const NovelData = [
  {
    title: "Image 1",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image1,
  },
  {
    title: "Image 2",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image2,
  },
  {
    title: "Image 3",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image3,
  },
  {
    title: "Image 4",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image4,
  },
  {
    title: "Image 5",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image5,
  },
  {
    title: "Image 6",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image6,
  },
  {
    title: "Image 7",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image1,
  },
  {
    title: "Image 8",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image2,
  },
  {
    title: "Image 9",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image3,
  },
  {
    title: "Image 10",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image4,
  },
  {
    title: "Image 11",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image5,
  },
  {
    title: "Image 12",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: Image6,
  },
];

const NovelSlider = () => {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  return (
    <div className="w-full">
      <div className="flex items-center justify-center flex-col w-full ">
        <Swiper
          style={{
            "--swiper-pagination-color": "#201433",
            "--swiper-pagination-bullet-inactive-color": "#CBD5E1",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween:0,
            },
            320:{
              slidesPerView: 2,
              spaceBetween:10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween:10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="max-w-[100%]"
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance to ref
        >
          {NovelData.map((item) => (
            <SwiperSlide key={item.title} className="mb-7">
              <div className="rounded-md overflow-hidden">
                <Image
                  src={item.backgroundImage}
                  height={750}
                  width={500}
                  alt={item.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-row justify-end w-full gap-4">
          {/* Custom Navigation Buttons */}
          <button
            className="text-white font-quicksand font-bold rounded-md bg-guava-300 px-3.5 py-2.5 text-base text-white hover:opacity-90"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button
            className="text-white font-quicksand font-bold rounded-md bg-guava-300 px-3.5 py-2.5 text-base text-gray-900 hover:opacity-90"
            onClick={() => swiperRef.current.slideNext()}
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NovelSlider;
