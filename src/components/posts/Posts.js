import React from 'react'
import SinglePost from './SinglePost'

const Posts = ({posts}) => {
    // const items = posts.map(post => {
    //     return post.node.id
    // })
    // console.log(items)
    return (
        <section className="posts-section">
            <h2>Posts</h2>
            <div className="posts-div">
                {posts.map(({node}) => {
                    return <SinglePost key={node.id} post={node} />
                })}
            </div>
        </section>
    )
}


export default Posts
