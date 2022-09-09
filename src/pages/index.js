import React from "react";
import Layout from "../components/layout";
import GreetingSection from "../components/sections/greeting";
import AboutSection from "../components/sections/about";
import ProjectsSection from "../components/sections/projects";
import ContactSection from "../components/sections/contact";
import { siteMetadata } from "../../gatsby-config";



const IndexPage = () => {
  return (
    <>
      <Layout>
        <GreetingSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </Layout>
    </>
  );
};
export default IndexPage;


// Gatsby Head API -- must be defined in page, not a component
export const Head = () => {

  const { title, description, image, siteUrl, icon } = siteMetadata;
  return (
    <>
      <meta http-equiv="content-language" content="en-us" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="icon" content={icon} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
    </>
  )
}
