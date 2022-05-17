import dateGetBeforeDay from '../dateGetBeforeDay';

test('dateGetBeforeDay', () => {
  expect((dateGetBeforeDay(new Date('2022-02-22'), 'yyyy-MM-dd') as string)).toMatch('2022-02-21');

  expect(dateGetBeforeDay('2022-03-01', 'yyyy-MM-dd')).toMatch('2022-02-28');
  expect(dateGetBeforeDay('2022-02-22', 'yyyy年MM月dd日')).toMatch('2022年02月21日');

  expect(dateGetBeforeDay('2022-02-22', 'day')).toMatch('1');
  expect(dateGetBeforeDay('2022-02-20', 'day')).toMatch('6');
});
