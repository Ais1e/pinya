import HomeHeader from "@/components/headers/HomeHeader";

export default function NovelName({params }: {params: {novelname: string}}) {
    return (
        <main className="flex flex-col justify-between w-full overflow-hidden ">
          <HomeHeader />
          {params.novelname}
        </main>
    );
  }
  