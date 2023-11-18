import React from "react";
import "./BlogList.css";
import BlogPost from "../BlogPost/BlogPost";
import { Article } from "../../api/strapiAPI";

interface BlogListProps {
  posts: Article[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.attributes.title}
          content={post.attributes.content}
        />
      ))}
    </div>
  );
};

export default BlogList;
