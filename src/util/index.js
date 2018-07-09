/* ===============================================
 *                公 用 资 源 函 数
 * =============================================== */
export function copyArray(source, array) {
  let index = -1
  const length = source.length

  array || (array = new Array(length))
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

// shuffle a array
export function shuffle(array) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  let index = -1
  const lastIndex = length - 1
  const result = copyArray(array)
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
    const value = result[rand]
    result[rand] = result[index]
    result[index] = value
  }
  return result
}

// 将分秒时间格式化
export function timeFormat(time) {
  let minute = parseInt(time/60),
      second = parseInt(time)%60;
  return `${minute/10 < 1 ? 0 : ''}${minute} : ${second/10 < 1 ? 0 : ''}${second}`;
};

// 将格式化的时间转化成数字
export function timeConvert(time) {
  let tempArr = time.split(':'),
      minute = parseInt(tempArr[0]),
      second = parseInt(tempArr[1]);
  return minute*60+second;
}

// 填充字符 
export function padString(str, split, spliceChar, padChar, decimal) {
    var str = String(str),
        len = str.length,
        split = split >> 0,
        decimal = decimal >>> 0,
        padChar = padChar || '0',
        first = split >= 0 ? str.slice(0, split) : str.slice(0, len+split),
        second = decimal > 0 ? str.slice(split).slice(0, decimal) : str.slice(split);

    if (spliceChar === undefined) {
        return second;
    }else {
        first = first || padChar;
        return first + spliceChar + second;
    }
}

// 获取昨日为今年第几日
export function getDayOfYear(val) {
    let date = new Date(val),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        days = [31, (year%4==0&&year%100!=0)||year%400==0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return days.slice(1, month).reduce((acculator, num) => acculator + num, days[0]) + day;
}


