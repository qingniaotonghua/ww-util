(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _group = __webpack_require__(2);

Object.keys(_group).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _group[key];
    }
  });
});

var _intersection = __webpack_require__(3);

Object.keys(_intersection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _intersection[key];
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(10);

Object.keys(_type).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _type[key];
    }
  });
});

var _access = __webpack_require__(5);

Object.keys(_access).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _access[key];
    }
  });
});

var _clone = __webpack_require__(6);

Object.keys(_clone).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _clone[key];
    }
  });
});

var _extend = __webpack_require__(9);

Object.keys(_extend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extend[key];
    }
  });
});

var _url = __webpack_require__(11);

Object.keys(_url).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _url[key];
    }
  });
});

var _dom = __webpack_require__(8);

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dom[key];
    }
  });
});

var _date = __webpack_require__(7);

Object.keys(_date).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _date[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupByToMap = groupByToMap;
exports._groupBy = _groupBy;
exports.groupToHierarchy = groupToHierarchy;
exports.groupToArray = groupToArray;
exports._groupToArray = _groupToArray;
function groupByToMap(list, fields) {
  var t = _groupBy(list, fields[0]);
  if (fields.length == 1) {
    return t;
  } else {
    var temp = {};
    for (var key in t) {
      var s = groupBy(t[key], fields.slice(1, fields.length));
      temp[key] = s;
    }
    return temp;
  }
}

function _groupBy(list, field) {
  var map = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var record = _step.value;

      var key = record[field];
      if (map[key] == null) {
        map[key] = [];
      }
      map[key].push(record);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return map;
}

function groupToHierarchy(list, fieldArray) {
  var root = { key: null, data: list };
  if (fieldArray.length === 0) {
    return root;
  }
  var nodes = groupToArray(list, fieldArray);
  root.children = nodes;
  return root;
}

function groupToArray(list, fieldArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (fieldArray.length <= index) {
    return;
  }
  var field = fieldArray[index];
  var nodes = _groupToArray(list, field);
  nodes.forEach(function (node) {
    node.children = groupToArray(node.data, fieldArray, index + 1);
  });
  return nodes;
}

function _groupToArray(list, field) {
  var children = [];
  var map = groupBy(list, field);
  for (var key in map) {
    if (map.hasOwnProperty(key)) {
      children.push({ field: field, key: key, data: map[key] });
    }
  }
  return children;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersection = intersection;
function intersection(array1, array2) {
  if (typeOf(array1) !== 'array') {
    array1 = [array1];
  }
  if (typeOf(array2) !== 'array') {
    array2 = [array2];
  }
  return array1.filter(function (n) {
    return array2.indexOf(n) !== -1;
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _array = __webpack_require__(0);

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _array[key];
    }
  });
});

