// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection

const works = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/works" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    role: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    link: z.string()
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {works};