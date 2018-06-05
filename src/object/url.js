export function serializeUrlQueryParam(obj, prefix, key) {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? prefix + '[' + p + ']' : p;
      const v = obj[p];
      if (v !== null && typeof v === 'object' && !Array.isArray(obj)) {
        str.push(serializeUrlQueryParam(v, k, p));
      } else if (Array.isArray(obj)) {
        str.push(encodeURIComponent(key) + '=' + encodeURIComponent(v));
      } else {
        str.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
      }
    }
  }
  return str.join('&');
}

/**
 * 整理路径，移除路径中多余的 /或\
 * @param path 路径
 */
export function normalizePath(path) {
  return path.replace(/[\/\\]{2,}/g, '\/');
}


/**
 * 获取url中的path
 * @param url URL
 */
export function getUrlPath(url) {
  const searchIndex = url.indexOf('?');
  if (searchIndex === -1) {
    return url;
  }
  return url.slice(0, searchIndex);
}