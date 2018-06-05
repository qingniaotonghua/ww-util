// ---------------
// 日期相关工具函数
// ---------------

/**
 * 格式化日期
 * @param date 格式化的Date对象
 * @param formatString 格式化字符串，默认 yyyy-MM-dd HH:mm:ss
 * @deprecated 推荐使用 date-fns
 */
export function format(date, formatString = 'yyyy-MM-dd HH:mm:ss') {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(formatString)) {
    formatString = formatString.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(formatString)) {
      formatString = formatString.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
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
export function addMinute(date, count) {
  let datetime = date.getTime();
  datetime = datetime + (count) * 60000;
  return new Date(datetime);
}

/**
 * 向目标日期对象增加小时数，count参数为负则为减少小时数
 * @param date 目标Date对象
 * @param count 变动数
 * @deprecated 推荐使用 date-fns
 */
export function addHour(date, count) {
  let datetime = date.getTime();
  datetime = datetime + (count) * 60000 * 60;
  return new Date(datetime);
}

/**
 * 向目标日期对象增加天数，count参数为负则为减少天数
 * @param date 目标Date对象
 * @param count 变动数
 * @deprecated 推荐使用 date-fns
 */
export function addDay(date, count) {
  let datetime = date.getTime();
  datetime = datetime + (count) * 60000 * 60 * 24;
  return new Date(datetime);
}

/**
 * 向目标日期对象增加月数，count参数为负则为减少月数
 * @param date 目标Date对象
 * @param count 变动数
 * @deprecated 推荐使用 date-fns
 */
export function addMonth(date, count) {
  const dtArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
  const y = Math.floor(count / 12);
  const m = count % 12;
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
export function addYear(date, count) {
  const dtArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
  dtArr[0] = dtArr[0] + count;
  date.setFullYear(dtArr[0]);
  return date;
}

/**
 * 获取当天时间，即为今日 00:00:00.000
 */
export function getToday() {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

/**
 * 获取当年时间，即为今年 01-01 00:00:00.000
 */
export function getCurrentYear() {
  const date = new Date();
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
export function getMonthDays() {
  const now = new Date();
  addMonth(now, 1).setDate(1);
  return addDay(now, -1).getDate();
}

/**
 * 获取当前月时间进度
 */
export function getMonthTimeProgress() {
  const dayOfToday = new Date().getDate();
  return dayOfToday / getMonthDays();
}

export function getYearWeek(date1) {
  // date1是当前日期
  // date2是当年第一天
  // d是当前日期是今年第多少天
  // 用d + 当前年的第一天的周差距的和在除以7就是本年第几周
  const type = typeof(date1);
  if (type === 'number' || type === 'string' ) {
    date1 = new Date(date1);
  }
  const date2 = new Date(date1.getFullYear(), 0, 1);
  const d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
  return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7);
}
