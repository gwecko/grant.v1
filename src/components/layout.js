import * as React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Head from './head';
import Navbar from "./navbar";
import * as Style from '../styles/style.module.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `);
    
    return (
        <>
          <title>{data.site.siteMetadata.title}</title>
          <Head/>
          <Navbar/>
          <main>
              {children}
          </main>
        </>
    )
}

export default Layout;