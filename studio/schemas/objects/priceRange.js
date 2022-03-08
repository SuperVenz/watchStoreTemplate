export default {
  name: "priceRange",
  title: "Price range",
  type: "object",
  options: {
    columns: 2,
  },
  fields: [
    {
      name: "minVariantPrice",
      title: "Min variant price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "maxVariantPrice",
      title: "Max variant price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
  ],
};
