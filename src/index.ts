import { formatDistanceToNow } from 'date-fns';
import { z } from 'zod';

const TaskSchema = z.object({
  id: z.string(),
  title: z.string().min(3),
  completed: z.boolean(),
  lastUpdated: z.date()
});

export type Task = z.infer<typeof TaskSchema>;

export function summarizeTasks(tasks: Task[]): string {
  const result = TaskSchema.array().safeParse(tasks);
  if (!result.success) {
    const message = result.error.errors.map((err) => err.message).join('; ');
    throw new Error(`Invalid tasks: ${message}`);
  }

  const total = result.data.length;
  const completed = result.data.filter((task) => task.completed).length;
  const remaining = total - completed;
  const mostRecentUpdate = result.data
    .slice()
    .sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime())[0];

  if (!mostRecentUpdate) {
    return 'No tasks available.';
  }

  const freshness = formatDistanceToNow(mostRecentUpdate.lastUpdated, {
    addSuffix: true
  });

  return `Total tasks: ${total}, completed: ${completed}, remaining: ${remaining}. Last updated ${freshness}.`;
}

export function flakyFunction(flag: boolean) {
  if (flag) {
    return 'flag was truthy';
  }

  return 'flag was falsy';
}

export function typeErrorExample(value: number): string {
  return value;
}

export function legacyParser(input: any) {
  if (typeof input === 'string') {
    return input.trim();
  }

  return input;
}
