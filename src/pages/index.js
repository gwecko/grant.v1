import React from "react";
// import { siteMetadata } from "../../gatsby-config";

import Layout from "../components/layout";
import GreetingSection from "../components/sections/greeting";
import AboutSection from "../components/sections/about";
import ProjectsSection from "../components/sections/projects";
import ContactSection from "../components/sections/contact";
import { SEO } from "../components/seo";


const IndexPage = () => {
  return (
    <Layout>
      <GreetingSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};
export default IndexPage;

export const Head = () => (
  <SEO />
);

