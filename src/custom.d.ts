declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  // eslint-disable-next-line import/no-default-export
  export default FC<SVGProps<SVGSVGElement>>;
}

interface Window {
  dataLayer: object[];
  prevLocation: Location | null;
}
