export const blogSchema = {
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Article Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'content', title: 'Content Body', type: 'text' },
    { name: 'authorName', title: 'Author Name', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'publishedAt', title: 'Published Date', type: 'date' },
  ],
};
