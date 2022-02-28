/**
 * @description 获取类型
 * @param param any
 * @returns string
 */
export default function getType(param: any): string {
  let type = Object.prototype.toString.call(param);
  let ret = '';
  switch (type) {
    case '[object String]':
      ret = 'string';
      break;
    case '[object Number]':
      ret = 'number';
      break;
    case '[object Boolean]':
      ret = 'boolean';
      break;
    case '[object Undefined]':
      ret = 'undefined';
      break;
    case '[object Null]':
      ret = 'null';
      break;
    case '[object Object]':
      ret = 'object';
      break;
    case '[object Array]':
      ret = 'array';
      break;
    case '[object Math]':
      ret = 'math';
      break;
    case '[object Date]':
      ret = 'date';
      break;
    case '[object Function]':
      ret = 'function';
      break;
    default:
      ret = 'error';
      break;
  }
  return ret;
}
