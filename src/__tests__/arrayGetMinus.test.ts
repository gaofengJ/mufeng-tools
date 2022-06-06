import arrayGetMinus from '../arrayGetMinus';

test('arrayGetMinus', () => {
  expect(arrayGetMinus([1, 2, 3], [2, 4, 6])).toEqual([1, 3]);
  expect(arrayGetMinus([1, 2, 3, 4, 5], [2, 4, 6])).toEqual([1, 3, 5]);
  expect(arrayGetMinus(['1', '2', '3', '4'], ['2', '4', '6'])).toEqual(['1', '3']);
});
