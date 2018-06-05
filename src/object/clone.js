export const deepCloneObject = obj => {
  let o;
  switch (typeof obj) {
    case 'undefined':
      break;
    case 'string':
      o = obj + '';
      break;
    case 'number':
      o = obj - 0;
      break;
    case 'boolean':
      o = obj;
      break;
    case 'object':
      if (obj === null) {
        o = null;
      } else {
        if (obj instanceof Array) {
          o = [];
          for (let i = 0, len = obj.length; i < len; i++) {
            o.push(deepCloneObject(obj[i]));
          }
        } else {
          o = {};
          for (const k in obj) {
            if (obj.hasOwnProperty(k)) {
              o[k] = deepCloneObject(obj[k]);
            }
          }
        }
      }
      break;
    default:
      o = obj;
      break;
  }
  return o;
};

/**
 * 深度克隆对象
 * @param target 目标对象
 */
export function deepClone(target) {
  let result = null;
  try {
    result = JSON.parse(JSON.stringify(target));
  } catch (e) {
    // @TODO: 考虑使用其他方式深度克隆
  }
  return result;
}

export function clone(target) {
  const type = typeOf(target);
  if (type === 'array') {
    return Array.prototype.slice.call(target);
  }
  if (type === 'object') {
    return { ...target };
  }
  return target;
}

