export default function stringRandomStr(len: number = 32) {
  const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-_';
  const charLen = t.length;
  let n = '';
  for (let i = 0; i < len; i += 1) n += t.charAt(Math.floor(Math.random() * charLen));
  return n;
}
