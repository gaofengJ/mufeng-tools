import stringLineToHump from '../stringLineToHump';

test('stringLineToHump', () => {
  expect(stringLineToHump('a_bb_ccc')).toMatch('aBbCcc');
});
