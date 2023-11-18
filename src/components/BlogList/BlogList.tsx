import React from "react";
import "./BlogList.css"; // Make sure to update this CSS file for styling
import BlogPost from "../BlogPost/BlogPost";
import { Article } from "../../api/strapiAPI";

interface BlogListProps {
  posts: Article[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-list-item">
          <BlogPost
            title={post.attributes.title}
            content={post.attributes.content}
          />
          {/* Add more elements like date, author, etc. if needed */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
