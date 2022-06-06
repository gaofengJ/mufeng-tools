import getIntersect from '../arrayGetIntersect';

test('getIntersect', () => {
  expect(getIntersect([1, 2, 3], [2, 4, 6])).toEqual([2]);
  expect(getIntersect([1, 2, 3, 4], [2, 4, 6])).toEqual([2, 4]);
  expect(getIntersect(['1', '2', '3', '4'], ['2', '4', '6'])).toEqual(['2', '4']);
});
