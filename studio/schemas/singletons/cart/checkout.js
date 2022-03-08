export default {
  name: "checkout",
  title: "Check Out",
  type: "document",
  fields: [
    {
      name: "button",
      title: "Page Link",
      type: "buttonPageLink",
    },
    {
      name: "seo",
      title: "Seo",
      type: "seo.singleton",
    },
  ],
};
