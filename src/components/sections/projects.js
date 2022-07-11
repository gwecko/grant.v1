import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import IconGitHub from '../icons/github';


const StyledProjectsList = styled.div`
  .projects-list{
    padding-inline-start: 0;
    width: 100px;
  }

  ul{
    list-style: none;
    padding: 0;
  }

  li{
    padding: 0;
    margin: 0px 30px 20px 0px;
    display: block
  }

  button{ 
    background: none;
    border: none;
    color: var(--red);
    text: var(--red);
    font-size: 15px;
    display: block;
    padding: 0px 10px 0px 0px;
    margin: 0px;
  }
`;

const StyledProjects = styled.div`
  .card{
    background: rgba(142, 153, 166, .07);
    /* top-right-bottom-left */
    padding: 25px 15px 15px 25px;
    border-radius: 5px;
    margin-top: 0;
    margin-bottom: 60px;
    border-left: 5px solid var(--red);
  }

  .top{
    display: flex;
    margin-right: 20px;
  }

  ul{
    list-style: none;
    padding: 0;
  }

  li{
    display: inline-block;
    margin-left: 0;
    margin-right: 20px;
  }

  a{
    font-size: 25px;
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
  
  // gather project names for side list
  const projectsListArray = [];
  data.allMdx.nodes.map((node) => {
    projectsListArray.push(node.frontmatter.name);
  });
  
  
  const projectsList = (
    <div className='projects-list'>
      <ul>
        {
          projectsListArray.map((name) => (
            <li>
              <button>{name}</button>
            </li>
          ))
        }     
      </ul>
    </div>
  );
  
  
  // put each project into its own card
  const projects = data.allMdx.nodes.map((node) => (
    <div className='card'>
      <div className='top'>
      <h3 id="title">{node.frontmatter.name}</h3>
        <ul className='links'>
          <li>
            <a href={node.frontmatter.repo}><FontAwesomeIcon icon={faGithub} /></a></li>
          <li>
            <a href={node.frontmatter.url}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li>
        </ul>
      </div>
      <div role="image" id="image"></div>
      <p>Tech used: {node.frontmatter.technologies}</p>
      <MDXRenderer id="body">{node.body}</MDXRenderer>
    </div>
  ));
  
  
  return (
    <div id='projects'>
      <h2>Projects</h2>
      <StyledProjectsList>{projectsList}</StyledProjectsList>
      <StyledProjects>{projects}</StyledProjects>
    </div>
  )
};


export default ProjectsSection;