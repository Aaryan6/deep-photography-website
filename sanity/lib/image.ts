import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_DATASET || "",
});

export const urlForImage = (source?: Image) => {
  if (!source || !imageBuilder) {
    // Handle the case where source or imageBuilder is not available
    return "";
  }

  return imageBuilder.image(source).auto("format").fit("max").url();
};
