"use client";
import HomeHeader from "@/components/headers/HomeHeader";
import StorySearch from "@/components/stories/StorySearch";
import TypeList from "@/components/filters/TypeList";
import StatusList from "@/components/filters/StatusList";
import SortList from "@/components/sorts/SortList";
import GenreList from "@/components/list/GenreList";
import NovelList from "@/components/list/NovelList";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
      <main className="flex flex-col justify-between w-full overflow-hidden ">
        <HomeHeader />
        <nav className="flex flex-col py-4 2xl:px-32 xl:px-32 lg:px-12 gap-6 w-full">
          <StorySearch />
        </nav>
        <section className="w-full flex flex-col 2xl:px-32 xl:px-32 lg:px-12 gap-6">
          <div className="flex flex-row pt-4 gap-6">
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Filters</h1>

                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Type</p>
                  <TypeList />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Status</p>
                  <StatusList />
                </div>
              </div>
              <div className="flex flex-col py-4 gap-4">
                <h1 className="text-2xl font-bold">Sort By</h1>
                <div className="flex flex-col gap-2">
                  <SortList />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Genre</h1>
                <GenreList />
              </div>
              <NovelList />
            </div>
          </div>
        </section>
      </main>
  );
}
