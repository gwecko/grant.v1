import * as React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Head from './head';
import Navbar from "./navbar";
import * as Style from '../styles/style.module.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    max-width: 100%;
    height: 100%;
    margin: 0;
    color: var(--white);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.5;
    background: linear-gradient(to right, var(--darkGreen), var(--green));
    overflow-x: hidden;
  }

  main{
    @media screen and (max-width: 480px) {
        padding: 5%;
    }
  }

  h2{
    font-size: 2.5em;
    width: max-content;
    display: flex;
  }

  h2::after{
      content: '';
      display: inline-block;
      position: relative;
      top: -8px;
      width: 300px;
      height: 2px;
      margin-left: 20px;
      background-color: var(--green);
      @media (max-width: 480px){
        display: none;
      }
  }
`;


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
          <Head />    
          <GlobalStyle />
          <Navbar />
          <main>
              {children}
          </main>
        </>
    )
}

export default Layout;