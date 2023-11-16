import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlogList from './components/BlogList/BlogList';
import BlogPost from './components/BlogPost/BlogPost';
// Import other components you might need

const App: React.FC = () => {
    const blogPosts = [
        { title: "Post 1", content: "This is the first post." },
        { title: "Post 2", content: "This is the second post." },
        // Add more posts here if needed
    ];

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<BlogList posts={blogPosts} />} />
                <Route path="/post/:id" element={<BlogPost />} />
            </Routes>
        </Router>
    );
}

export default App;
