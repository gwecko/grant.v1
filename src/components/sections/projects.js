import React from 'react';
import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Icon } from '../icons';


const StyledProjects = styled.section`
  h2{
    padding-bottom: 30px;
  }
  
  .container{
    display: flex;

    @media (max-width: 768px){
      display: block;
    }
    @media (max-width: 480px){
      width: 90vw;
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
    width: max-content;
    padding-left: 10px;
    margin: 0px 30px 20px 10px;
    display: block;
    transition: .2s;
    &:hover{
      color: var(--red);
      transition: .1s;
    }
  }

  button{
    background: none;
    color: var(--white);
    font-size: initial;
    font-family: inherit;
    cursor: pointer;
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
    padding: 25px 35px 40px 35px;
    border-radius: 5px;
    margin-top: 0;
    margin-bottom: 60px;
    border-left: 5px solid var(--red);
    @media (max-width: 480px) { 
      border: none;
      background: linear-gradient(to left, rgba(142, 153, 166, .1), rgba(23, 43, 10, .4));
    }
  }

  // project name & links
  .card-top{
    display: flex;
  }

  h3{
    margin-right: 0px;
    @media (max-width: 480px) {
      margin-right: auto;
    }
  }

  ul{
    display: inline-flex;
    list-style: none;
    padding: 0;
    margin-left: auto;
    @media (max-width: 480px) {
      display: flex;
    }
  }

  li{
    margin: 0 10px;
    @media (max-width: 600px){
      margin: 0 0 0 10px;
    }
  }

  a{
    display: block;
    transition: .2s;
    svg{
      width: 1.7rem;
      stroke-width: 2;
    }
    &:hover{
      color: var(--white);
      transition: .1s;
    }
    &:active{
      svg{
        fill: var(--white);
      }
    }
  }

  .img{
    filter: drop-shadow(5px 5px 10px var(--darkGreen));
    transition: .2s;

    &:hover{
      transform: translate(-1px, -2px);
      transition: .1s ease-in;
    }
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
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }`
  );
  
  const [activeTabId, setActiveTabId] = useState(0);
  
  // gather project names for side list
  const projectListArray = [];
  data.allMdx.nodes.map((node) => {
    return(projectListArray.push(node.frontmatter.name))
  });
  
  // project selection side list
  const projectList = (
    <div>
      <ul>
        {
          projectListArray.map((name, i) => (
            <li className={(i === activeTabId) ? 'highlight' : ''}>
              <button
                key={i}
                onClick={() => setActiveTabId(i)}
                onKeyDown={() => setActiveTabId(i)}>
                <h3>{name}</h3>
              </button>
            </li>
          ))
        }     
      </ul>
    </div>
  );
  
  
  // make a card for each project
  const projectCard = data.allMdx.nodes.map((node, i) => {
    const image = getImage(node.frontmatter.image);
    const { name, repo, url } = node.frontmatter;
    
    return (
      <div className='card'
        key={i}
        hidden={activeTabId !== i}>
        <div className='card-top'>
          <h3 id="title">{name}</h3>
          <ul>
            <li>
              <a href={repo}
                target="_blank" rel="noreferrer noopener"
                aria-label={`${name} github`}>
                <Icon name='github' /></a></li>
            <li>
              <a href={node.frontmatter.url}
                target="_blank" rel="noreferrer noopener"
                aria-label={`${node.frontmatter.name} external`}>
                <Icon name='external' /></a></li>
          </ul>
        </div>
        <div className='card-body'>
          <h4><i>{node.frontmatter.technologies}</i></h4>
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>
        <div className='img'>
          <br />
          <a href={url}
            target="_blank" rel="noreferrer noopener">
            <GatsbyImage image={image} alt={name} />
          </a>
        </div>
      </div>
    )
  });
  
  
  return (
    <StyledProjects id='projects'>
      <h2>Projects</h2>
      <div className='container'>
          <StyledProjectList>{projectList}</StyledProjectList>
          <StyledProjectCard>{projectCard}</StyledProjectCard>
      </div>
    </StyledProjects>
  )
};


export default ProjectsSection;