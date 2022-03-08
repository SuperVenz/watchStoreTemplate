export default {
  name: "productCard",
  title: "Product Card",
  type: "object",
  fields: [
    {
      name: "productData",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
    },
    {
      name: "cta",
      title: "Call To Action Title",
      type: "string",
    },
  ],
};
