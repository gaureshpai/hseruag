declare module "*.css" {
  interface CSSModule {
    [className: string]: string;
  }
  const cssModule: CSSModule;
  export default cssModule;
}

declare global {
  interface Window {
    posthog?: {
      __loaded?: boolean;
      [key: string]: unknown;
    };
  }
}

export {};
