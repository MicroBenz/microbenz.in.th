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
		description: z.string().optional(),
		published: z.boolean().optional().default(true),
	}),
});

export const collections = { blog };
