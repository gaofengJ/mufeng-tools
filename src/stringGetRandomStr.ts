/**
 * 生成随机字符串
 * @param len 字符串长度
 * @returns string
 */
export default function stringRandomStr(len: number = 32) {
  const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-_';
  const charLen = t.length;
  let str = '';
  for (let i = 0; i < len; i += 1) str += t.charAt(Math.floor(Math.random() * charLen));
  return str;
}
