import { defineType } from "sanity";

const PagesSlider = defineType({
  name: "pages-slider",
  title: "All Pages Slider Images", // name of the model
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
    {
      name: "type",
      title: "Type",
      type: "string",
      initialValue: "wedding",
      options: {
        list: [
          {
            title: "Wedding",
            value: "wedding",
          },
          {
            title: "Pre-Wedding",
            value: "pre-wedding",
          },
          {
            title: "Maternity",
            value: "maternity",
          },
          {
            title: "Cinematic",
            value: "cinematic",
          },
          {
            title: "Birthday",
            value: "birthday",
          },
          {
            title: "Pre-Birthday",
            value: "pre-birthday",
          },
          {
            title: "Anniversary",
            value: "anniversary",
          },
          {
            title: "New Born Baby",
            value: "new-born-baby",
          },
        ],
      },
    },
  ],
  preview: {
    select: {
      media: "image",
    },
  },
});

export default PagesSlider;
