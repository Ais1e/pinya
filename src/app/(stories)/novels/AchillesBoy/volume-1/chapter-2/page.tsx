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
                Chapter 2
              </h1>
              <h1 className="font-bold font-quicksand text-slate-300">:</h1>
              <h1 className="font-semibold font-quicksand text-violet-300">
                Home Sweet Home
              </h1>
            </div>
            <div className="text-slate-300 flex flex-col gap-8 text-lg">
              <p>
                As dawn broke over the hills of Viarossa, painting the sky in
                hues of gold and crimson, Julian Rossi found himself standing at
                the edge of the town’s ancient cemetery. The night's revelations
                had left him restless, driving him to seek answers in the quiet
                solace of the morning. He wandered among the weathered stones
                and crypts, each a silent testament to the lives that had once
                pulsed through the veins of the town, now nothing more than
                whispers on the wind.
              </p>

              <p>
                His feet led him to a secluded corner, where a modest tombstone
                stood, almost hidden by overgrown ivy. The inscription read
                “Alessandro Cavaradini, Beloved Son, Esteemed Maestro,
                1835-1891.” Julian brushed his fingers over the cold stone,
                feeling a connection to the maestro that transcended time. It
                was here, amidst the forgotten dead, that Julian vowed to
                unravel the mystery of Cavaradini's final symphony.
              </p>

              <p>
                Later that day, Julian visited the local library, a treasure
                trove of archives and records dating back centuries. The
                librarian, an elderly woman named Signora Bianchi, eyed him with
                curiosity as he requested access to any materials related to
                Maestro Cavaradini. With a knowing smile, she led him to a dusty
                corner of the library, where stacks of old newspapers,
                manuscripts, and letters were stored.
              </p>

              <p>
                Hours turned into days as Julian poured over the documents,
                piecing together the life of Alessandro Cavaradini. He
                discovered tales of the maestro’s youth, filled with promise and
                ambition, his rise to fame, and the adulation of audiences
                across Europe. Yet, amidst the accolades, there was an
                undercurrent of sorrow, a longing for something beyond the
                applause and the footlights. Julian found himself drawn deeper
                into the maestro’s world, feeling each note of joy and pain as
                if it were his own.
              </p>

              <p>
                It was in a faded letter, tucked away between the pages of an
                old diary, that Julian found the clue he had been searching for.
                The letter, written by Cavaradini to a confidante, spoke of a
                new symphony, one that would surpass all his previous works.
                This symphony, the maestro claimed, would be his masterpiece, a
                culmination of his life’s experiences and emotions. Yet, the
                letter ended on a note of despair, for Cavaradini feared he
                would not live to see the piece completed.
              </p>

              <p>
                Julian's heart raced as he realized the importance of his
                discovery. The final symphony was not just a piece of music; it
                was the maestro’s last attempt to leave his mark on the world, a
                legacy of beauty born from a lifetime of solitude and sadness.
                Julian knew then that he had to find the symphony, to bring it
                to light and complete the maestro’s unfinished work.
              </p>

              <p>
                As the sun set on Viarossa, casting long shadows across the
                cobblestone streets, Julian felt a sense of purpose he had never
                known before. The maestro’s story was no longer a distant tale
                from the past; it had become Julian’s quest, a journey that
                would lead him into the depths of human passion and creativity.
                With the resolve of one who has been given a sacred charge,
                Julian set out to find the missing pieces of the final symphony,
                to give voice to the silence that had lingered in the Cavaradini
                Estate for over a century.
              </p>

              <p>
                Unknown to Julian, his quest would soon entangle him in a web of
                secrets that went far beyond the life of Alessandro Cavaradini.
                The town of Viarossa, with its serene façade, hid shadows that
                had watched over the maestro's legacy, guardians of a truth that
                was as profound as the music that had once echoed through the
                halls of the estate. But Julian was undeterred, for he knew that
                within the mystery of the final symphony lay the key to
                understanding not just the maestro’s genius, but the very
                essence of art itself.
              </p>
            </div>
          </div>
        </section>
        <NovelsNav></NovelsNav>
      </main>
    </>
  );
}
