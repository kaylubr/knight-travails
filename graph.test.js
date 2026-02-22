import { describe, expect, test, } from '@jest/globals';
import graph from './index';

describe('generateEdgest', () => {
  test('[0, 0]', () => {
    const result = [[2, 1], [1, 2]];
    const paths = graph.generateEdges([0, 0]);
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
    const paths = graph.generateEdges([3, 3]);
    expect(paths).toEqual(result);
  });
});