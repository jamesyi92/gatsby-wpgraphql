import React from 'react';
import { graphql } from 'gatsby';

const Card = ({ description, title}) => {
  return(
    <>
      <h1>{ description }</h1>
      <p>{ title }</p>
    </>
  )
}

export default Card;