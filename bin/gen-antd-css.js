const fs = require('fs');

const { extractStyle } = require('@ant-design/static-style-extract');

const outputPath = './static/antd.min.css';

const css = extractStyle();

fs.writeFileSync(outputPath, css);
