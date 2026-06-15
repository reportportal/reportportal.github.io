/* eslint-disable @typescript-eslint/no-var-requires */

// Generates static antd CSS for SSR/initial paint into static/antd.min.css.
//
// We use a WHITELIST of components actually imported in src/ to keep the file
// small. Without a whitelist `extractStyle()` renders every antd component and
// the resulting file is ~1 MB. With whitelist it shrinks dramatically.
//
// Drawer, Modal, Tooltip, ConfigProvider are intentionally NOT listed here —
// they live in @ant-design/static-style-extract's internal blackList because
// they are portal-based / runtime-only. Their styles are still generated at
// runtime via @ant-design/cssinjs (StyleProvider in Layout.tsx).
//
// HOW TO UPDATE
// If you import a new antd component in src/, add it to USED_COMPONENTS below
// and re-run `npm run prestart` / build. Forgetting to add it = un-styled
// component on first paint.

const fs = require('fs');
const React = require('react');
const antd = require('antd');
const { extractStyle } = require('@ant-design/static-style-extract');

const outputPath = './static/antd.min.css';

// Components actually used across the app (grep "from 'antd'" in src).
const USED_COMPONENTS = [
  'Button',
  'Carousel',
  'Collapse',
  'Divider',
  'Form',
  'Input',
  'Select',
  'Steps',
  'Tabs',
  'Tag',
  'Typography',
];

// Some antd components throw without minimal props — render them via a custom
// factory. Anything not listed here is rendered as <Comp />.
const customRender = {
  Steps: Comp => React.createElement(Comp, { items: [] }),
  Tabs: Comp => React.createElement(Comp, { items: [] }),
  Carousel: Comp =>
    React.createElement(Comp, null, React.createElement('div', { key: 'slide' })),
};

const renderUsedComponents = () =>
  React.createElement(
    React.Fragment,
    null,
    USED_COMPONENTS.map(name => {
      const Comp = antd[name];
      if (!Comp) {
        // eslint-disable-next-line no-console
        console.warn(`[gen-antd-css] antd has no export "${name}" — skipping`);
        return null;
      }
      const factory = customRender[name];
      return React.createElement(
        React.Fragment,
        { key: name },
        factory ? factory(Comp) : React.createElement(Comp),
      );
    }),
  );

const css = extractStyle(() => renderUsedComponents());

fs.writeFileSync(outputPath, css);
// eslint-disable-next-line no-console
console.log(
  `[gen-antd-css] wrote ${outputPath} (${(css.length / 1024).toFixed(1)} KB, ${USED_COMPONENTS.length} components)`,
);
