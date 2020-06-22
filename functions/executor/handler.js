'use strict';
const execSync = require('child_process').execSync;

module.exports.handler = async (event, context) => {
  console.time('lambda-ci');
  execSync('rm -rf /tmp/*')
  execSync('cd /tmp && git clone https://github.com/Ankcorn/react-bowling-kata.git');
  console.log('done')
  execSync('cd /tmp/react-bowling-kata && npm install --force');
  execSync('cd /tmp/react-bowling-kata && npm run build');
  console.timeEnd('lambda-ci');
  return 'successful invocation';
};
