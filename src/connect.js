import React from "react";
import { Subscribe } from "unstated";

export default function connect(__containers) {
  return WrappedComponent => {
    // Check if __containers is an object
    let __containersIsAnObject = __containers.constructor === Object;
    if (__containersIsAnObject) {
      // Convert object into an array for unstated understand
      __containers = Object.values(__containers)
    }

    const ConnectedComponent = props => (
      <Subscribe to={__containers}>
        {(...containers) => {
          if (__containersIsAnObject) {
            // Transform the array into an object (the name of the classes will be the keys)
            containers = containers.reduce((acc, cur) => ((acc[cur.constructor.name] = cur), acc), {});
          }

          return <WrappedComponent {...props} containers={containers} />
        }}
      </Subscribe>
    );

    // If it is a NextJS page component, run getInitialProps function
    if (typeof WrappedComponent.getInitialProps !== "undefined") {
      ConnectedComponent.getInitialProps = async args => {
        return await WrappedComponent.getInitialProps(args);
      }
    }

    return ConnectedComponent;
  };
}

// [].reduce polyfill
if (!Array.prototype.reduce) Array.prototype.reduce=function(d){if(null==this)throw new TypeError("Array.prototype.reduce called is null (null) or undefined (undefined)");if("function"!==typeof d)throw new TypeError(d+" is not a function");var b=Object(this),e=b.length>>>0,a=0;if(2==arguments.length)var c=arguments[1];else{for(;a<e&&!(a in b);)a++;if(a>=e)throw new TypeError("Reduce has an empty array without an initial value");c=b[a++]}for(;a<e;a++)a in b&&(c=d(c,b[a],a,b));return c};
// Object.values({}) polyfill
if (!Object.values) Object.values=(a)=>{var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(a[b]);return c};
