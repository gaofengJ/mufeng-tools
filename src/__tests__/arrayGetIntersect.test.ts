import arrayGetIntersect from '../arrayGetIntersect';

test('arrayGetIntersect', () => {
  expect(arrayGetIntersect([1, 2, 3], [2, 4, 6])).toEqual([2]);
  expect(arrayGetIntersect([1, 2, 3, 4], [2, 4, 6])).toEqual([2, 4]);
  expect(arrayGetIntersect(['1', '2', '3', '4'], ['2', '4', '6'])).toEqual(['2', '4']);
});
