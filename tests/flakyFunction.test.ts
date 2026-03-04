import { describe, expect, test } from 'vitest';
import { flakyFunction } from '../src/index.js';

describe('flakyFunction', () => {
  test('sometimes fails due to randomness', () => {
    const value = Math.random() > 0.7;
    if (value) {
      expect(flakyFunction(value)).toBe('flag was truthy');
    } else {
      expect(flakyFunction(value)).toBe('flag was falsy');
    }
  });
});
