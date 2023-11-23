import ImageGridLayout from "@/components/ImageGridLayout";
import { getPreWeddingImages } from "@/sanity/sanity.query";

export default async function page() {
  const wedding_images = await getPreWeddingImages();
  const groupSize = Math.ceil(wedding_images.length / 2);
  const groups = [
    wedding_images.slice(0, groupSize),
    wedding_images.slice(groupSize, groupSize * 2),
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <div className="py-10 px-4 grid justify-center">
        <h1 className="text-3xl text-white">Pre-Wedding Shoots</h1>
      </div>
      <div className="mt-10">
        <ImageGridLayout groups={groups} />
      </div>
    </section>
  );
}
