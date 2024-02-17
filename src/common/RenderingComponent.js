import React from "react";
import { Components } from "../constants/RouteConstants";

export default (component) => {
  if (typeof Components[component] !== "undefined") {
    return React.createElement(Components[component], {
      key: component?._uid,
      block: component,
    });
  }
  return React.createElement(
    () => <div>The component {component} has not been created yet.</div>,
    { key: component._uid }
  );
};
