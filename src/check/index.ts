export const isString = <T>(o: T): boolean =>
  Object.prototype.toString.call(o).slice(8, -1) === "String"

export const isNumber = <T>(o: T): boolean =>
  Object.prototype.toString.call(o).slice(8, -1) === "Number"

export const isObj = <T>(o: T): boolean =>
  Object.prototype.toString.call(o).slice(8, -1) === "Object"

export const isArray = <T>(o: T): boolean =>
  Object.prototype.toString.call(o).slice(8, -1) === "Array"

export const isDate = <T>(o: T): boolean =>
  Object.prototype.toString.call(o).slice(8, -1) === "Date"

export const isBoolean = <T>(o: T): boolean =>
  Object.prototype.toString.call(o).slice(8, -1) === "Boolean"

export const isFunction = <T>(o: T): boolean =>
  Object.prototype.toString.call(o).slice(8, -1) === "Function"

export const isNull = <T>(o: T): boolean =>
  Object.prototype.toString.call(o).slice(8, -1) === "Null"

export const isUndefined = <T>(o: T): boolean =>
  Object.prototype.toString.call(o).slice(8, -1) === "Undefined"

export const isIos = () => {
  //是否ios
  var u = navigator.userAgent
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    //安卓手机
    return false
  } else if (u.indexOf("iPhone") > -1) {
    //苹果手机
    return true
  } else if (u.indexOf("iPad") > -1) {
    //iPad
    return false
  } else if (u.indexOf("Windows Phone") > -1) {
    //winPhone手机
    return false
  } else {
    return false
  }
}

export const isPc = () => {
  //是否为pc端
  var u = navigator.userAgent
  var agents = [
    "Android",
    "iPhone",
    "SymbianOs",
    "Windows Phone",
    "iPad",
    "iPod",
  ]
  var flag = true

  for (let v = 0; v < agents.length; v++) {
    if (u.indexOf(agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

export const browserType = () => {
  //浏览器类型
  var userAgent = navigator.userAgent,
    isOpera = userAgent.indexOf("Opera") > -1, //取得浏览器的userAgent字符串
    isIE =
      userAgent.indexOf("compatible") > -1 &&
      userAgent.indexOf("MSIE") > -1 &&
      !isOpera, //判断是否ie浏览器
    isEdge = userAgent.indexOf("Edge") > -1, //判断是否为IE的Edge浏览器
    isFF = userAgent.indexOf("Firefox") > -1, //判断是否为Firefox浏览器
    isSafari =
      userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1, //判断是否Safari浏览器
    isChrome =
      userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 //判断是否Chrome浏览
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);")
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp["$1"])
    if (fIEVersion == 7) return "IE7"
    else if (fIEVersion == 8) return "IE8"
    else if (fIEVersion == 9) return "IE9"
    else if (fIEVersion == 10) return "IE10"
    else if (fIEVersion == 11) return "IE11"
    else return "IE7以下"
  }

  if (isFF) return "FF"
  if (isOpera) return "Opera"
  if (isEdge) return "Edge"
  if (isSafari) return "Safari"
  if (isChrome) return "Chrome"
}

export const checkStr = (str, type) => {
  //校验
  switch (type) {
    case "phone": //手机号码
      return /^1[3|4|5|7|8][0-9]{9}$/.test(str)
      break
    case "tel": //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
      break
    case "card": //身份证
      return /^\d{15}|\d{18}$/.test(str)
      break
    case "pwd": //密码以字母开头，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
      break
    case "postal": //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str)
      break
    case "QQ": //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
      break
    case "email": //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
      break
    case "money": //金钱(小数点两位)
      return /^\d*(?:\.\d{0,2})?$/.test(str)
      break
    case "URL": //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
        str
      )
      break
    case "IP": //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
        str
      )
      break
    case "date": //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
          str
        ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      )
      break
    case "number": //数字
      return /^[0-9]$/.test(str)
      break
    case "english": //英文
      return /^[a-zA-Z]+$/.test(str)
      break
    case "chinese": //中文
      return /^[\u4E00-\u9FA5]+$/.test(str)
      break
    case "lower": //小写
      return /^[a-z]+$/.test(str)
      break
    case "upper": //大写
      return /^[A-Z]+$/.test(str)
      break
    case "HTML": //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
      break
    default:
      return true
  }
}
