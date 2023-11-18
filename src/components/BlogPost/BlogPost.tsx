import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles, Article } from "../../api/strapiAPI";

const BlogPost: React.FC = () => {
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

  if (!post) {
    return <p>Loading post...</p>; // or "Post not found" if you prefer
  }

  return (
    <div className="blog-post">
      <h2>{post.attributes.title}</h2>
      <p>{post.attributes.content}</p>
      {/* Include additional post details here if available */}
    </div>
  );
};

export default BlogPost;
