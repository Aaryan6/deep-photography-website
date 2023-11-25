import { getSliderImages } from "@/sanity/sanity.query";
import Slider from "@/components/slider";
import GadgetsList from "@/components/gadgets-list";
import IntroCard from "@/components/intro-card";

export default async function Home() {
  const images = await getSliderImages();
  return (
    <main className="py-0 md:py-10">
      <section className="relative flex flex-col-reverse md:flex-row md:items-center w-full mb-20 md:min-h-screen">
        <IntroCard />
        <div className="relative md:absolute w-full md:w-auto aspect-[4/3] right-0 top-0 -z-10">
          <Slider images={images} />
        </div>
      </section>
      <GadgetsList />
    </main>
  );
}
