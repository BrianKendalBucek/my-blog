import React from 'react';
import './BlogList.css';
import BlogPost from '../BlogPost/BlogPost';

interface BlogListProps {
    posts: Array<{
        title: string;
        content: string;
    }>;
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    return (
        <div className="blog-list">
            {posts.map((post, index) => (
                <BlogPost key={index} title={post.title} content={post.content} />
            ))}
        </div>
    );
}

export default BlogList;
