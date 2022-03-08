import React from "react";
import styled from "styled-components";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";
const Wrapper = styled(BackgroundImage)``;
const StyledLink = styled(Link)``;
function ButtonBanner({ image, title, text, link, button }) {
  const buttonBackground = convertToBgImage({ image });
  return (
    <Wrapper {...buttonBackground} preserveStackingContex>
      <h3>{title}</h3>
      <p>{text}</p>
      <StyledLink to={link}>{button}</StyledLink>
    </Wrapper>
  );
}

export default ButtonBanner;
// Full Width background button banner with tile and text
