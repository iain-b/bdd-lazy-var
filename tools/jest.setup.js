const uiFile = process.argv.slice(0).pop();

require('../spec/config');
require('../spec/interface_examples');
require('../spec/default_suite_tracking_examples');
require(`../${uiFile}`);
