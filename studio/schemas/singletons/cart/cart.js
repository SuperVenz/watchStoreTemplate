export default {
  name: "cart",
  title: "Cart",
  type: "document",
  fields: [
    {
      name: "formLabel",
      title: "form Label",
      type: "string",
    },
    {
      name: "nextPageText",
      title: "Go To Shipping Button Text",
      type: "buttonPageLink",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo.singleton",
    },
  ],
};
