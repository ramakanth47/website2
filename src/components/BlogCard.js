import React from 'react';

const BlogCard = ({ image, title, subtitle }) => (
  <div className="blog-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </div>
);

export default BlogCard;