import React from 'react';
import { graphql } from 'gatsby';

const HeroSection = ({ title, description }) => {
  return(
    <>
      <h1>{ title }</h1>
      <p>{ description }</p>
    </>
  )
}

export default HeroSection;

export const fragment = graphql`
  fragment HeroSection on WORDPRESS_Page_Sectionblocks_SectionBlocks_HeroSection {
    description
    fieldGroupName
    title
  }
`
