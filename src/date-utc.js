/*!
 * @license date-utc
 * (c) sugarshin
 * License: MIT
 */

export default class DateUTC {

  static now() {
    let d = new Date();
    return Date.UTC(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds(),
      d.getMilliseconds()
    );
  }

  static parse(dateString) {
    return isNaN(Date.parse(dateString)) && Date.parse(dateString) + this.prototype._getTimezoneOffset();
  }

  _getTimezoneOffset() {
    return new Date().getTimezoneOffset() * 60 * 1000;
  }

  _configure(...args) {
    this._args = args;
  }

  constructor(...args) {
    this._configure(...args);
    this._originDate = new Date(...args);
  }

  getDate() {
    return this._originDate.getUTCDate();
  }

  getDay() {
    return this._originDate.getUTCDay();
  }

  getFullYear() {
    return this._originDate.getUTCFullYear();
  }

  getHours() {
    return this._originDate.getUTCHours();
  }

  getMilliseconds() {
    return this._originDate.getUTCMilliseconds();
  }

  getMinutes() {
    return this._originDate.getUTCMinutes();
  }

  getMonth() {
    return this._originDate.getUTCMonth();
  }

  getSeconds() {
    return this._originDate.getUTCSeconds();
  }

  getTime() {
    return DateUTC.now();
  }

  toString() {
    return this._originDate.toUTCString();
  }

}
