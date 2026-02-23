import { describe, expect, test, } from '@jest/globals';
import graph from './index';

describe('generatedMoves', () => {
  test('[0, 0]', () => {
    const result = [[2, 1], [1, 2]];
    const paths = graph.generatedMoves([0, 0]);
    expect(paths).toEqual(result);
  });

  test('[3, 3]', () => {
    const result = [
      [1, 2], 
      [2, 1], 
      [4, 1], 
      [5, 2], 
      [5, 4], 
      [4, 5], 
      [2, 5], 
      [1, 4]
    ];
    const paths = graph.generatedMoves([3, 3]);
    expect(paths).toEqual(result);
  });
});

describe('compare', () => {
  test('[1, 2] to [1, 2]', () => {
    expect(graph.compare([1, 2], [1, 2])).toBe(true)
  });

  test('[1, 2] to [2, 1]', () => {
    expect(graph.compare([1, 2], [2, 1])).toBe(false)
  });
})