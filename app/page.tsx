import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { getSliderImages } from "@/sanity/sanity.query";
import Slider from "@/components/slider";

const lightfont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "300"],
});

export default async function Home() {
  const images = await getSliderImages();
  return (
    <main className="py-0 md:py-10">
      <section className="relative flex flex-col-reverse md:flex-row md:items-center w-full mb-20 md:min-h-screen">
        <div className="h-auto ml-0 lg:ml-10 py-16 bg-white flex w-full md:w-auto">
          <div className="text-black z-10 w-full md:w-[40rem] h-auto md:h-[25rem] grid place-items-center">
            <div className="grid gap-y-4 md:gap-y-12 justify-center text-center px-4">
              <h3 className="text-base md:text-xl font-semibold font-serif">
                Deepak Yadav
              </h3>
              <h1
                className={`${lightfont.className} font-light text-4xl md:text-6xl uppercase md:leading-snug`}
              >
                Deep Photo art photography
              </h1>
            </div>
            <Link href={"/contact"}>
              <button className="text-xl underline mt-8 md:mt-0">
                Contact {"->"}
              </button>
            </Link>
          </div>
        </div>
        <div className="relative md:absolute w-full md:w-auto aspect-[4/3] right-0 top-0 -z-10">
          <Slider images={images} />
        </div>
      </section>
    </main>
  );
}
