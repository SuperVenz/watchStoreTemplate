export default {
  name: "deals",
  title: "Deals",
  type: "document",
  fields: [
    {
      name: "deals",
      title: "deals",
      type: "reference",
      to: [{ type: "collection" }],
    },
    {
      name: "seo",
      title: "seo",
      type: "seo.singleton",
    },
  ],
};
