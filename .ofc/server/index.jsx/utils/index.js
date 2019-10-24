'use strict';

var styledComponents_cjs = require('../node_modules/styled-components/dist/styled-components.cjs.js');
var ge = require('./ge.js');

var B = styledComponents_cjs.default.div`
  color: ${ge.default};
`;

exports.default = B;
