import getUnionSet from '../arrayGetUnionSet';

test('getUnionSet', () => {
  expect(getUnionSet([1, 2, 3], [2, 4, 6])).toEqual([1, 2, 3, 4, 6]);
  expect(getUnionSet(['1', '2', '3', '4'], ['2', '4', '6'])).toEqual(['1', '2', '3', '4', '6']);
});
