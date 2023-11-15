import React from 'react';
import './BlogPost.css';

interface BlogPostProps {
    title: string;
    content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => {
    return (
        <div className='blog-post'>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default BlogPost;
