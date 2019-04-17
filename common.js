function hasSpecial(str) {
    for (const i in str) {
        var asc = str.charCodeAt(i);
        if (!((asc >= 65 && asc <= 90) || (asc >= 48 && asc <= 57) || (asc >= 97 && asc <= 122) || asc == 95)) {
            return true;
        }
    }
    return false;
}
function hasNumber(str) {
    for (const i in str) {
        var asc = str.charCodeAt(i);
        if (asc >= 48 && asc <= 57) {
            return true;
        }
    }
    return false;
}
function hasLetter(str) {
    for (const i in str) {
        var asc = str.charCodeAt(i);
        if ((asc >= 65 && asc <= 90) || (asc >= 97 && asc <= 122)) {
            return true;
        }
    }
    return false;
}
function addZero(num) {
    num = num + "";
    return num.length == 1 ? "0" + num : num;
}
function date2string(date, sp) {
    sp = sp || "-"; // 或操作符的运用 
    var year = date.getFullYear(),   // 得到年份
        month = date.getMonth() + 1,  // 得到月份
        today = date.getDate(),     // 得到天
        hour = date.getHours(),    // 时
        min = date.getMinutes(),    // 分
        sec = date.getSeconds();    // 秒
    return year + sp + addZero(month) + sp + addZero(today) + sp + addZero(hour) + ":" +
        addZero(min) + ":" + addZero(sec);
}
function isLeapYear(year) {
    return year % 400 == 0 || (year % 4 == 0 && year % 100 == 0);
}

function getDaysOfMonth(month) {

}

function string2date(str) {
    if (hasLetter(str)) {
        throw new Error("Invalid Date!");
    }
    return new Date(str);
}

function betweenDate(d1, d2) {

}
function randomColor() {

    var r = Math.floor(Math.random() * 255 + 1).toString(16),
        g = Math.floor(Math.random() * 255 + 1).toString(16),
        b = Math.floor(Math.random() * 255 + 1).toString(16);
    return "#" + addZero(r) + addZero(g) + addZero(b);

}
/**
 * 
 * @param {Dom} ele dom元素
 * @param {property} props Dom属性
 */
function getStyle(ele, props) {
    return ele.currentStyle ? ele.currentStyle[props] : getComputedStyle(ele)[props];
}
// 解决IE6以下不兼容document.getElementsByClassName()的问题
function getClassName(className, element) {
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (className, element) {
            var children = (element || document).getElementsByTagName('*');
            var elements = [];
            for (let i = 0; i < children.length; i++) {
                var child = children[i];
                var classNames = child.className.split(' ');

                for (let j = 0; j < classNames.length; j++) {
                    if (classNames[j] == className) {
                        elements.push(classNames[j]);
                        break;
                    }
                }
            }
            return elements;
        }
    }
}
