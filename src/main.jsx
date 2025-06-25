import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import FlatPage from './components/Page-flat.jsx'
import Post from './components/Post.jsx'
import { getPosts, getStructure } from './utils/get-structure.js'

// Helper to find any folder that matches the name at any level
function findFolderByName(folderName) {
  // Check for index.jsx files at any level
  const allIndexes = import.meta.glob('/src/content/**/index.jsx', { eager: true })
  
  for (const [filePath, module] of Object.entries(allIndexes)) {
    // Extract folder structure: "/src/content/psychology/dsm/index.jsx" -> "psychology/dsm"
    const relativePath = filePath
      .replace(/^\/src\/content\//, '')
      .replace(/\/index\.[^.]+$/, '')
    
    // Get the last folder name: "psychology/dsm" -> "dsm"
    const lastFolderName = relativePath.split('/').pop()
    
    if (lastFolderName === folderName) {
      return {
        fullPath: relativePath,
        module: module
      }
    }
  }
  
  return null
}

// Get posts from a specific folder path
function getPostsFromFolder(folderPath) {
  const allPosts = getPosts({ category: 'all' })
  return allPosts.filter(post => {
    // Check if the post's file path matches the folder
    const allPostFiles = import.meta.glob('/src/content/**/*.md', {eager: true})
    for (const [filePath, content] of Object.entries(allPostFiles)) {
      const postId = filePath.split('/').pop().replace('.md', '')
      if (postId === post.postId) {
        // Extract folder path from file path
        const pathParts = filePath.replace('/src/content/', '').split('/')
        pathParts.pop() // Remove filename
        const fileFolder = pathParts.join('/')
        return fileFolder === folderPath
      }
    }
    return false
  })
}

// Check for .md files in any folder with matching name
function findPostsByFolderName(folderName) {
  const allPostFiles = import.meta.glob('/src/content/**/*.md', {eager: true})
  
  for (const filePath of Object.keys(allPostFiles)) {
    // Extract folder structure from md file path
    const pathParts = filePath.replace('/src/content/', '').split('/')
    pathParts.pop() // Remove filename
    const lastFolderName = pathParts[pathParts.length - 1]
    
    if (lastFolderName === folderName) {
      const fullFolderPath = pathParts.join('/')
      return getPostsFromFolder(fullFolderPath)
    }
  }
  
  return []
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <FlatPage />,
        loader: () => ({
          description: "Welcome to my blog etc etc.",
          children: getStructure(""),
        })
      },
      {
        path: ":folderName",
        element: <FlatPage />,
        loader: ({ params }) => {
          const { folderName } = params
          
          let description = ''
          let children = []
          
          // Check if there's a folder with this name that has an index.jsx
          const folderInfo = findFolderByName(folderName)
          if (folderInfo) {
            description = folderInfo.module.description ?? folderInfo.module.frontmatter?.description ?? ''
            
            // Get subsections from getStructure using the full path
            const subsections = getStructure(folderInfo.fullPath)
            children.push(...subsections)
          }
          
          // Also check for .md files in any folder with this name
          const posts = findPostsByFolderName(folderName)
          if (posts.length > 0) {
            console.log('Found posts in folder:', folderName)
            children.push(...posts)
          }
        
          if (children.length > 0) {
            return {
              description: description || ``,
              children: children
            }
          }
          
          // Check if it's an individual post
          const allPosts = getPosts({ category: 'all' })
          const matchingPost = allPosts.find(post => post.postId === folderName)
          if (matchingPost) {
            // Redirect to the new post URL structure
            throw new Response("", {
              status: 302,
              headers: {
                Location: `/posts/${folderName}`,
              },
            })
          }
          throw new Error(`Content "${folderName}" not found`)
        }
      },
      {
        path: "posts/:postId", // Move posts under /posts/ to avoid conflicts
        element: <Post />,
        loader: ({ params }) => {
          const allPosts = getPosts({ category: 'all' })
          const { postId } = params
          const matchingPost = allPosts.find(post => post.postId === postId)
          
          if (!matchingPost) {
            throw new Error(`Post "${postId}" not found`)
          }
          
          return matchingPost
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);