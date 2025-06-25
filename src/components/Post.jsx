import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './Post.css';

function Post() {
  const { title, content } = useLoaderData();
  
  return (
    <>
      <div className="post">
        <h1>{title}</h1>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </div>
    </>
  );
}

export default Post; 