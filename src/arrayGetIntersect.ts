/**
 * @description 获取数组交集
 * @param  arr1 Array
 * @param  arr2 Array
 * @returns any[]
 */
export default function getIntersect(arr1: any[], arr2: any[]): any[] {
  return arr1.filter((item: any) => arr2.indexOf(item) > -1);
}
