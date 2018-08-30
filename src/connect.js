import React from "react";
import { Subscribe } from "unstated";

export default _containers => Component => props => (
  <Subscribe to={_containers}>
    {(...containers) => <Component {...props} containers={containers} />}
  </Subscribe>
);
