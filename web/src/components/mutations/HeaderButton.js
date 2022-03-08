import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const StyledLink = styled(Link)``;
function HeaderButton({ title, buttonText, buttonLink }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <StyledLink to={buttonLink}>{buttonText}</StyledLink>
    </Wrapper>
  );
}

export default HeaderButton;
//  This invovles a title and a button in a row format. This is above the cataogies section etc.
