import { z } from "zod";

export const userStorySchema = z.object({
  role: z.string().min(1).max(120),
  goal: z.string().min(1).max(240),
  benefit: z.string().min(1).max(240),
});

export const taskSchema = z.object({
  title: z.string().min(1).max(140),
  description: z.string().min(1).max(320),
});

export const briefPlanSchema = z.object({
  projectBrief: z.string().min(40).max(1800),
  functionalRequirements: z.array(z.string().min(4).max(240)).min(3).max(10),
  userStories: z.array(userStorySchema).min(2).max(8),
  acceptanceCriteria: z.array(z.string().min(4).max(240)).min(3).max(10),
  tasks: z.array(taskSchema).min(3).max(12),
});

export type BriefPlan = z.infer<typeof briefPlanSchema>;

export const artifactKeySchema = z.enum([
  "projectBrief",
  "functionalRequirements",
  "userStories",
  "acceptanceCriteria",
  "tasks",
]);

export type ArtifactKey = z.infer<typeof artifactKeySchema>;

export const generateRequestSchema = z.object({
  idea: z.string().trim().min(12).max(4000),
  section: artifactKeySchema.optional(),
  currentPlan: briefPlanSchema.optional(),
});
