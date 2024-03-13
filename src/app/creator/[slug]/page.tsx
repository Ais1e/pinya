'use client'

import HomeHeader from "@/components/headers/HomeHeader";
import Profile from "@/components/creator/Profile";
import Works from "@/components/creator/Works";
import { title } from "process";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <main className="items-center justify-between w-full overflow-hidden">
        <HomeHeader />
        <section className="flex flex-row py-4 2xl:px-32 xl:px-32 lg:px-12 gap-8 w-full">
          <Profile/>
          <Works />
        </section>
        
      </main>
    </>
  );
}
