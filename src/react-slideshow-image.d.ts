// react-slideshow-image v3 ships no types; only what this app uses
declare module 'react-slideshow-image' {
  import { ComponentType, ReactNode } from 'react';

  export const Fade: ComponentType<{
    children?: ReactNode;
    autoplay?: boolean;
    duration?: number;
    arrows?: boolean;
    pauseOnHover?: boolean;
  }>;
}
