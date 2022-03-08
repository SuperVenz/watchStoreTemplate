import React from "react";
import styled from "styled-components";
import CarouselProductCard from "./mutations/CarouselProductCard";
import HeaderButton from "./mutations/HeaderButton";
const Wrapper = styled.div``;

function ProductCarousel({ products, title, buttonText, buttonLink }) {
  return (
    <Wrapper>
      <HeaderButton title buttonText buttonLink />
      {products.map((data) => {
        return <CarouselProductCard img alt title price button link />;
      })}
    </Wrapper>
  );
}

export default ProductCarousel;
