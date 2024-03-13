import HomeHeader from "@/components/headers/HomeHeader";
import MainSlider from "@/components/sliders/MainSlider";
import MainCTA from "@/components/cta/MainCTA";
import GenreList from "@/components/list/GenreList";
import NovelSlider from "@/components/sliders/NovelSlider";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full pt-20">
      <HomeHeader />
      <section className="flex flex-col w-full overflow-hidden ">
        <MainSlider />
        <MainCTA />
        <div className="flex flex-col gap-6">
          <section className="flex flex-col py-4 2xl:px-32 xl:px-32 lg:px-12 gap-6">
            <div className="flex flex-wrap relative font-bold font-quicksand md:text-md lg:text-2xl flex-row items-center gap-2">
              <div className="pr-4">Genre</div>
              <GenreList></GenreList>
            </div>
            <NovelSlider />
          </section>
          <section className="flex flex-col py-4 2xl:px-32 xl:px-32 lg:px-12 gap-6">
            <div className="flex-wrap relative font-bold flex flex-row items-center gap-2 w-full justify-between">
              <div className="flex flex-row items-center gap-2">
                <div className="font-quicksand md:text-md lg:text-2xl">
                  Originals
                </div>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.53674e-07 12.4525C3.98902 9.90498 6.48865 5.5755 6.70032 0.847169C9.24779 4.83619 13.5773 7.33582 18.3056 7.54748C14.3166 10.095 11.817 14.4244 11.6053 19.1528C9.05782 15.1638 4.72833 12.6641 9.53674e-07 12.4525Z"
                    fill="#EDA406"
                  />
                </svg>
              </div>
              <button
                type="button"
                className="text-blackberry-300 border-2 border-blackberry-300 font-quicksand rounded-md bg-white px-3.5 py-2.5 text-base font-semibold shadow-sm hover:bg-blackberry-300 hover:text-white"
              >
                View All
              </button>
            </div>
            <NovelSlider />
          </section>
          <section className="flex flex-col py-4 2xl:px-32 xl:px-32 lg:px-12 gap-6">
            <div className="flex-wrap relative font-bold flex flex-row items-center gap-2 w-full justify-between">
              <div className="flex flex-row items-center gap-2">
                <div className="font-quicksand md:text-md lg:text-2xl">
                  Popular
                </div>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.53674e-07 12.4525C3.98902 9.90498 6.48865 5.5755 6.70032 0.847169C9.24779 4.83619 13.5773 7.33582 18.3056 7.54748C14.3166 10.095 11.817 14.4244 11.6053 19.1528C9.05782 15.1638 4.72833 12.6641 9.53674e-07 12.4525Z"
                    fill="#01B27E"
                  />
                </svg>
              </div>
              <button
                type="button"
                className="text-blackberry-300 border-2 border-blackberry-300 font-quicksand rounded-md bg-white px-3.5 py-2.5 text-base font-semibold shadow-sm hover:bg-blackberry-300 hover:text-white"
              >
                View All
              </button>
            </div>
            <NovelSlider />
          </section>
          <section className="flex flex-col py-4 2xl:px-32 xl:px-32 lg:px-12 gap-6">
            <div className="flex-wrap relative font-semibold flex flex-row items-center gap-2 w-full justify-between">
              <div className="flex flex-row items-center gap-2">
                <div className="font-quicksand md:text-md lg:text-2xl">
                  Recently Updated
                </div>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.53674e-07 12.4525C3.98902 9.90498 6.48865 5.5755 6.70032 0.847169C9.24779 4.83619 13.5773 7.33582 18.3056 7.54748C14.3166 10.095 11.817 14.4244 11.6053 19.1528C9.05782 15.1638 4.72833 12.6641 9.53674e-07 12.4525Z"
                    fill="#E55456"
                  />
                </svg>
              </div>
              <button
                type="button"
                className="text-blackberry-300 border-2 border-blackberry-300 font-quicksand font-bold rounded-md bg-white px-3.5 py-2.5 text-base font-semibold shadow-sm hover:bg-blackberry-300 hover:text-white"
              >
                View All
              </button>
            </div>
            <NovelSlider />
          </section>
          <section className="flex flex-col py-4 2xl:px-32 xl:px-32 lg:px-12 gap-6">
            <div className="mx-auto w-full">
              <div className="relative flex flex-col lg:items-start md:items-center isolate overflow-hidden bg-slate-100 border border-slate-200 p-12 text-center sm:rounded-3xl sm:px-16 xs:rounded-xl">
                <h2 className="text-3xl font-bold tracking-tight text-blackberry-300 sm:text-4xl ">
                  Got any projects in mind?
                </h2>
                <p className="mt-6 text-lg leading-8 text-blackberry-300 text-start">
                  Welcome to Studio Pinya, where stories come to life and
                  imagination knows no bounds. Specializing in webtoons and
                  novels, our studio is a haven for creators and readers alike,
                  dedicated to weaving tales that captivate, inspire, and
                  resonate.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                  <Link
                    href={"https://www.studiopinya.com/contact"}
                    target="_blank"
                    className="text-white font-quicksand font-bold rounded-md bg-blackberry-300 px-3.5 py-2.5 text-base hover:opacity-90"
                  >
                    Contact our Studio
                  </Link>
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
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
}
