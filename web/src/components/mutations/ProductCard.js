import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Wrapper = styled.div``;
const DiscountTag = styled.div``;
const Favcon = styled(StaticImage)``;
function ProductCard({
  pic,
  picAlt,
  productName,
  price,
  reviewCount,
  button,
  buttonLink,
  discount,
}) {
  return (
    <Wrapper>
      <DiscountTag>{discount}</DiscountTag>
      <GatsbyImage image={pic} alt={picAlt} />
      <Favcon src="../images/heart" alt="favorite button" />
      <h2>{productName}</h2>
      <p>{price}</p>
      {/* review component */}
      <Link to={buttonLink}>{button}</Link>
    </Wrapper>
  );
}

export default ProductCard;
// Main Card Component to showcase product
// TO DO
// Implement Review component and Link URL Pattern
