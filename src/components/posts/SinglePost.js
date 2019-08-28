import React from 'react';
import { FaMap } from 'react-icons/fa';
import Image from 'gatsby-image';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';


const SinglePost = ({post}) => {
    // console.log(post);
    const {name, price, country, days, slug, images} = post;
    // rmember aboud .fluid / .fixed!!!
    const mainImage = images[1].fluid
    return (
        <article className="post">
            <div>
                <Image className="post-image" fluid={mainImage} alt={name} />
                <Link className="post-link" to={`/blog/${slug}`}>details</Link>
            </div>
            <div classname="post-footer">
                <h3>{name}</h3>
                <div className="post-info">
                    <p><FaMap/> {country}</p>
                    <div className="post-details">
                        <p>{days} days</p>
                        <p>from ${price}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

SinglePost.propTypes = {
    post: PropTypes.shape({
        name:PropTypes.string.isRequired,
        country:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        days:PropTypes.number.isRequired,
        images:PropTypes.arrayOf(PropTypes.object).isRequired,
    })
}

export default SinglePost


