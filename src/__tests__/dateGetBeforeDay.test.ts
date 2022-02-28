import dateGetBeforeDay from '../dateGetBeforeDay';

test('getType', () => {
  expect((dateGetBeforeDay(new Date('2022-2-22'), 'yyyy-MM-dd') as string)).toMatch('2022-02-21');

  expect(dateGetBeforeDay('2022-2-22', 'yyyy-MM-dd')).toMatch('2022-02-21');
  expect(dateGetBeforeDay('2022-2-22', 'yyyy年MM月dd日')).toMatch('2022年02月21日');

  expect(dateGetBeforeDay('2022-2-22', 'day')).toMatch('1');
  expect(dateGetBeforeDay('2022-2-20', 'day')).toMatch('6');
});
