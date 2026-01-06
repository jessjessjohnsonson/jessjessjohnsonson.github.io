import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm'
import './Post.css';

function Post() {
  const { title, content, type } = useLoaderData();
  
  return (
    <>
      <div className={`post ${type === 'jsx' ? 'jsx-post' : ''}`}>
        <h1>{title}</h1>
        {type === 'jsx' ? (
          // Render JSX content directly
          <div className="jsx-content">
            {React.createElement(content.default || content)}
          </div>
        ) : (
          // Render markdown content
          <ReactMarkdown 
            rehypePlugins={[rehypeRaw]} 
            remarkPlugins={[remarkGfm]}
          >
            {content}</ReactMarkdown>
        )}
      </div>
    </>
  );
}

export default Post; 