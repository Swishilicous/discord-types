const fs = require('fs');
const { join } = require('path');

const path = join(__dirname, '../lib/constants.d.ts');

let file = fs.readFileSync(path, 'utf8', console.error);

file = file.trim().split('\n');

file[2] = 'export const constants: {';
file[file.length - 1] = '}\n\nexport default constants;';

file = file.join('\n');

fs.writeFileSync(path, file, console.error);