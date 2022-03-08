export default {
  name: "catagories",
  title: "Catagories",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "string",
    },
    {
      name: "allCatagories",
      title: "All Catagories Displayed",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "collection" }],
        },
      ],
    },
    {
      name: "seo",
      title: "Seo",
      type: "seo.singleton",
    },
  ],
};
