// IMPORTS ALL SECTIONS (INDEX.JSX FILES)
const allIndexes = import.meta.glob('/src/content/**/index.jsx', { eager: true })

export function getStructure(path = '') {
  // split the incoming path into its segments:
  //   ''                   → []
  //   'psychology'         → ['psychology']
  //   'psychology/dsm'     → ['psychology','dsm']
  const baseSegments = path === '' 
    ? [] 
    : path.split('/')

  return Object.entries(allIndexes)
    .map(([filePath, module]) => {
      // turn "/src/content/psychology/dsm/index.md" into ["psychology","dsm"]
      const rel = filePath
        .replace(/^\/src\/content\//, '')
        .replace(/\/index\.[^.]+$/, '')
        .split('/')
      return { rel, module }
    })
    // keep only the entries that are one level deeper than `baseSegments` and whose first segments match
    .filter(({ rel }) => {
      return (
        rel.length === baseSegments.length + 1 &&
        baseSegments.every((seg, i) => rel[i] === seg)
      )
    })
    .map(({ rel, module }) => {
      const slug = rel[rel.length - 1]
      const title = module.title
        ?? module.frontmatter?.title
        ?? slug.replace(/-/g,' ')
      const description = module.description
        ?? module.frontmatter?.description
        ?? ''
        const image = module.image
        ?? module.frontmatter?.image
        ?? ''
      return {
        title,
        link: `/${slug}`,
        description,
        image
      }
    })
}

// IMPORTS ALL POSTS (MD FILES) 
const allPostFiles = import.meta.glob('/src/content/**/*.md', {eager: true})

// Returns all posts as an array of objects
export function getPosts({category}) {
  const allPosts = Object.entries(allPostFiles);

  if (category === 'all') {
    return allPosts.map(([filePath, content]) => {
      // Transforms each post to the expected format
      return parsePost(filePath, content);
    });
  }

  const filteredPosts = allPosts
    .map(([filePath, content]) => {
      const category = content.attributes.category || 'Uncategorized';
      
      return { filePath, content, category };
    })
    .filter(post => post.category === category)
    .map(post => parsePost(post.filePath, post.content, post.frontmatter));

  return filteredPosts;
}

function parsePost(filePath, content) {
  const postId = filePath.split('/').pop().replace('.md', '');
  
  // Access properties directly from the module object
  return {
    postId: postId,
    title: content.attributes.title || 'Untitled',
    link: `/${postId}`,
    image: content.attributes.image || '',
    description: content.attributes.description || '',
    category: content.attributes.category || '',
    content: content.html || ''
  };
}