import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts/Posts';

import styles from '../components/blog.module.css';

import {graphql} from 'gatsby';

const blog = ({data}) => {
    return (
        <Layout>
            <h1 className={styles.title}>Blog page</h1>
            <Posts posts={data.posts.edges}/>
     </Layout>
    )
}

export const getPosts = graphql `
{
    posts:allContentfulPost{
      edges{
        node{
          name
          slug
          price
          country
          days
          id:contentful_id
          images{
            fluid{
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default blog


