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
      font: {
        primary: string;
        secondary: string;
      };
      logo: {
        primary: string;
        LightBlue: string;
        Blue: string;
      };
    };
  }
}
