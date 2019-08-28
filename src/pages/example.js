import React from 'react';
import HeaderHook from '../examples/Header-Hooks';
import HeaderStatic from '../examples/Header-Static';
import {graphql} from 'gatsby';
import Layout from '../components/layout';

const example = (props) => {
    console.log(props)
    const {name, age} = props.data.site.siteMetadata.persondata
    return (
        <Layout>
            example page
            <HeaderHook/>
            <HeaderStatic/>
            <div>person</div>
            <h2>name: {name}</h2>
            <h2>age: {age}</h2>
        </Layout>
    )
}

export const getData = graphql`
    query {
        site{
        siteMetadata{
            persondata: data{
                age
                name
                }
            }
        }
    }
`

export default example
