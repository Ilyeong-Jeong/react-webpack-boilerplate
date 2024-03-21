import { sumNumber } from '../sum';

describe('sum test', () => {
  test('sum', () => {
    expect(sumNumber(1, 2)).toBe(3);
  });
});
