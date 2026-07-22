export const encyclopediaSchema = {
  name: 'encyclopedia',
  title: 'Encyclopedia Guide',
  type: 'document',
  fields: [
    { name: 'title', title: 'Guide Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'aeoDefinition', title: 'AEO Featured Snippet', type: 'text' },
    { name: 'definition', title: 'Definition & Overview', type: 'text' },
    { name: 'history', title: 'History & Origins', type: 'text' },
    { name: 'psychology', title: 'Social Psychology', type: 'text' },
    { name: 'safety', title: 'Safety Guidelines', type: 'text' },
  ],
};
