export const translationSchema = {
  name: 'translation',
  title: 'Translation Override',
  type: 'document',
  fields: [
    { name: 'locale', title: 'Target Locale', type: 'string' },
    { name: 'key', title: 'Translation Key', type: 'string' },
    { name: 'value', title: 'Translated Text', type: 'text' },
  ],
};
