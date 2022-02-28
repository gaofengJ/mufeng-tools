import getType from '../getType';

test('getType', () => {
  expect(getType('string').match(/^string$/));
  expect(getType(222).match(/^number$/));
  expect(getType(true).match(/^boolean$/));
  expect(getType('string').match(/^string$/));
  expect(getType('string').match(/^string$/));
  expect(getType('string').match(/^string$/));
  expect(getType('string').match(/^string$/));
  expect(getType('string').match(/^string$/));
  expect(getType('string').match(/^string$/));
  expect(getType('string').match(/^string$/));
});
