import React from 'react';
import { Subscribe } from 'unstated';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var connect = (function (_containers) {
  return function (Component) {
    return function (props) {
      return React.createElement(
        Subscribe,
        { to: _containers },
        function () {
          for (var _len = arguments.length, containers = Array(_len), _key = 0; _key < _len; _key++) {
            containers[_key] = arguments[_key];
          }

          // Transform the array into an object (the name of the classes will be the keys)
          var mapContainers = containers.reduce(function (acc, cur) {
            return acc[cur.constructor.name] = cur, acc;
          }, {});

          return React.createElement(Component, _extends({}, props, { containers: mapContainers }));
        }
      );
    };
  };
});

// [].reduce polyfill
if (!Array.prototype.reduce) Array.prototype.reduce = function (d) {
  if (null == this) throw new TypeError("Array.prototype.reduce called is null (null) or undefined (undefined)");if ("function" !== typeof d) throw new TypeError(d + " is not a function");var b = Object(this),
      e = b.length >>> 0,
      a = 0;if (2 == arguments.length) var c = arguments[1];else {
    for (; a < e && !(a in b);) {
      a++;
    }if (a >= e) throw new TypeError("Reduce has an empty array without an initial value");c = b[a++];
  }for (; a < e; a++) {
    a in b && (c = d(c, b[a], a, b));
  }return c;
};

export default connect;
