import React from "react";
import { Subscribe } from "unstated";

export default _containers => component => props => (
  <Subscribe to={_containers}>
    {(...containers) => React.createElement(component, {...props, containers})
    }
  </Subscribe>
);
