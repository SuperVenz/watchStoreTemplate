import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
const Favcon = styled(StaticImage)``

function ItemViewCard ({
  pic,
  picAlt,
  productName,
  price,
  reviewCount,
  button,
  buttonLink,
  discount,
  ProductPicLink,
}) {
  return (
    <Wrapper>
      <GatsbyImage image={pic} alt={picAlt} />

      <h2>{productName}</h2>
      <p>{price}</p>
      {/* Quantity */}
      <Link to={buttonLink}>{button}</Link>

      <p>{picArticle}</p>
      {/* Care */}
      {/* Measurements */}
      {/* Shipping */}

      <h2>Related Products</h2>
    
    </Wrapper>
  )
}

export default ItemViewCard
