import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	projects: defineCollection({
		loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			/** Link to the running app, if the project has one. */
			app: z.string().optional(),
			/** Link to the source code. */
			repo: z.string().optional(),
		}),
	}),
};
