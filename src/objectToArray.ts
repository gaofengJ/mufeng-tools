import getType from './getType';
/**
 * 将对象转化为数组
 * @param obj Record<string, any>
 * @returns <any>[]
 */
export default function objectToArray(obj: Record<string, any>): any[] {
  const ret: any[] = [];
  Object.keys(obj).forEach((i: any) => {
    if (getType(obj[i]) === 'object') {
      objectToArray(obj[i]);
    }
    ret.push(obj[i]);
  });
  return ret;
}
