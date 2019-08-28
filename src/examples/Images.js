import React from 'react';
import {qraphql} from 'gatsby';
import {useStaticQuery} from 'gatsby';
import img from '../images/img3.jpg';
import Image from 'gatsby-image';
import './Images.css';

const getImages = graphql`
    {
        fixed:file(name: {eq: "img1"}) {
            childImageSharp {
                fixed(width:250,height:400,grayscale:true){
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fluid:file(name: {eq: "img2"}) {
            childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`


const Images = () => {
    const data = useStaticQuery(getImages);
    // console.log(data)
    return (
        <div className="wrapper">
            <article>
                <h3>basic img</h3>
                <img src={img} className="basic"/>
            </article>
            <article>
                <h3>fixed img and blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed}/>
            </article>
            <article>
                <h3>fluid img and svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid}/>
            </article>
        </div>
    )
}

export default Images
