import getType from './getType';

/**
 * @description 格式化日期
 * @type { function(string | Date, string): string }
 * @param { string | Date } date 日期
 * @param { string } fmt 预期的日期格式
 * @returns { string } 格式化后的日期
 */
export default function dateFormat(
  date: string | Date = new Date(),
  fmt: string = 'yyyy-MM-dd',
): string {
  if (getType(date) === 'string') {
    if ((date as string).length === 10) (date as string).concat('000'); // 时间戳为 10 位字符串时要乘 1000，为 13 位时不需要处理
    // eslint-disable-next-line no-param-reassign
    date = new Date(date);
  }
  const obj: Record<string, any> = {
    yyyy: (date as Date).getFullYear(),
    MM:
      (date as Date).getMonth() < 9
        ? `0${(date as Date).getMonth() + 1}`
        : (date as Date).getMonth() + 1,
    dd:
      (date as Date).getDate() > 9
        ? (date as Date).getDate()
        : `0${(date as Date).getDate()}`,
    day: (date as Date).getDay(), // 0-6 代表周日到周六
  };
  Object.keys(obj).forEach((i) => {
    // eslint-disable-next-line no-param-reassign
    fmt = fmt.replace(i, obj[i]);
  });
  return fmt;
}
