import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from '../components/HeroSection';
import TeamSection from '../components/TeamSection';

const IndexPage = ({ data }) => {

  const sections = data.wordpress.page.sectionBlocks.sectionBlocks;
  return(
    <Layout>
      <SEO title="Home" />
      {
        sections.map((section, i) => {
          const typeName = section.__typename;
          
          switch(typeName) {
            case 'WORDPRESS_Page_Sectionblocks_SectionBlocks_HeroSection':
              return <HeroSection key={i} {...section} />
            
            case 'WORDPRESS_Page_Sectionblocks_SectionBlocks_CardsSection':
              return <TeamSection key={i} {...section} />

            default: 
              return <h1>No Sections Found</h1>
          }
        })
      }
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    wordpress {
      page(idType: DATABASE_ID, id: "9") {
        id
        title
        sectionBlocks {
          sectionBlocks {
            ...HeroSection
            ...TeamSection
          }
        }
      }
    }
  }
`