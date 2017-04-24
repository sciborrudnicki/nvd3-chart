export default {
  entry: 'dist/index.js',
  dest: 'dist/bundle.umd.js',
  format: 'umd',
  moduleName: 'ng.nvd3Chart',
  onwarn,
  globals: {
    '@angular/core': 'ng.core'
  }
};

function onwarn(message) {
  const suppressed = [
    'UNRESOLVED_IMPORT',
    'THIS_IS_UNDEFINED'
  ];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
