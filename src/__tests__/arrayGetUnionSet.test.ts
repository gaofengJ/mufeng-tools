import arrayGetUnionSet from '../arrayGetUnionSet';

test('arrayGetUnionSet', () => {
  expect(arrayGetUnionSet([1, 2, 3], [2, 4, 6])).toEqual([1, 2, 3, 4, 6]);
  expect(arrayGetUnionSet(['1', '2', '3', '4'], ['2', '4', '6'])).toEqual(['1', '2', '3', '4', '6']);
});
