import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ---------------------------------------------------------------------------
// Each collection below is a folder of YAML files (one file = one entry).
// To add a new item, copy an existing .yaml file in that folder, edit the
// fields, save. No code changes needed — the site picks it up automatically.
// ---------------------------------------------------------------------------

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
  schema: z.object({
    track: z.enum(['academic', 'industry']),
    role: z.string(),
    org: z.string(),
    location: z.string().optional(),
    start: z.string(), // e.g. "Jan 2025"
    end: z.string(),   // e.g. "Dec 2025" or "Present"
    bullets: z.array(z.string()),
    order: z.number().default(0), // lower = more recent / shown first
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    context: z.string(), // e.g. "CSE499: Senior Design Capstone"
    start: z.string(),
    end: z.string(),
    summary: z.array(z.string()), // bullet points
    stack: z.array(z.string()),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    image: z.string().optional(), // path under /public
    order: z.number().default(0),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    context: z.string(),
    start: z.string(),
    end: z.string(),
    bullets: z.array(z.string()),
    paperUrl: z.string().url().optional(),
    doi: z.string().optional(),
    stack: z.array(z.string()).optional(),
    status: z.string().optional(), // e.g. "Under Review", "Published"
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/publications' }),
  schema: z.object({
    code: z.string(), // e.g. "J1"
    year: z.number(),
    authors: z.array(z.string()),
    title: z.string(),
    venue: z.string(),
    status: z.string().optional(), // e.g. "Accepted", "Under Review"
    link: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/news' }),
  schema: z.object({
    date: z.string(),   // display string, e.g. "January 1, 2025"
    sortDate: z.string(), // ISO date for sorting, e.g. "2025-01-01"
    text: z.string(),
  }),
});

export const collections = { experience, projects, research, publications, news };
