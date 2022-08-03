const path = require('path');

const prettierCommand = 'prettier --write';
const stylelintCommand = 'stylelint --fix';

/* const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`; */

module.exports = {
  '*.{js,jsx,ts,tsx}': [, /* buildEslintCommand */ prettierCommand],
  '*.css': [stylelintCommand],
};
