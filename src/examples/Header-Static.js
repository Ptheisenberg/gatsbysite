import React from 'react';
import {graphql, StaticQuery} from 'gatsby';

// query and name - not require
const getData = graphql`
    query SecondQuery {
        site{
        siteMetadata{
            title
            description
            author
        }
        }
    }
`
const HeaderStatic = () => {
    return (
        <StaticQuery 
        query={getData} 
        render={(data) => {
            return (
                <div>
                    <p>Static query</p>
                    <h1>{data.site.siteMetadata.description}</h1>
                </div>
            )
        }}>
        </StaticQuery>
    )
}

export default HeaderStatic
