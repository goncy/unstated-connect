(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('unstated')) :
  typeof define === 'function' && define.amd ? define(['react', 'unstated'], factory) :
  (global['unstated-connect'] = factory(global.React,null));
}(this, (function (React,unstated) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var connect = (function (_containers) {
    return function (Component) {
      return function (props) {
        return React.createElement(
          unstated.Subscribe,
          { to: _containers },
          function () {
            for (var _len = arguments.length, containers = Array(_len), _key = 0; _key < _len; _key++) {
              containers[_key] = arguments[_key];
            }

            return React.createElement(Component, _extends({ containers: containers }, props));
          }
        );
      };
    };
  });

  return connect;

})));
