"use strict";

/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-07 21:22:35
 * @LastEditTime: 2020-12-09 10:27:53
 * @LastEditors: wynn-w
 */
module.exports = function (element, attribute) {
  if (element.currentStyle) {
    return element.currentStyle[attribute];
  } else {
    return getComputedStyle(element, false)[attribute];
  }
};