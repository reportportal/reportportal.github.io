declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  // eslint-disable-next-line import/no-default-export
  export default FC<SVGProps<SVGSVGElement>>;
}

interface Window {
  dataLayer: object[];
  prevLocation: Location | null;
}

declare module 'react-scroll' {
  import { ComponentType } from 'react';

  // https://github.com/fisshy/react-scroll/issues/566
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Link: ComponentType<any>;
}
