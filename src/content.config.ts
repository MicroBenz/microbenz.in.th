import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		featuredImage: image(),
		tags: z.array(z.string()),
		slug: z.string().optional(),
	}),
});

export const collections = { blog };
