import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

export default function FlatPage() {
  const { description, children } = useLoaderData()

  if (!children || children.length === 0) {
    return <p className="no-posts">No content found</p>;
  }

  // Create columns for masonry layout
  let numColumns = 4;
  let columns = [];
  for (let i = 0; i < numColumns; i++) {
    columns.push([]);
  }
  for (let i = 0; i < children.length; i++) {
    columns[i % numColumns].push(children[i]);
  }

  return (
    <>
      <p className="page_description">{description}</p>
      <div className="card_container" style={{ display: 'flex', gap: '1rem' }}>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {column.map((item) => (
              <PostCard key={item.link} post={item} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export function PostCard({ post }) {
  const { title, image, description, link } = post;

  return (
    <Link to={link} className="card">
      {image && (
        <div className="card_image_container">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="card_image"
          />
        </div>
      )}
      <div className="card_content">
        <h2 className="card_title">{title}</h2>
        {description && <p className="card_description">{description}</p>}
      </div>
    </Link>
  );
}