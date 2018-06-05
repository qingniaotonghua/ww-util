export const safeGetRegex = /\[|(?:\]\[?)|\./g;
/**
 * 安全获取数据
 * @param target 目标结构
 * @param pathes 访问路径
 */
export function safeGet(target, pathes) {
  if (typeof pathes === 'string') {
    pathes = pathes.split(safeGetRegex).filter(p => !!p);
  }
  if (target) {
    pathes.some(p => {
      target = target[p];
      if (target === null || target === undefined) {
        return true;
      }
    });

  }
  return target;
}

/**
* 提取对象的特定属性
* @param source 需要提取的对象
* @param properties 需要提取的属性名称集合
*/
export function pick(source, properties) {
  if (!properties || !properties.length) {
    return source;
  }
  const result = {};
  properties.forEach(property => result[property] = source[property]);
  return result;
}