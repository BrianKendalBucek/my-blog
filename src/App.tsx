import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BlogList from "./components/BlogList/BlogList";
import BlogPost from "./components/BlogPost/BlogPost";
import { getArticles, Article } from "./api/strapiAPI"; // Update the path

const App: React.FC = () => {
  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const articles = await getArticles();
      setPosts(articles);
    };

    fetchPosts();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList posts={posts} />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;
