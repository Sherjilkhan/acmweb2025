import React from 'react'
import blogs from "../assets/Blog-data/blogs"
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className='blog-container'>
      <div className='blog-head'>
        <h4>Insights & Inspiration</h4>
        <h1>Explore Our Blog</h1>
        <h3>
          Tips, stories, and expert insights to help you stay ahead and informed—
          curated by our team, just for you.
        </h3>
      </div>

      <div className='blog-thumbnail-grid'>
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}
              className='blog-card'
              style={{ backgroundImage: `url(${blog.thumbnail})` }}
            >
              <div className='blog-title'>
                <h1>{blog.title}</h1>
                {/* <h3>{blog.short_description}</h3> */}
              </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blogs
