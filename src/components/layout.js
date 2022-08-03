import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Head from './head';
import Navbar from './navbar';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --darkGreen: #172B0A;
    --green: #485632;
    --gray: #8E99A6;
    --white: #F0EBE0;
    --red: #DA465C;
  }

  /* Scrollbar stuff */
  *::-webkit-scrollbar {
      width: 14px;
  }
  *::-webkit-scrollbar-track {
      background: var(--green);
  }
  *::-webkit-scrollbar-thumb {
      background-color: var(--darkGreen);
      border-radius: 7px;
      border: 2px solid var(--green);
  }
  /* END: Scrollbar stuff */


  html{
      width: 100%;
      scroll-behavior: smooth;
      box-sizing: border-box;
      display: flex;
      overflow-x: hidden;
  }

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
      padding: 100px 20%;
      
      @media screen and (max-width: 480px) {
        padding: 5%;
      }
  }

  section:first-of-type{
      border: none;
      margin-top: 25vh;
      margin-bottom: 50vh;
  }

  section {
      margin: 20vw auto;
      padding: 0px 0px 0px 10px;
  }



  p{
      margin: 20px 0 0;
  }


  a{
      color: var(--red);
      text-decoration: none;
  }

  h2{
    font-size: 2.5em;
    width: max-content;
    // display: flex;
  }

  // little green decorative line
  h2::after{
    content: '';
    display: inline-block;
    position: relative;
    top: -8px;
    width: 300px;
    height: 2px;
    margin-left: 20px;
    background-color: var(--green);
    @media (max-width: 600px){
      display: none;
    }
  }

  h2:not(:first-child)::after{
    content: none;
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