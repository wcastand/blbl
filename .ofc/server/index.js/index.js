'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Url = _interopDefault(require('url'));
var index$1 = require('./node_modules/node-fetch/lib/index.mjs.js');
var path = require('path');
var index$2 = require('./utils/index.js');

const __ofc_fetch = (u, ...rest) => {
  const parsed = Url.parse(u);

  if (!parsed.protocol && !parsed.hostname) {
    return index$1.default('http://' + path.join('0.0.0.0:3000', u), ...rest);
  }

  return index$1.default(u, ...rest);
};
var index = (ctx => {
  ctx.body = `Hello wolrd ${index$2.default}`;
});

module.exports = index;
