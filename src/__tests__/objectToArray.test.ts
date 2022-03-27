import objectToArray from '../objectToArray';

test('getType', () => {
  const obj = {
    0: '零',
    1: '一',
    2: '二',
  };
  const arr = ['零', '一', '二'];
  expect(objectToArray(obj)).toEqual(arr);
});
