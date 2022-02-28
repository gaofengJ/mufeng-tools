import getType from '../getType';

test('getType', () => {
  expect(getType('string')).toMatch(/^string$/);
  expect(getType(222)).toMatch(/^number$/);
  expect(getType(true)).toMatch(/^boolean$/);
  expect(getType(undefined)).toMatch(/^undefined$/);
  expect(getType(null)).toMatch(/^null$/);
  expect(getType({ a: 1 })).toMatch(/^object$/);
  expect(getType([1, 2])).toMatch(/^array$/);
  expect(getType(Math)).toMatch(/^math$/);
  expect(getType(new Date())).toMatch(/^date$/);
  expect(getType(() => {})).toMatch(/^function$/);
  expect(getType(new Error())).toMatch(/^error$/);
});
