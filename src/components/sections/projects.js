import React from 'react';
import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const StyledProjects = styled.section`
  
  .container{
    display: flex;

    @media screen and (max-width: 480px){
      display: block;
    }
  }

`;

const StyledProjectList = styled.div`
    
  width: max-content;

  ul{
    list-style: none;
    padding: 0;
  }

  li{
    padding: 0;
    margin: 0px 30px 20px 0px;
    display: block;
  }

  button{ 
    background: none;
    border: none;
    color: var(--red);
    font-size: 15px;
    display: block;
    //padding: 0px 10px 0px 10px;
    cursor: pointer;
    transition: .2s;
    &:hover{
      color: var(--white);
      transition: .1s;
    }
  }

  .highlight{
    transition: .2s;
    padding: 0 auto;
    border-left: 3px solid var(--red);
    color: var(--white);
  }
`;

const StyledProjectCard = styled.div`
  .card{
    background: rgba(142, 153, 166, .07);
    /* top-right-bottom-left */
    padding: 25px 40px 40px 35px;
    border-radius: 5px;
    margin-top: 0;
    margin-bottom: 60px;
    border-left: 5px solid var(--red);
    @media (max-width: 480px) { 
      border: none;
      background: linear-gradient(to right, rgba(142, 153, 166, 0), rgba(23, 43, 10, .3))
    }
  }

  // project name & links
  .card-top{
    display: flex;
  }

  h3{
    margin-right: 20px;
    @media (max-width: 480px) {
      margin-right: auto;
    }
  }

  ul{
    list-style: none;
    padding: 0;
    margin-left: auto;
    @media (max-width: 480px) {
      display: flex;
    }
  }

  li{
    display: inline-block;
    margin: 0 10px;
  }

  a{
    display: block;
    font-size: 25px;
    transition: .2s;
    &:hover{
      color: var(--white);
      transition: .1s;
    }
  }

  // project tech & description
  .card-body{
    
  }
`;


const ProjectsSection = () => {
  
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: {fields: frontmatter___position}) {
        nodes {
          body
          frontmatter {
            name
            repo
            technologies
            url
          }
          id
        }
      }
    }`
  );
  
  const [activeTabId, setActiveTabId] = useState(0);
  
  // gather project names for side list
  const projectsListArray = [];
  data.allMdx.nodes.map((node) => {
    projectsListArray.push(node.frontmatter.name);
  });
  
  
  const projectsList = (
    <div>
      <ul>
        {
          projectsListArray.map((name, i) => (
            <li>
              <button
                key={i}
                // isActive={i === activeTabId}
                onClick={() => setActiveTabId(i)}
                className={(i === activeTabId) ? 'highlight' : ''}>
                {name}
              </button>
            </li>
          ))
        }     
      </ul>
    </div>
  );
  
  
  // put each project into its own card
  const projects = data.allMdx.nodes.map((node, i) => (
    <div className='card' 
      key={i}
      hidden={activeTabId !== i}>
      <div className='card-top'>
      <h3 id="title">{node.frontmatter.name}</h3>
        <ul>
          <li>
            <a href={node.frontmatter.repo}
               target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faGithub} /></a></li>
          <li>
            <a href={node.frontmatter.url}
               target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li>
        </ul>
      </div>
      <div className='card-body'>
        <p>Tech used: {node.frontmatter.technologies}</p>
        <MDXRenderer>{node.body}</MDXRenderer>
      </div>
      <div>Image here</div>
    </div>
));
  
  
  return (
    <StyledProjects id='projects'>
      <h2>Projects</h2>
      <div className='container'>
          <StyledProjectList>{projectsList}</StyledProjectList>
          <StyledProjectCard>{projects}</StyledProjectCard>
      </div>
    </StyledProjects>
  )
};


export default ProjectsSection;