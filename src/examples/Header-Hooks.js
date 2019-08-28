import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

const Header = () => {
    const {site: {siteMetadata: info}} = useStaticQuery(graphql`
    {
        site{
          siteMetadata{
            title
            description
            author
          }
        }
      }
    `);
    return (
        <div>
            <h1>author: {info.author}</h1>
            <h1>title: {info.title}</h1>
        </div>
    )
}

export default Header
