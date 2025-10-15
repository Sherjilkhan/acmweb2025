<<<<<<< HEAD
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
=======
import React from "react";
import blogs from "../assets/Blog-data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="blog-container">
      <div className="blog-head">
        <h4>Insights & Inspiration</h4>
        <h1>Explore Our Blog</h1>
        <h3>
          Tips, stories, and expert insights to help you stay ahead and
          informed— curated by our team, just for you.
        </h3>
      </div>

      <div className="blog-thumbnail-grid">
        {blogs.map((blog) => (
          <div
            className="blog-card"
            style={{ backgroundImage: `url(${blog.thumbnail})` }}
          >
            <div className="blog-title">
              <h1>{blog.title}</h1>
              {/* <h3>{blog.short_description}</h3> */}
            </div>
            <Link to={`/blog/${blog.id}`} key={blog.id} className="Link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
>>>>>>> 46ab44f6a2674a2584aa276a9cd3e992622d9325
