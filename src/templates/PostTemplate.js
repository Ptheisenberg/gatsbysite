import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Image from 'gatsby-image';
import {FaMoneyBillWave, FaMap} from 'react-icons/fa';
import {Link} from 'gatsby'; 

const PostTemplate = ({data}) => {
    const {name, price, country, days, start, journey, description:{description}, images} = data.post
    return (
        <Layout>
            <section className="template">
                <div>
                    <div className="imagesInPost">
                        {images.map((image, index) => {
                            return <Image key={index} fluid={image.fluid} alt={name} className="imageInPost" />
                        })}    
                    </div>
                    <h2>{name}</h2>
                    <div className="info">
                        <p><FaMoneyBillWave/> starting frim ${price}</p>
                        <p><FaMap/> {country}</p>
                    </div>
                    <h4>starts on: {start}</h4>
                    <h4>duration: {days} days</h4>
                    <div>{description}</div>
                    <h2>daily schedule</h2>
                    <ul>
                        {journey.map((item, index) => {
                            return <li key={index}>{item.day}</li>
                        })}
                    </ul>
                    <Link to="/blog">Back to blog</Link>
                </div>    
            </section>    
        </Layout>
    )
}

export const query = graphql`
query($slug:String!){
    post:contentfulPost(slug:{eq:$slug}){
      name
      price
      country
      days
      start(formatString: "DD.MM.YYYY")
      journey{
        day
        info
      }
      description{
        description
      }
      images{
        fluid{
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`


export default PostTemplate
