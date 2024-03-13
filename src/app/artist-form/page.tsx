'use client'

import HomeHeader from "@/components/headers/HomeHeader";
import Profile from "@/components/creator/Profile";
import Works from "@/components/creator/Works";
import { title } from "process";
import Contact from "@/components/forms/Contact";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <main className="items-center justify-between w-full overflow-hidden h-screen">
        <Contact></Contact>
      </main>
    </>
  );
}
