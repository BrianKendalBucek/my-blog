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
      if (!title && id) {
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
      } else {
        setPost({
          id: 0,
          attributes: {
            title: title || "",
            content: content || "",
            date: new Date().toISOString(),
          },
        });
      }
    };

    fetchPost();
  }, [id, title, content]);

  return (
    <div className="blog-post">
      {post ? (
        <>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.content}</p>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default BlogPost;
