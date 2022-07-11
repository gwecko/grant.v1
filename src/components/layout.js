import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as Styles from '../styles/style.module.css';
import Navbar from './navbar';
import Head from './head';

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
        <div>
            <title>{data.site.siteMetadata.title}</title>
            <Head/>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;