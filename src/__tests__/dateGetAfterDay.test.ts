import dateGetAfterDay from '../dateGetAfterDay';

test('getType', () => {
  expect((dateGetAfterDay(new Date('2022-2-22'), 'yyyy-MM-dd') as string)).toMatch('2022-02-23');

  expect(dateGetAfterDay('2022-2-22', 'yyyy-MM-dd')).toMatch('2022-02-23');
  expect(dateGetAfterDay('2022-2-22', 'yyyy年MM月dd日')).toMatch('2022年02月23日');

  expect(dateGetAfterDay('2022-2-22', 'day')).toMatch('3');
  expect(dateGetAfterDay('2022-2-20', 'day')).toMatch('1');
});
