
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then((res) => {
        console.log(res.data)
        setPosts(res.data.posts)
      })
      .catch((err) => {
        console.log('Error fetching posts:', err)
      })
  }, [])

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="post-card" key={post._id}>
            <img
              src={post.image}
              alt={post.caption}
              className="post-image"
            />
            <h3>{post.caption}</h3>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </section>
  )
}

export default Feed
