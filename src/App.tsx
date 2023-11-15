import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BlogList from './components/BlogList/BlogList';


const App: React.FC = () => {
    const blogPosts = [
        { title: "Post 1", content: "This is the first post." },
        { title: "Post 2", content: "This is the second post." },
    ];

    return (
        <div>
            <Navbar />
            <BlogList posts={blogPosts} />
        </div>
    );
}

export default App;
