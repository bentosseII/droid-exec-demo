import { describe, expect, test } from 'vitest';
import { typeErrorExample } from '../src/index.js';

describe('typeErrorExample', () => {
  test('returns stringified number', () => {
    const result = typeErrorExample(42);
    expect(result).toBe('42');
  });
});
