import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

let env = process.env['ENV'];

if (env === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
