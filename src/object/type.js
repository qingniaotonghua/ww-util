/**
* 返回目标对象的具体类型
* @param o 目标对象
*/
export function typeOf(o) {
  return o == null ? String(o) : Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
}