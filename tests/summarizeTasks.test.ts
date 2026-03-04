import { describe, expect, test } from 'vitest';
import { summarizeTasks, type Task } from '../src/index.js';

const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Write docs',
    completed: false,
    lastUpdated: new Date(Date.now() - 60 * 60 * 1000)
  },
  {
    id: '2',
    title: 'Ship release',
    completed: true,
    lastUpdated: new Date(Date.now() - 5 * 60 * 1000)
  }
];

describe('summarizeTasks', () => {
  test('summarizes tasks', () => {
    const summary = summarizeTasks(sampleTasks);
    expect(summary).toContain('Total tasks: 2');
  });
});
