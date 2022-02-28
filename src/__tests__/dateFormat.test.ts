import dateFormat from '../dateFormat';

test('getType', () => {
  expect(dateFormat(new Date()).split('-')[0]).toMatch(`${new Date().getFullYear()}`);
  expect(dateFormat(new Date()).split('-')[1]).toMatch(`${new Date().getMonth() + 1}`);
  expect(dateFormat(new Date()).split('-')[2]).toMatch(`${new Date().getDate()}`);

  expect(dateFormat('2022-2-22')).toMatch('2022-02-22');
  expect(dateFormat('2022-2-22', 'yyyy年MM月dd日')).toMatch('2022年02月22日');

  expect(dateFormat('2022-2-22', 'day')).toMatch('2');
  expect(dateFormat('2022-2-20', 'day')).toMatch('0');
});
