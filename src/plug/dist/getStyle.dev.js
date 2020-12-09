"use strict";

/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-07 21:22:35
 * @LastEditTime: 2020-12-07 21:28:53
 * @LastEditors: wynn-w
 */

/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-07 21:22:35
 * @LastEditTime: 2020-12-07 21:26:24
 * @LastEditors: wynn-w
 */
module.exports = function (element, attribute) {
  if (element.currentStyle) {
    return element.currentStyle[attribute];
  } else {
    return element.getComputedStyle(element, null)[attribute];
  }
};