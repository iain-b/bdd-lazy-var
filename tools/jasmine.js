const JasmineCli = require('jasmine');

const jasmine = new JasmineCli();
const helpers = [
  '../spec/config',
  '../spec/default_suite_tracking_examples',
  '../spec/interface_examples',
  `../${process.argv[2]}`
];

helpers.forEach(require);
jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: process.argv.slice(3),
});

jasmine.execute();
