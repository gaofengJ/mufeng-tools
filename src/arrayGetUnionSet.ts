/**
 * @description 获取数组并集
 * @param  arr1 Array
 * @param  arr2 Array
 * @returns any[]
 */
export default function getUnionSet(arr1: any[], arr2: any[]): any[] {
  return arr1.concat(arr2.filter((item: any) => !(arr1.indexOf(item) > -1)));
}
