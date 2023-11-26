import { defineType } from "sanity";

const PreBirthdayShoot = defineType({
  name: "pre-birthday-shoot",
  title: "Pre-Birthday Shoot", // name of the model
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

export default PreBirthdayShoot;
