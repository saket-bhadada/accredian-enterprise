import { z } from "zod";

export const TEAM_SIZES = [
  "1 – 10 employees",
  "11 – 50 employees",
  "51 – 200 employees",
  "201 – 500 employees",
  "501 – 1,000 employees",
  "1,000+ employees",
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(200),
  company: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(150),
  teamSize: z.enum(TEAM_SIZES, {
    error: "Please select a valid team size",
  }),
  message: z.string().max(2000).optional().or(z.literal("")),
  /** Honeypot field — if non-empty the submission is silently discarded. */
  website: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
