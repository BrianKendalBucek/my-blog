import React, { useState, useEffect } from 'react';
import './BlogPost.css';
import { useParams } from 'react-router-dom';

interface BlogPostProps {
    title?: string;
    content?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => {
    const { id } = useParams();
    const [post, setPost] = useState({ title: '', content: '' });

    useEffect(() => {
        if (!title && id) {
            // Fetch the post using the id
        } else {
            setPost({ title: title || '', content: content || '' });
        }
    }, [id, title, content]);

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

export default BlogPost;
