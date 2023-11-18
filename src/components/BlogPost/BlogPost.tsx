import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles, Article } from "../../api/strapiAPI";

interface BlogPostProps {
  title?: string;
  content?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<Article | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const articles = await getArticles();
          const foundPost = articles.find(
            (article) => article.id.toString() === id
          );
          setPost(foundPost || null);
        } catch (error) {
          console.error("Error fetching article:", error);
          setPost(null);
        }
      }
    };

    fetchPost();
  }, [id]);
  console.log(post);

  return (
    <div className="blog-post">
      {title ? (
        <>
          <h2>{title}</h2>
          <p>{content}</p>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default BlogPost;
