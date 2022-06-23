import * as React from "react";
import Layout from "../components/layout";
import About from '../components/about';
import Contact from '../components/contact';
import Greeting from '../components/greeting';
import Projects from '../components/projects';

const IndexPage = () => {
  return (
    <Layout>
      <Greeting />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage;
