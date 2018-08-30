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

          return React.createElement(Component, _extends({}, props, { containers: containers }));
        }
      );
    };
  };
});

export default connect;
