// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  // تعیین لودر برای خواندن فایل‌های مارک‌داون از مسیر پروژه‌ها
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
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
  // تعیین لودر برای خواندن فایل‌های مارک‌داون از مسیر تیم
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    specialties: z.array(z.string()),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  team: teamCollection,
};
