import { defineType } from "sanity";

const PreWedding = defineType({
  name: "pre-wedding",
  title: "Pre-Wedding", // name of the model
  type: "document",
  fields: [
    {
      name: "image", // name of the field
      title: "Image",
      // photos are identified in the sanity database by the keyword image
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      media: "image",
    },
  },
});

export default PreWedding;
