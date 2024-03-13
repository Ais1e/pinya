import NovelReadHeader from "@/components/headers/NovelReadHeader";
import NovelsNav from "@/components/novels/NovelsNav";

export default function Chapters() {
  return (
    <>
      <main className="w-full bg-dark-blackberry-300 relative overflow-hidden h-svh">
        <NovelReadHeader></NovelReadHeader>
        <section className="h-full px-60 pt-10 overflow-auto pb-52">
          <div className="bg-dark-blackberry-200 px-12 pt-12 pb-20 flex flex-col gap-9">
            <div className="flex flex-row gap-2 text-2xl items-center">
              <h1 className="font-bold font-quicksand text-slate-300">
                Chapter 1
              </h1>
              <h1 className="font-bold font-quicksand text-slate-300">:</h1>
              <h1 className="font-semibold font-quicksand text-violet-300">
                The Beginning
              </h1>
              <span className="relative flex h-3 w-3 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
              </span>
            </div>
            <div className="text-slate-300 flex flex-col gap-8 text-lg">
              <p>
                The rain danced lightly on the cobblestone streets of Viarossa,
                a small, unassuming town nestled between the arms of rolling
                hills and verdant forests in the heart of Italy. It was the kind
                of town that you might miss if you blinked while passing by on
                the train, yet it held within its bounds a secret that was about
                to unravel in the most unexpected way.
              </p>

              <p>
                In the heart of Viarossa stood an old, seemingly abandoned
                mansion that the locals referred to as the Cavaradini Estate. It
                had once been the pride of the town, a magnificent testament to
                the wealth and status of its owner, Maestro Alessandro
                Cavaradini, a composer of renowned symphonies that had once
                captivated the world. But those days were long gone, and the
                maestro hadn't been seen nor heard from in years. The estate,
                with its overgrown gardens and fading façades, stood as a silent
                witness to the passage of time, harboring the last of the
                maestro's secrets.
              </p>

              <p>
                It was on a particularly stormy evening, when the wind howled
                like a mournful symphony through the corridors of Viarossa, that
                Julian Rossi, a young writer with a penchant for uncovering the
                mysteries of the past, found himself standing before the gates
                of the Cavaradini Estate. Julian had traveled from the bustling
                city of Milan, driven by tales of the maestro's genius and the
                tragic mystery that surrounded his final days. Armed with
                nothing but his curiosity and a notebook filled with questions,
                Julian was determined to uncover the story that had been lost to
                time.
              </p>

              <p>
                As he pushed open the heavy gates, the sound of the rain
                intensified, as if the heavens themselves were cautioning him
                against the path he was about to tread. The garden path,
                overgrown with wildflowers and brambles, led him to the front
                door, which creaked open at his touch as though it had been
                waiting for his arrival.
              </p>

              <p>
                The interior of the mansion was shrouded in darkness, save for
                the occasional flicker of lightning that illuminated the grand
                staircase and the portraits of the Cavaradini family that
                adorned the walls. Julian's footsteps echoed through the hall as
                he made his way to the heart of the mansion, the music room,
                where the maestro had composed his greatest works.
              </p>

              <p>
                The room was a capsule of time, untouched by the years that had
                passed. Sheets of music were strewn across the grand piano, and
                a single candle burned on the mantle, casting a warm glow over
                the room. It was here, in the silence that followed the storm,
                that Julian heard it—a soft, melancholy melody that seemed to
                emanate from the walls themselves. The music was unlike anything
                Julian had ever heard, filled with an emotion so profound that
                it seemed to speak directly to his soul.
              </p>

              <p>
                Mesmerized, Julian approached the piano, his fingers brushing
                against the keys as though they were being guided by an unseen
                force. The melody grew stronger, weaving a story of love, loss,
                and redemption that transcended the boundaries of time. Julian
                realized then that he was not alone; the spirit of Maestro
                Cavaradini lingered in these walls, trapped in the final
                symphony he had never completed.
              </p>

              <p>
                Determined to free the maestro's spirit and share his final
                masterpiece with the world, Julian embarked on a journey that
                would lead him deep into the heart of Viarossa's history and the
                enigmatic life of Alessandro Cavaradini. Along the way, he would
                uncover secrets that had been buried for decades, forge
                unexpected friendships, and ultimately confront the truth about
                the maestro's tragic demise.
              </p>

              <p>
                As the days passed, Julian became a fixture in the town of
                Viarossa, his presence a bridge between the past and the
                present. With each new discovery, he pieced together the
                fragments of the maestro's life, drawing ever closer to the
                heart of the mystery that had brought him to the Cavaradini
                Estate.
              </p>
            </div>
          </div>
        </section>
        <NovelsNav></NovelsNav>
      </main>
    </>
  );
}
