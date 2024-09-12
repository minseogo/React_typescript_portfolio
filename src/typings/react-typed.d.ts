declare module 'react-typed' {
    import * as React from 'react';
  
    interface ReactTypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      [key: string]: any; // 다른 props에 대한 타입을 허용합니다.
    }
  
    class ReactTyped extends React.Component<ReactTypedProps> {}
  
    export default ReactTyped;
  }
  