var _object = __webpack_require__(1);

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _object[key];
    }
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeGet = safeGet;
exports.pick = pick;
var safeGetRegex = exports.safeGetRegex = /\[|(?:\]\[?)|\./g;
/**
 * 安全获取数据
 * @param target 目标结构
 * @param pathes 访问路径
 */
function safeGet(target, pathes) {
  if (typeof pathes === 'string') {
    pathes = pathes.split(safeGetRegex).filter(function (p) {
      return !!p;
    });
  }
  if (target) {
    pathes.some(function (p) {
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
function pick(source, properties) {
  if (!properties || !properties.length) {
    return source;
  }
  var result = {};
  properties.forEach(function (property) {
    return result[property] = source[property];
  });
  return result;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.deepClone = deepClone;
exports.clone = clone;
var deepCloneObject = exports.deepCloneObject = function deepCloneObject(obj) {
  var o = void 0;
  switch (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) {
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
          for (var i = 0, len = obj.length; i < len; i++) {
            o.push(deepCloneObject(obj[i]));
          }
        } else {
          o = {};
          for (var k in obj) {
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
function deepClone(target) {
  var result = null;
  try {
    result = JSON.parse(JSON.stringify(target));
  } catch (e) {
    // @TODO: 考虑使用其他方式深度克隆
  }
  return result;
}

function clone(target) {
  var type = typeOf(target);
  if (type === 'array') {
    return Array.prototype.slice.call(target);
  }
  if (type === 'object') {
    return _extends({}, target);
  }
  return target;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.format = format;
exports.addMinute = addMinute;
exports.addHour = addHour;
exports.addDay = addDay;
exports.addMonth = addMonth;
exports.addYear = addYear;
exports.getToday = getToday;
exports.getCurrentYear = getCurrentYear;
exports.getMonthDays = getMonthDays;
exports.getMonthTimeProgress = getMonthTimeProgress;
exports.getYearWeek = getYearWeek;
// ---------------
// 日期相关工具函数
// ---------------

/**
 * 格式化日期
 * @param date 格式化的Date对象
 * @param formatString 格式化字符串，默认 yyyy-MM-dd HH:mm:ss
 * @deprecated 推荐使用 date-fns
 */
function format(date) {
  var formatString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd HH:mm:ss';

  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(formatString)) {
    formatString = formatString.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(formatString)) {
      formatString = formatString.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return formatString;
}

/**
 * 向目标日期对象增加分钟数，count参数为负则为减少分钟数
 * @param date 目标Date对象
 * @param count 变动数
 * @deprecated 推荐使用 date-fns
 */
function addMinute(date, count) {
  var datetime = date.getTime();
  datetime = datetime + count * 60000;
  return new Date(datetime);
}

/**
 * 向目标日期对象增加小时数，count参数为负则为减少小时数
 * @param date 目标Date对象
 * @param count 变动数
 * @deprecated 推荐使用 date-fns
 */
function addHour(date, count) {
  var datetime = date.getTime();
  datetime = datetime + count * 60000 * 60;
  return new Date(datetime);
}

/**
 * 向目标日期对象增加天数，count参数为负则为减少天数
 * @param date 目标Date对象
 * @param count 变动数
 * @deprecated 推荐使用 date-fns
 */
function addDay(date, count) {
  var datetime = date.getTime();
  datetime = datetime + count * 60000 * 60 * 24;
  return new Date(datetime);
}

/**
 * 向目标日期对象增加月数，count参数为负则为减少月数
 * @param date 目标Date对象
 * @param count 变动数
 * @deprecated 推荐使用 date-fns
 */
function addMonth(date, count) {
  var dtArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
  var y = Math.floor(count / 12);
  var m = count % 12;
  dtArr[0] = dtArr[0] + y;
  dtArr[1] = dtArr[1] + m;
  if (count > 0) {
    if (dtArr[1] > 12) {
      dtArr[1] = dtArr[1] - 12;
      dtArr[0] = dtArr[0] + 1;
    }
  } else {
    if (dtArr[1] < 1) {
      dtArr[1] = dtArr[1] + 12;
      dtArr[0] = dtArr[0] - 1;
    }
  }
  date.setFullYear(dtArr[0]);
  date.setMonth(dtArr[1] - 1);
  return date;
}

/**
 * 向目标日期对象增加年数，count参数为负则为减少年数
 * @param date 目标Date对象
 * @param count 变动数
 * @deprecated 推荐使用 date-fns
 */
function addYear(date, count) {
  var dtArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
  dtArr[0] = dtArr[0] + count;
  date.setFullYear(dtArr[0]);
  return date;
}

/**
 * 获取当天时间，即为今日 00:00:00.000
 */
function getToday() {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

/**
 * 获取当年时间，即为今年 01-01 00:00:00.000
 */
function getCurrentYear() {
  var date = new Date();
  date.setMonth(0);
  date.setDate(1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

/**
 * 获取当前月总天数
 */
function getMonthDays() {
  var now = new Date();
  addMonth(now, 1).setDate(1);
  return addDay(now, -1).getDate();
}

/**
 * 获取当前月时间进度
 */
function getMonthTimeProgress() {
  var dayOfToday = new Date().getDate();
  return dayOfToday / getMonthDays();
}

function getYearWeek(date1) {
  // date1是当前日期
  // date2是当年第一天
  // d是当前日期是今年第多少天
  // 用d + 当前年的第一天的周差距的和在除以7就是本年第几周
  var type = typeof date1 === 'undefined' ? 'undefined' : _typeof(date1);
  if (type === 'number' || type === 'string') {
    date1 = new Date(date1);
  }
  var date2 = new Date(date1.getFullYear(), 0, 1);
  var d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
  return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentStyle = getCurrentStyle;
exports.getScrollbarWidth = getScrollbarWidth;
function getCurrentStyle(obj, prop) {
  if (obj.currentStyle) {
    return obj.currentStyle[prop];
  } else if (window.getComputedStyle) {
    return document.defaultView.getComputedStyle(obj, null)[prop];
  }
  return null;
}

/**
 * 获取当前浏览器滚动条宽度
 */
function getScrollbarWidth() {
  // Create the measurement node
  var scrollDiv = document.createElement('div');
  scrollDiv.className = 'scrollbar-measure';
  scrollDiv.style.cssText = '\n    width: 100px;\n    height: 100px;\n    overflow: scroll;\n    position: absolute;\n    top: -9999px;';

  document.body.appendChild(scrollDiv);

  // Get the scrollbar width
  var scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // Delete the DIV
  document.body.removeChild(scrollDiv);
  return scrollWidth;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendObject = extendObject;
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */
function extendObject(dest) {
  if (dest == null) {
    throw TypeError('Cannot convert undefined or null to object');
  }

  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var source = _step.value;

      if (source != null) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return dest;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeOf = typeOf;
/**
* 返回目标对象的具体类型
* @param o 目标对象
*/
function typeOf(o) {
  return o == null ? String(o) : Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.serializeUrlQueryParam = serializeUrlQueryParam;
exports.normalizePath = normalizePath;
exports.getUrlPath = getUrlPath;
function serializeUrlQueryParam(obj, prefix, key) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + '[' + p + ']' : p;
      var v = obj[p];
      if (v !== null && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && !Array.isArray(obj)) {
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
function normalizePath(path) {
  return path.replace(/[\/\\]{2,}/g, '\/');
}

/**
 * 获取url中的path
 * @param url URL
 */
function getUrlPath(url) {
  var searchIndex = url.indexOf('?');
  if (searchIndex === -1) {
    return url;
  }
  return url.slice(0, searchIndex);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map