export default {
  name: "confirmation",
  title: "Confirmation",
  type: "document",
  fields: [
    {
      name: "message",
      title: "Message",
      type: "article",
    },
    {
      name: "picData",
      title: "checkmark Pic",
      type: "pic",
    },
    {
      name: "buttonPageLink",
      title: "Button Link",
      type: "buttonPageLink",
    },
    {
      name: "seo",
      title: "seo",
      type: "seo.singleton",
    },
  ],
};
