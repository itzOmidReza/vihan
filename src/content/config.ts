// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['هوش مصنوعی و داده', 'امنیت شبکه', 'سیستم‌های Embedded', 'توسعه وب']),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    publishDate: z.date().optional(),
    githubRepo: z.string().url().optional(),
  }),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    specialties: z.array(z.string()),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'team': teamCollection,
};
