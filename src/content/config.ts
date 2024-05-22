import { defineCollection } from "astro:content";
import { photoSchema } from "../lib/Photo";

const photos = defineCollection({
  schema: photoSchema,
});
export const collections = {
  photos,
};
