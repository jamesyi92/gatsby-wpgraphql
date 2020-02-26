import React from 'react';
import { graphql } from 'gatsby';

import Card from './Card';

const TeamSection = ({ cards }) => {
  return(
    cards.map((card, i) => {
      return <Card key={i} {...card} />
    })
  )
}

export default TeamSection;

export const fragment = graphql`
  fragment TeamSection on WORDPRESS_Page_Sectionblocks_SectionBlocks_CardsSection {
    fieldGroupName
    cards {
      description
      fieldGroupName
      title
    }
  }
`