import { defineCollection, z } from 'astro:content';

const catalog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    order: z.number().default(0),
    icon: z.enum(['livros', 'sala-de-aula', 'casa', 'jogos', 'mapas', 'banners']),
    instagram_url: z.string().url().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    stars: z.number().min(1).max(5).default(5),
    published: z.boolean().default(true),
  }),
});

export const collections = { catalog, testimonials };
