import { HomeIcon } from "@sanity/icons";
import { MdLocalMovies } from "react-icons/md";

const TITLE = "Home";

export default {
  name: "home",
  title: TITLE,
  type: "document",
  fieldsets: [
    {
      name: "hero",
      title: "Hero Details",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "catagory",
      title: "Catagory Details",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "feature",
      title: "Featured Products",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "email",
      title: "Email Banner",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "altFeature",
      title: "Alternative Featured Products",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "footer",
      title: "Footer Banner",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    // Hero with product
    {
      name: "hero",
      type: "productHero",
    },
    // list of collections/catagories
    {
      name: "productListings",
      title: "List of Collections",
      type: "productListing",
      fieldset: "catagory",
    },

    // Featured collections
    {
      name: "featureProducts",
      title: "Feature Products",
      type: "productFeatureSection",
      fieldset: "feature",
    },
    // email Sign Up Banner
    {
      name: "emailSignUpBanner",
      title: "Email Sign Up Banner",
      type: "emailSignUpBanner",
      fieldset: "email",
    },
    // Alternative Product Listing
    {
      name: "altProductListings",
      title: "Alternative Products",
      type: "productListing",
      fieldset: "altFeature",
    },
    // buttonBanner
    {
      name: "charityBanner",
      title: "Footer Banner",
      type: "buttonBanner",
      fieldset: "footer",
    },
    // SEO
    // validation: (Rule) => Rule.unique(),
    {
      name: "seo",
      title: "SEO",
      type: "seo.singleton",
    },
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: "Index",
        title: TITLE,
      };
    },
  },
};
