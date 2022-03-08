// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
// Premade Components
import contactForm from "./components/premade/contactForm";
import hero from "./components/premade/hero";
import section from "./components/premade/section";
import buttonBanner from "./components/premade/buttonBanner";
import emailSignUpBanner from "./components/premade/emailSignUpBanner";
import productCard from "./components/premade/productCard";
import productFeatureSection from "./components/premade/productFeatureSection";
import productListing from "./components/premade/productListing";
import couponCode from "./components/premade/couponCode";
import productHero from "./components/premade/productHero";
import priceRange from "./objects/priceRange";
// Pics

import pic from "./components/pics/pic";
import picArticle from "./components/pics/picArticle";
import picCaption from "./components/pics/picCaption";
// Text
import article from "./components/text/article";
import subArticle from "./components/text/subArticle";
// Ultility
import buttonOutbound from "./components/ultility/buttonOutbound";
import buttonPageLink from "./components/ultility/buttonPageLink";
import socialHandle from "./components/ultility/socialHandle";

// Rich text annotations used in the block content editor
import annotationLinkEmail from "./annotations/linkEmail";
import annotationLinkExternal from "./annotations/linkExternal";
import annotationLinkInternal from "./annotations/linkInternal";
import annotationProduct from "./annotations/product";

// Document types
import collection from "./documents/collection";
import product from "./documents/product";
import productVariant from "./documents/productVariant";

// Singleton document types
import home from "./singletons/home";
import catagories from "./singletons/catagories";
import deals from "./singletons/deals";
// Cart
import cart from "./singletons/cart/cart";
import checkout from "./singletons/cart/checkout";
import shipping from "./singletons/cart/shipping";
import confirmation from "./singletons/cart/confirmation";
// Settings
import checkOutSettings from "./singletons/settings/checkOutSettings";
import headerFooter from "./singletons/settings/headerFooter";
import icons from "./singletons/settings/icons";
import siteInfo from "./singletons/settings/siteInfo";
import theme from "./singletons/settings/theme";
// User
import favorites from "./singletons/user/favorites";
import login from "./singletons/user/login";
import signUp from "./singletons/user/signUp";
import userAccount from "./singletons/user/userAccount";
// Block content
import body from "./blocks/body";

// Object types
import blockImage from "./objects/blockImage";
import blockInlineProduct from "./objects/blockInlineProduct";
import blockInlineProductMarginalia from "./objects/blockInlineProductMarginalia";
import blockProduct from "./objects/blockProduct";
import linkExternal from "./objects/linkExternal";
import linkInternal from "./objects/linkInternal";
import placeholderString from "./objects/placeholderString";
import productOption from "./objects/productOption";
import productWithVariant from "./objects/productWithVariant";
import proxyString from "./objects/proxyString";
import seoProduct from "./objects/seo/product";
import seoSingleton from "./objects/seo/singleton";
import seoStandard from "./objects/seo/standard";
import shopifyProduct from "./objects/shopifyProduct";
import shopifyProductVariant from "./objects/shopifyProductVariant";
import contact from "./singletons/contact";
// import optionsFix from "./objects/optionsFix";
// Build the schemas and export to the Sanity Studio app
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Annotations
    annotationLinkEmail,
    annotationLinkExternal,
    annotationLinkInternal,
    annotationProduct,
    // Document types
    collection,
    product,
    productVariant,
    // Singleton document types
    home,
    cart,
    checkout,
    shipping,
    favorites,
    login,
    signUp,
    userAccount,
    catagories,
    confirmation,
    contact,
    deals,
    checkOutSettings,
    headerFooter,
    icons,
    siteInfo,
    theme,
    // Block content
    body,
    // Objects
    blockImage,
    blockInlineProduct,
    blockInlineProductMarginalia,
    blockProduct,
    linkExternal,
    linkInternal,
    placeholderString,
    productOption,
    productWithVariant,
    proxyString,
    seoProduct,
    seoSingleton,
    seoStandard,
    shopifyProduct,
    shopifyProductVariant,
    pic,
    picArticle,
    picCaption,
    article,
    subArticle,
    buttonOutbound,
    buttonPageLink,
    socialHandle,
    contactForm,
    section,
    hero,
    productHero,
    productCard,
    productListing,
    productFeatureSection,
    emailSignUpBanner,
    buttonBanner,
    couponCode,
    priceRange,
    // optionsFix,
  ]),
});
