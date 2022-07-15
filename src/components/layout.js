import * as React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import * as Styles from '../styles/style.module.css';
import Head from './head';
import Navbar from "./navbar";

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