import React from "react";
import {Subscribe} from "unstated";

export default _containers => component =>
  function Connect(props) {
    return (
      <Subscribe to={_containers}>
        {(...containers) =>
          React.createElement(component, {containers, ...props})
        }
      </Subscribe>
    );
  };
