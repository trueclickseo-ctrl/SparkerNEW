import { gameSchema } from './schemas/game';
import { questionSchema } from './schemas/question';
import { blogSchema } from './schemas/blog';
import { encyclopediaSchema } from './schemas/encyclopedia';
import { translationSchema } from './schemas/translation';

export const schemaTypes = [
  gameSchema,
  questionSchema,
  blogSchema,
  encyclopediaSchema,
  translationSchema,
];
