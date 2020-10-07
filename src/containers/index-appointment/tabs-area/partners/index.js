import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { PartnersWrap, BrandLogoWrap } from './partners.style'
import ClientLogo from '../../../../components/ui/client-logo'

const Partners = ({ content }) => {
  const partnersQueryData = useStaticQuery(graphql`
        
        query PartnersDataQuery{
            landingJson(id: {eq: "technologies"}) {
              technologies {
                  
                    id
                    path
                    image {
                      childImageSharp {
                        fluid(quality: 100) {
                          ...GatsbyImageSharpFluid_tracedSVG
                          presentationWidth
                          presentationHeight
                          aspectRatio
                        }
                      }
                    }
                    hover_image {
                      childImageSharp {
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                            aspectRatio
                        }
                      }
                    }
                  
              }
            }
            
            
        }
    `);

  const { technologies } = partnersQueryData.landingJson;
  const partnersData = technologies;
  return (
    <PartnersWrap>
      {partnersData.map(data => (
        <BrandLogoWrap key={data.id}>
          <ClientLogo
            layout={1}
            title={data.id}
            path={data.path}
            brandImage={data.image.childImageSharp}
            hoverImage={data.hover_image.childImageSharp}
          />
        </BrandLogoWrap>
      ))}
    </PartnersWrap>
  )
}
export default Partners;