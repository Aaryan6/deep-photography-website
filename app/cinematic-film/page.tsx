import ImageGridLayout from "@/components/ImageGridLayout";
import Heading from "@/components/heading";
import HorizontalSlider from "@/components/horizontal-slider";
import {
  getCinematicImages,
  getPagesSliderImages,
} from "@/sanity/sanity.query";

export default async function page() {
  const wedding_images = await getCinematicImages();
  const groupSize = Math.ceil(wedding_images.length / 2);
  const groups = [
    wedding_images.slice(0, groupSize),
    wedding_images.slice(groupSize, groupSize * 2),
  ];
  const slider_images = await getPagesSliderImages();
  const filter_images = slider_images.filter(
    (image: any) => image.type === "cinematic"
  );
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mb-4 px-2">
        <HorizontalSlider images={filter_images} />
      </div>
      <Heading>Cinematic Film</Heading>
      <div className="mt-10">
        <ImageGridLayout groups={groups} />
      </div>
    </section>
  );
}
