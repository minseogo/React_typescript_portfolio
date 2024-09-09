declare module 'react-typed' {
    import { ComponentType } from 'react';
  
    interface ReactTypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      backDelay?: number;
      loop?: boolean;
    }
  
    export const ReactTyped: ComponentType<ReactTypedProps>;
    export const Typed: ComponentType<ReactTypedProps>;
  }