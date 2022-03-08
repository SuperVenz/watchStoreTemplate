import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Link } from "gatsby";
const Wrapper = styled.div``;
const StyledLink = styled(Link)``;
function Hero({
  title,
  text,
  button,
  link,
  pic,
  picAlt,
  productName,
  price,
  reviewCount,
  productButton,
  productLink,
  discount,
}) {
  return (
    <Wrapper>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <StyledLink to={link}>{button}</StyledLink>
      </div>
      <ProductCard
        pic={pic}
        picAlt={picAlt}
        productName={productName}
        price={price}
        reviewCount={reviewCount}
        button={productButton}
        buttonLink={productLink}
        discount={discount}
      />
    </Wrapper>
  );
}

export default Hero;
