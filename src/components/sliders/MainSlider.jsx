"use client";
// import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import Image from "next/image";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import Image1 from "../../../public/AchillesBoy.png";
import Image2 from "../../../public/HellsConsort.png";
import Image3 from "../../../public/HusbandsPastLives.png";
import Image4 from "../../../public/MatchmakerPrince.png";
import Image5 from "../../../public/ThreeLifetimes.png";
import Image6 from "../../../public/Cultivating.png";


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
    
  ];

const MainSlider = () => {
  return (
    <div className="flex flex-row w-screen justify-center items-center pt-4 overflow-hidden">
        <Swiper
        style={{
          "--swiper-pagination-color": "#201433",
          "--swiper-pagination-bullet-inactive-color": "#CBD5E1",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[150%] py-4 2xl:px-32 xl:px-32 lg:px-12"
      >
        {NovelData.map((item) => (
          <SwiperSlide key={item.title} className="mb-12">
            
            <div className="rounded-xl overflow-hidden">
              <Image
                src={item.backgroundImage}
                height={750}
                width={500}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};

export default MainSlider;
