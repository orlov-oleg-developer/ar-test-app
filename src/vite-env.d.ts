/// <reference types="vite/client" />

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type ModelViewerElement = DetailedHTMLProps<
  HTMLAttributes<HTMLElement> & {
    src?: string;
    'ios-src'?: string;
    ar?: boolean;
    'ar-modes'?: string;
    'camera-controls'?: boolean;
    'auto-rotate'?: boolean;
    'shadow-intensity'?: string;
    alt?: string;
  },
  HTMLElement
>;

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerElement;
    }
  }
}
