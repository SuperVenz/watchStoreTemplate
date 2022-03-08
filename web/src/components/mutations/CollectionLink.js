import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const Wrapper = styled(BackgroundImage)``;
const StyledLink = styled(Link)``;

function CollectionLink({ pic, title, link }) {
  return (
    <Wrapper loading="eager" {...pic} alt="background Pic">
      <StyledLink to={link}>
        <h2>{title}</h2>
      </StyledLink>
    </Wrapper>
  );
}

export default CollectionLink;
// This Component is for the catagories component.  Link to a collections with pic and text.
