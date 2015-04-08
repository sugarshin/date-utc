(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dateUtc = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var _bind = Function.prototype.bind;

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*!
 * @license date-utc
 * (c) sugarshin
 * License: MIT
 */

var DateUTC = (function () {
  function DateUTC() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, DateUTC);

    this._originDate = new (_bind.apply(Date, [null].concat(args)))();
  }

  _createClass(DateUTC, [{
    key: "_getTimezoneOffset",
    value: function _getTimezoneOffset() {
      return new Date().getTimezoneOffset() * 60 * 1000;
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return this._originDate.getUTCDate();
    }
  }, {
    key: "getDay",
    value: function getDay() {
      return this._originDate.getUTCDay();
    }
  }, {
    key: "getFullYear",
    value: function getFullYear() {
      return this._originDate.getUTCFullYear();
    }
  }, {
    key: "getHours",
    value: function getHours() {
      return this._originDate.getUTCHours();
    }
  }, {
    key: "getMilliseconds",
    value: function getMilliseconds() {
      return this._originDate.getUTCMilliseconds();
    }
  }, {
    key: "getMinutes",
    value: function getMinutes() {
      return this._originDate.getUTCMinutes();
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      return this._originDate.getUTCMonth();
    }
  }, {
    key: "getSeconds",
    value: function getSeconds() {
      return this._originDate.getUTCSeconds();
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return DateUTC.now();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this._originDate.toUTCString();
    }
  }], [{
    key: "now",
    value: function now() {
      var d = new Date();
      return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
    }
  }, {
    key: "parse",
    value: function parse(dateString) {
      return Date.parse(dateString) + this.prototype._getOffsetTime();
    }
  }]);

  return DateUTC;
})();

exports["default"] = DateUTC;
module.exports = exports["default"];

},{}]},{},[1])(1)
});
