import * as React from 'react';
import { Head } from './head';
import Navbar from './navbar';
import Footer from './footer';
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

  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  html{
      min-height: -webkit-fill-available;
      min-width: 100%;
      scroll-behavior: smooth;
      box-sizing: border-box;
      display: flex;
  }

  body{
    max-width: 100%;
    color: var(--white);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.5;
    background-image: linear-gradient(to right, var(--darkGreen), var(--green));
    background-size: cover;
    -webkit-background-size: cover;
    @media (max-width: @iphone-screen) {
      background-attachment: scroll;
    }
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
      // This is so the navbar won't cut off the section
      scroll-margin-top: 10vh;
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
  
  return (
    <>
      <Head />
      <GlobalStyle />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;