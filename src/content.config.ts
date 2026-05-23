import { defineCollection, z } from "astro:content";

const plans = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    file: z.string(), // path to downloadable PDF in /public
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    difficulty: z.string().optional(), // e.g. "Beginner", "Intermediate", "Advanced"
    dimensions: z.string().optional(),
    materials: z.array(z.string()).default([]),
    projectSlug: z.string().optional(), // link to related project
  }),
});


const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    coverImage: image(),
    gallery: z.array(image()).default([]),
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
    images: z.array(z.string()).default([]),
  }),
});

export const collections = {
  plans,
  projects,
  testimonials,
};