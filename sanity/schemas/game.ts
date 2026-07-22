export const gameSchema = {
  name: 'game',
  title: 'Game Deck',
  type: 'document',
  fields: [
    { name: 'title', title: 'Game Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'shortDescription', title: 'Short Description', type: 'text' },
    { name: 'fullDescription', title: 'Full Description', type: 'text' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Party Classic', 'Icebreaker', 'Debate Game', 'Action Game', 'Social Deduction', 'Intimacy Deck'] },
    },
    { name: 'cardCount', title: 'Card Count', type: 'number' },
    { name: 'rules', title: 'Rules', type: 'array', of: [{ type: 'string' }] },
  ],
};
