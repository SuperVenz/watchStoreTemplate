import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Wrapper = styled.div``;
const StyledImage = styled(GatsbyImage)``;
const StyledLink = styled(Link);
function confirmation({ data }) {
  return (
    <Layout>
      <Wrapper>
        <h1></h1>
        <StyledImage />
        <p></p>
        <StyledLink></StyledLink>
      </Wrapper>
    </Layout>
  );
}

export default confirmation;
