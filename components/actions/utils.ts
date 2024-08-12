import { z } from "zod";

export const schema = z.object({
  date: z.date(),
  category: z.string().min(1,"Category is required"),
  description: z.string(),
  amount: z.string().min(1,"Amount is required"),
});