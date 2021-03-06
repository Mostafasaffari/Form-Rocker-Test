import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  ownColorTheme: "blue",
  borderRadius: {
    main: "5px",
    box: "8px",
    button: "4px",
    card: "8px"
  },
  sizes: {
    font: {
      s12: "0.076923rem", //1px
      s11: "0.153846rem", //2px
      s10: "0.2307692rem", //3px
      s9: "0.3076923rem", //4px
      s8: "0.384615rem", //5px
      s7: "0.461538rem", //6px
      s6: "0.538462rem", //7px
      s5: "0.615385rem", //8px
      s4: "0.692308rem", //9px
      s3: "0.76923rem", //10px
      s2: "0.846154rem", //11px
      s1: "0.923077rem", //12px
      main: "1rem", //13px
      l1: "1.076923rem", //14px
      l2: "1.153846rem", //15px
      l3: "1.23077rem", //16px
      l4: "1.307692rem", //17px
      l5: "1.384615rem", //18px
      xl1: "1.53846rem", //20px
      xl2: "1.692308rem", //22px
      xl3: "1.846154rem", //24px
      xl4: "2rem", //26px
      xl5: "2.153846rem", //28px
      xl6: "2.307692rem" //30px
    },
    spacing: {
      s12: "0.076923rem", //1px
      s11: "0.153846rem", //2px
      s10: "0.2307692rem", //3px
      s9: "0.3076923rem", //4px
      s8: "0.384615rem", //5px
      s7: "0.461538rem", //6px
      s6: "0.538462rem", //7px
      s5: "0.615385rem", //8px
      s4: "0.692308rem", //9px
      s3: "0.76923rem", //10px
      s2: "0.846154rem", //11px
      s1: "0.923077rem", //12px
      main: "1rem", //13px
      l1: "1.076923rem", //14px
      l2: "1.153846rem", //15px
      l3: "1.23077rem", //16px
      l4: "1.307692rem", //17px
      l5: "1.384615rem", //18px
      xl1: "1.53846rem", //20px
      xl2: "1.692308rem", //22px
      xl3: "1.846154rem", //24px
      xl4: "2rem", //26px
      xl5: "2.153846rem", //28px
      xl6: "2.307692rem" //30px
    }
  },
  colors: {
    link: {
      main: "#1890ff",
      hover: "#40a9ff"
    },
    background: {
      main: "#fafafa",
      firstGradient: "linear-gradient(to right, #fe5193, #f77062)",
      appBar: "#fefefe",
      contentLayout: "#fefefe",
      footer: "#fefefe",
      sideBar: "#ff0000",
      hoverLight: "rgba(255, 0, 0, 0.2)",
      box: "#fffff"
    },
    border: {
      main: "#f77062",
      secound: "#04f0c5",
      third: "#51fff3",
      fourth: "#00d4ff",
      danger: "tomato",
      card: "#e8e8e8"
    },
    font: {
      main: "#ff0000",
      secound: "#0000ff",
      third: "#00d4ff",
      light: "#ffffff",
      danger: "tomato"
    },
    button: {
      gradientBackgroud:
        "linear-gradient(107.24deg, #04f0c5 0%, #00dda2 99.85%)",
      secoundGradientBackground:
        "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(81, 255, 243, 1) 0%, rgba(45, 210, 255, 1) 100%, rgba(0, 212, 255, 0.7777485994397759) 100%)",
      hoverBackground: "#fefefe",
      danger: "tomato"
    }
  },

  textShadow: {
    thin: "1px 1px 5px #0a28ff87"
  }
};

export default theme;
