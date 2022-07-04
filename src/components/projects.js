import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Projects = ({ data }) => {
  
  const query = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            name
            repo
            technologies
            url
          }
          body
          id
        }
      }
    }
  `);
  
  //console.log(data.allMdx);
  return (
    <section id="projects">
      <h2>Projects</h2>
      {
        data.allMdx.nodes.map((node) => (
        <div>
            <h3 id="title"></h3>
            <div role="image" id="image"></div>
            <p id="description">tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget</p>
            <label for="tech">Tech</label>
            <ul id="tech">
              <li>item</li>
              <li>thing</li>
              <li>lang</li>
            </ul>
        </div>
        ))
      }
    </section>
  )
  
};


export default Projects;