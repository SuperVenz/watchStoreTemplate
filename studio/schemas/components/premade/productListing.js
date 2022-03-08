export default {
  name: "productListing",
  title: "List of collections",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "button",
      title: "Button",
      type: "buttonPageLink",
    },
    {
      name: "collections",
      title: "Collections Shown",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "collection" }],
        },
      ],
    },
  ],
};
