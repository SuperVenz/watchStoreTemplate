import React from "react";
import styled from "styled-components";
import { Image } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Wrapper = styled.div``;
const Pic = styled(Image)``;
const Button = styled(Link)``;

function CarouselProductCard({ img, alt, title, price, button, link }) {
  return (
    <Wrapper>
      <Pic img={img} alt={alt} />
      <h3>{title}</h3>
      <p>{price}</p>
      <Button to={link}>{button}</Button>
    </Wrapper>
  );
}

export default CarouselProductCard;

// Takes in Product pic name and price with cta button
