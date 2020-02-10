import "styled-components";

interface ISize {
  s12: string;
  s11: string;
  s10: string;
  s9: string;
  s8: string;
  s7: string;
  s6: string;
  s5: string;
  s4: string;
  s3: string;
  s2: string;
  s1: string;
  main: string;
  l1: string;
  l2: string;
  l3: string;
  l4: string;
  l5: string;
  xl1: string;
  xl2: string;
  xl3: string;
  xl4: string;
  xl5: string;
  xl6: string;
}

declare module "styled-components" {
  export type ThemeName = "main" | "special";
  export interface DefaultTheme {
    ownColorTheme: string; // use for choosing theme button
    borderRadius: {
      main: string;
      button: string;
      box: string;
      card: string;
    };
    sizes: {
      font: ISize;
      spacing: ISize;
    };
    colors: {
      link: {
        main: string;
        hover: string;
      };
      font: {
        main: string;
        secound: string;
        third: string;
        light: string;
        danger: string;
      };
      background: {
        main: string;
        firstGradient: string;
        appBar: string;
        contentLayout: string;
        footer: string;
        sideBar: string;
        hoverLight: string;
        box: string;
      };
      border: {
        main: string;
        secound: string;
        third: string;
        fourth: string;
        danger: string;
        card: string;
      };
      button: {
        gradientBackgroud: string;
        secoundGradientBackground: string;
        hoverBackground: string;
        danger: string;
      };
    };
    textShadow: {
      thin: string;
    };
  }
}
