/// <reference types="react" />

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> { }
  }
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
} 