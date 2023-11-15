import React from 'react';
import BlogPost from './BlogPost';

interface BlogListProps {
    posts: Array<{
        title: string;
        content: string;
    }>;
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => (
                <BlogPost key={index} title={post.title} content={post.content} />
            ))}
        </div>
    );
}

export default BlogList;
