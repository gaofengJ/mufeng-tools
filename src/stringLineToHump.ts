/**
 * 下划线转驼峰
 * @param str 字符串（下划线）
 * @returns 字符串（驼峰）
 */
export default function stringLineToHump(str: string): string {
  // eslint-disable-next-line no-useless-escape
  return str.replace(/\_(\w)/g, (_, letter) => letter.toUpperCase());
}
