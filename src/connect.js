import React from "react";
import { Subscribe } from "unstated";

export default function function HOC(_containers) {
  return (WrappedComponent) => {
    const NewComponent = (props) => (
      <Subscribe to={_containers}>
        {(...containers) => {
          // Transform the array into an object (the name of the classes will be the keys)
          let mapContainers = containers.reduce((acc, cur) => (acc[cur.constructor.name] = cur, acc), {})

          return <WrappedComponent {...props} containers={mapContainers} />
        }}
      </Subscribe>
    );
    
    // If it is a NextJS page component, run getInitialProps function
    if (typeof WrappedComponent.getInitialProps !== 'undefined') {
      NewComponent.getInitialProps = async (args) => {
        return await WrappedComponent.getInitialProps(args);
      }
    }
    
    return NewComponent
  }
}

// [].reduce polyfill
if (!Array.prototype.reduce) Array.prototype.reduce=function(d){if(null==this)throw new TypeError("Array.prototype.reduce called is null (null) or undefined (undefined)");if("function"!==typeof d)throw new TypeError(d+" is not a function");var b=Object(this),e=b.length>>>0,a=0;if(2==arguments.length)var c=arguments[1];else{for(;a<e&&!(a in b);)a++;if(a>=e)throw new TypeError("Reduce has an empty array without an initial value");c=b[a++]}for(;a<e;a++)a in b&&(c=d(c,b[a],a,b));return c};
