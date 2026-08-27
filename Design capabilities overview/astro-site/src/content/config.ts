import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    keyword: z.string().optional(),
    draft: z.boolean().optional().default(false),
    // added by the redesign:
    category: z.enum(["Desks", "Storage", "Power", "Light", "Audio"]).default("Desks"),
    pricePaid: z.string().optional(),   // e.g. "£29.98" or "£29.98 / £78.99"
    readTime: z.string().optional(),    // e.g. "6 min"
    heroNote: z.string().optional(),    // caption for the hero image placeholder
    heroImage: z.string().optional(),   // /images/foo.jpg once you have a photo
  }),
});

export const collections = { blog };
