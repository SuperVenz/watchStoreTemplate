export default {
  name: "headerFooter",
  title: "Header & Footer",
  type: "document",
  fieldsets: [
    {
      name: "ui",
      title: "Ui",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "backArrowUI",
      title: "Back Arrow UI Element",
      fieldset: "ui",
      type: "pic",
    },
    {
      name: "userFavoriteUi",
      title: "User Favorite UI",
      fieldset: "ui",
      type: "pic",
    },
    {
      name: "userAccountUi",
      title: "User Account UI",
      fieldset: "ui",
      type: "pic",
    },
    {
      name: "seo",
      title: "Seo",
      type: "seo.singleton",
    },
  ],
};
