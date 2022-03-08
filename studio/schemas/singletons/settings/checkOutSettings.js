export default {
  name: "checkOutSettings",
  title: "User Favorited Items",
  type: "document",
  fieldsets: [
    {
      name: "checkOutNav",
      title: "Check Out Navigation Navbar",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "membershipEmail",
      title: "Membership Email Intergration",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    //   Navigation
    {
      name: "checkOutNavLabels",
      title: "Navigation Labels",
      type: "array",
      fieldset: "checkOutNav",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().max(3),
    },
    {
      name: "barColor",
      title: "name",
      type: "colorPicker",
      fieldset: "checkOutNav",
    },
    {
      name: "checkOutTrashUi",
      title: "checkOutTrashUi",
      type: "pic",
      fieldset: "checkOutNav",
    },
    // MemberShip
    {
      name: "button",
      title: "Button details",
      type: "buttonOutbound",
      fieldset: "membershipEmail",
    },
    {
      name: "buttonUi",
      title: "Button Ui Pic",
      type: "buttonOutbound",
      fieldset: "membershipEmail",
    },
    // Seo * Singletons
    {
      name: "seo",
      title: "Seo",
      type: "seo.singleton",
    },
  ],
};
