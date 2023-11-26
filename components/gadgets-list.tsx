import { getGadgetsImages } from "@/sanity/sanity.query";
import GadgetsImages from "./gadgets-images";

export default async function GadgetsList() {
  const gadgets_images = await getGadgetsImages();
  return (
    <div className="text-white max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl mb-8">Gadgets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <GadgetsImages images={gadgets_images} />
      </div>
    </div>
  );
}
