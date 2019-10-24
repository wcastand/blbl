'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$2 = require('./node_modules/react/index.js');
var server = require('./node_modules/react-dom/server.js');
var styledComponents_cjs = require('./node_modules/styled-components/dist/styled-components.cjs.js');
var url = _interopDefault(require('url'));
var index$1 = require('./node_modules/node-fetch/lib/index.js');
var path = require('path');
var index$3 = require('./utils/index.js');

const __ofc = (app, getInitialProps) => async ctx => {
  const App = index$2.default.createFactory(app);

  const props = getInitialProps ? await getInitialProps(ctx) : {};
  const sheet = new styledComponents_cjs.ServerStyleSheet();

  const html = server.default.renderToString(sheet.collectStyles(App(props)));

  ctx.type = '.html';
  ctx.body = `
    <!doctype html>
    <html>
      <head>
        <title>React App</title>
        ${sheet.getStyleTags()}
      </head>
      <body>
        <div id="_ofc_app">${html}</div>
        <script>
          window._ofc_props = ${JSON.stringify(props)}
        </script>
        <script src="/assets/index.jsx/index.js" type="module"></script>
      </body>
    </html>
  `;
};

const __ofc_fetch = (u, ...rest) => {
  const parsed = url.parse(u);

  if (!parsed.protocol && !parsed.hostname) {
    return index$1.default('http://' + path.join('0.0.0.0:3000', u), ...rest);
  }

  return index$1.default(u, ...rest);
};

const __HANDLER = () => {
  return index$2.default.createElement("div", null, index$2.default.createElement(index$3.default, null, "hello"));
};

var index = __ofc(__HANDLER, null);

module.exports = index;
