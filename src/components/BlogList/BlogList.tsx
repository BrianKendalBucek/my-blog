import React from "react";
import { Link } from "react-router-dom";
import "./BlogList.css"; // Update this CSS file for styling
import { Article } from "../../api/strapiAPI";

interface BlogListProps {
  posts: Article[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-list-item">
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.content.substring(0, 200)}...</p>{" "}
          {/* Show an excerpt */}
          {/* Optionally add other information here like date, author */}
          <Link to={`/post/${post.id}`}>Read More</Link>{" "}
          {/* Link to the full post */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
