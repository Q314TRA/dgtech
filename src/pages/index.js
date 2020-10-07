import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-four'
import Hero from '../containers/landing/hero'
import CaseStudy from '../containers/landing/case-study'
import HeaderLayout from '../containers/landing/header-layout'
import FeaturesArea from '../containers/index-infotechno/features-area'
import TabsArea from '../containers/index-appointment/tabs-area'
import CTAArea from '../containers/global/cta-area/section-two'
import ContactArea from '../containers/index-appointment/contact-area'
import ClientsArea from '../containers/global/clients-area'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO/>
    <Header transparent/>
    <main className="site-wrapper-reveal">
      <Hero/>
      <FeaturesArea />
      <ClientsArea />
      <TabsArea/>
      <CTAArea/>
      <CaseStudy/>
      <HeaderLayout/>
      <ContactArea/>
    </main>
    
  </Layout>
)
 
export default IndexPage
