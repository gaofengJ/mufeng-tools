/**
 * @description 获取类型
 * @param { any } param any
 * @returns { string } string
 */
export default function getType(param: any): string {
  // type 格式为 [object String]、[object Number]...
  const type: string = Object.prototype.toString.call(param);
  return type.split(' ')[1].slice(0, -1).toLocaleLowerCase();
}
