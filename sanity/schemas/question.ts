export const questionSchema = {
  name: 'question',
  title: 'Question Card',
  type: 'document',
  fields: [
    { name: 'prompt', title: 'Prompt Text', type: 'text' },
    { name: 'game', title: 'Parent Game', type: 'reference', to: [{ type: 'game' }] },
    { name: 'locale', title: 'Locale', type: 'string' },
    { name: 'intensity', title: 'Intensity', type: 'string', options: { list: ['Mild', 'Medium', 'Spicy', 'Deep'] } },
  ],
};
