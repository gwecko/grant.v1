import React from "react";
import Layout from "../components/layout";
import GreetingSection from "../components/sections/greeting";
import AboutSection from "../components/sections/about";
import ProjectsSection from "../components/sections/projects";
import ContactSection from "../components/sections/contact";



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

