import React from 'react';
import BlogCard from './BlogCard';
import maskgroup1 from '../assests/Mask group (1).png';
import maskgroup2 from '../assests/children-using-building-kit 1.png';
import maskgroup5 from '../assests/standard-quality-control-collage-concept 1.png';
import maskgroup3 from '../assests/creative-team.png'
const blogs = [
 
];

const BlogSection = ({ title }) => (
  <section className="blog-section">
    <h2>{title}</h2>
    <div className="blog-grid">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          title={blog.title}
          subtitle={blog.subtitle}
        />
      ))}
    </div>
  </section>
);

export default BlogSection;