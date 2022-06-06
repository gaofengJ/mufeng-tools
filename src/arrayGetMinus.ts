/**
 * @description 获取数组差集
 * @param  arr1 Array
 * @param  arr2 Array
 * @returns any[]
 */
export default function arrayGetMinus(arr1: any[], arr2: any[]): any[] {
  return arr1.filter((item: string) => arr2.indexOf(item) === -1);
}
