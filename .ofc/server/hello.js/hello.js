'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Url = _interopDefault(require('url'));
var index = require('./node_modules/node-fetch/lib/index.mjs.js');
var path = require('path');
var index$1 = require('./utils/index.js');

const __ofc_fetch = (u, ...rest) => {
  const parsed = Url.parse(u);

  if (!parsed.protocol && !parsed.hostname) {
    return index.default('http://' + path.join('0.0.0.0:3000', u), ...rest);
  }

  return index.default(u, ...rest);
};
var hello = (ctx => {
  ctx.body = `Hello ${index$1.default}`;
});

module.exports = hello;
