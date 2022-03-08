import React from "react";
import styled from "styled-components";
import HeaderButton from "./mutations/HeaderButton";
import ProductPicLink from "./mutations/CollectionLink";
const Wrapper = styled.div``;
const CollectionWrapper = styled.div``;
function ShowCatagories({ title, link, text, catagories }) {
  return (
    <Wrapper>
      <HeaderButton title={title} buttonLink={link} buttonText={text} />
      <CollectionWrapper>
        {catagories.map((collections) => {
          return (
            <ProductPicLink
              pic={collections.pic}
              title={collections.title}
              link={collections.link}
            />
          );
        })}
      </CollectionWrapper>
    </Wrapper>
  );
}
// TO DO
// Need too connect array of catagories
export default ShowCatagories;

// Accepts a title and button as a header and a array of product pics + links
