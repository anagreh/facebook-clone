import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: {
        primary: string;
        secondary: string;
      };
      bg: {
        default: string;
        hover: string;
        tag: string;
        icon: string;
        primary: string;
      };
      icon: {
        default: string;
      };
    };
  }
}
