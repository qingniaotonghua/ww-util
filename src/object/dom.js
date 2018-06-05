export function getCurrentStyle(obj, prop) {
  if (obj.currentStyle) {
    return obj.currentStyle[prop];
  }
  else if (window.getComputedStyle) {
    return document.defaultView.getComputedStyle(obj, null)[prop];
  }
  return null;
}


/**
 * 获取当前浏览器滚动条宽度
 */
export function getScrollbarWidth() {
  // Create the measurement node
  const scrollDiv = document.createElement('div');
  scrollDiv.className = 'scrollbar-measure';
  scrollDiv.style.cssText = `
    width: 100px;
    height: 100px;
    overflow: scroll;
    position: absolute;
    top: -9999px;`;

  document.body.appendChild(scrollDiv);

  // Get the scrollbar width
  const scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // Delete the DIV
  document.body.removeChild(scrollDiv);
  return scrollWidth;
}
