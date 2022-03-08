import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div``;
const StyledImage = styled(GatsbyImage)``;
const DiscountTag = styled.div``;
const TextContent = styled.div``;
const Button = styled(Link)``;
function DealCard({
  pic,
  picAlt,
  title,
  price,
  discountPrice,
  buttonText,
  link,
  percentage,
}) {
  return (
    <Wrapper>
      <DiscountTag>{percentage}</DiscountTag>
      {/* need to implement discountTag component */}
      <StyledImage pic={pic} alt={picAlt} />
      <TextContent>
        <h2>{title}</h2>
        <p>{discountPrice}</p>
        <p>{price}</p>
        <Button to={link}>{buttonText}</Button>
      </TextContent>
    </Wrapper>
  );
}

export default DealCard;
// This is the product card on the card deals
