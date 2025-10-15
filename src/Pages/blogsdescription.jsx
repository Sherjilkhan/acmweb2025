import React from "react";
import blogs from "../assets/Blog-data/blogs";
import { useParams } from "react-router-dom";

const Blogsdescription = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  return (
    <div
      className="blgdes-container"
      
    >
      <div className="blg-head">
        <h1>{blog.title}</h1>
        {blog.content.map((para, index) => (
          <p key={index} style={{ lineHeight: "1.6", marginTop: "10px" }}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Blogsdescription;
