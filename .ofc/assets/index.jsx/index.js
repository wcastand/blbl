import React from './node_modules/react/index.js';
import __ofc_ReactDOM from './node_modules/react-dom/index.js';
import B from './utils/index.js';

if ("development" !== 'production') {
  var es = new EventSource("/_ofc_sse?w=index.jsx");
  es.addEventListener('WRITE_END', message => {
    window.location.reload();
  });
}

var __ofc = App => {
  __ofc_ReactDOM.hydrate(React.createElement(App, window._ofc_props), document.getElementById('_ofc_app'));
};

var __HANDLER = () => {
  return React.createElement("div", null, React.createElement(B, null, "hello"));
};

__ofc(__HANDLER);
//# sourceMappingURL=index.js.map
