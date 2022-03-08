export default {
  name: "productFeatureSection",
  title: "Feature Product Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "cta",
      title: "call to action",
      type: "string",
    },
    {
      name: "collections",
      title: "collections",
      type: "reference",
      to: [{ type: "collection" }],
    },
  ],
};
