import * as React from 'react';
import Navbar from './navbar';
import { createGlobalStyle } from 'styled-components';
import SideLinks from './sideLinks';


const GlobalStyle = createGlobalStyle`
  :root{
    --darkGreen: #172B0A;
    --green: #485632;
    --gray: #8E99A6;
    --white: #F0EBE0;
    --red: #DA465C;
    --dropShadow: drop-shadow(0px -3px 7px var(--darkGreen));
  }

  /* Scrollbar configuration */
  *::-webkit-scrollbar {
      width: 14px;
      @media (max-width: 480px){
        width: 0px;
    }
  }
  *::-webkit-scrollbar-track {
      background: var(--green);
  }
  *::-webkit-scrollbar-thumb {
      background-color: var(--darkGreen);
      border-radius: 8px;
      border: 2px solid var(--green);
  }
  /* END: Scrollbar configuration */

  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  html{
      min-height: -webkit-fill-available;
      height: 100%;
      min-width: 100%;
      scroll-behavior: smooth;
      box-sizing: border-box;
      background: var(--darkGreen);
  }

  body{
    margin-top: 0px;
    width: 100%;
    height: 100%;
    color: var(--white);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.5;
    // iPhone notch space needs a solid color in 'body' to integrate address bar
    background: var(--darkGreen);
    background-size: cover;
    -webkit-background-size: cover;
    @media (max-width: @iphone-screen) {
      background-attachment: scroll;
    }
  }

  main{
      padding: 100px 20%;
      overflow-x: hidden;
      background: linear-gradient(0deg, rgba(23,43,10,1) 0%, rgba(72,86,50,1) 40%, rgba(23,43,10,1) 100%);
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
    background-color: var(--white);
    @media (max-width: 800px){
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
      <div id='root'>
        <GlobalStyle />
        <Navbar />
        <main>
          {children}
        </main>
        <SideLinks />
      </div>
    </>
  );
}

export default Layout;