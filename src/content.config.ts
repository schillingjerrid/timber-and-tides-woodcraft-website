import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    coverImage: z.string(),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),

    wood: z.string().optional(),
    finish: z.string().optional(),
    dimensions: z.string().optional(),
    tags: z.array(z.string()).default([]),

    excerpt: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string().default("Anonymous"),
    roleOrContext: z.string().optional(), // e.g. "Commission client", "Gift recipient"
    projectSlug: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = {
  projects,
  testimonials,
};