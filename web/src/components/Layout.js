import React from "react";
import Reset from "../Reset";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
const Wrapper = styled.div``;

function Layout({ children, title, description, keywords }) {
  const Css = createGlobalStyle`
:root{
}
html body {
}
h1
{
  }
  
  
}
h2{

}
h3
{

}
p{

}
`;
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <meta lang="en" />
        <title>{title}</title>
        <link rel="canonical" href="/home" />
        <meta name="keywords" content={keywords.join(",")} />
        <meta name="author" content="Alec Venzor" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Reset />
      <Css />
      {children}
    </Wrapper>
  );
}

export default Layout;
