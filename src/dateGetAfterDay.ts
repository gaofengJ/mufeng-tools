import getType from './getType';
import dateFormat from './dateFormat';

/**
 * @description 获取后一天日期
 * @param { string | Date } date
 * @returns { string | Date } 获取前一天日期
 */

export default function dateGetAfterDay(
  date: string | Date = new Date(),
  fmt?: string,
): string | Date {
  if (getType(date) === 'string') {
    // eslint-disable-next-line no-param-reassign
    date = new Date(date);
  }
  let afterDay: Date | string = new Date((date as Date).getTime() + 24 * 60 * 60 * 1000);
  if (fmt) {
    afterDay = dateFormat(afterDay, fmt);
  }
  return afterDay;
}
