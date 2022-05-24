import { ThemeOptions } from "@mui/material";

export const zIndex = {
  assistant: 9,
  modal: 99,
  cart: 999,
  welcome: 9999,
};

const background = {
  default: "#f0f1f2",
  paper: "#FFFFFF",
  gray: "#666666",
  lightGray: "#C4C4C4",
  transparent: "transparent",
  almostTransparent: {
    100: "rgba(0, 0, 0, 0.01)",
    200: "rgba(0,0,0,0.05)",
  },
};

const primary = {
  main: "#007AFF",
  light: "#7ABAFF",
  dark: "#005FC7",
  contrastText: "#FFFFFF",
};

const secondary = {
  main: "#DDDDDD",
  light: "#EEEEEE",
  dark: "#CCCCCC",
  contrastText: "#333333",
};

const success = {
  main: "#04D8BB",
  light: "#83FDEC",
  dark: "#03A18B",
  contrastText: "#ffffff",
};

const info = {
  main: "#1a76d2",
  light: "#8cbbe9",
  dark: "#135ea8",
  contrastText: "#ffffff",
};

const warning = {
  main: "#F3A712",
  light: "#f6c76b",
  dark: "#926f2a",
  contrastText: "#ffffff",
};

const error = {
  main: "#db3030",
  light: "#e66e6d",
  dark: "#831d1c",
  contrastText: "#ffffff",
};

const black = {
  main: "#505B67",
  light: "#B2B8C0",
  dark: "#1e2227",
  contrastText: "#FFFFFF",
};

const pink = {
  main: "#F149A4",
  light: "#F149A4",
  dark: "#F149A4",
  contrastText: "#FFFFFF",
};

const text = {
  primary: "#333333",
  secondary: "#858585",
  third: "#8C8C8C",
  fourth: "#DDDDDD",
  black: "#000000",
  disabled: "rgba(55, 65, 81, 0.48)",
};

export const theme: ThemeOptions = {
  typography: {
    fontFamily: "KuriousSet, sans-serif",
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 22,
    },
    h3: {
      fontSize: 20,
    },
    h4: {
      fontSize: 18,
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 16,
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 10,
    },
  },
  spacing: 4,
  palette: {
    background,
    error,
    info,
    primary,
    secondary,
    success,
    text,
    warning,
    black,
    pink,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: "40px",
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
        contained: {
          border: "2px solid #FFFFFF",
          boxShadow: "0px 6px 11px 0px #007AFF40",
        },
        sizeLarge: {
          fontSize: 16,
          padding: "11px 24px",
        },
        sizeMedium: {
          fontSize: 16,
          padding: "6px 24px",
        },
        sizeSmall: {
          fontSize: 16,
          padding: "4px 10px 3px",
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          transform: "translate(0px, 0px) scale(1)",
          position: "static",
          marginBottom: 8,
          background: "transparent",
        },
        asterisk: {
          float: "left",
          color: error.main,
          "&$error": {
            color: error.main,
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {},
      styleOverrides: {
        root: {
          "& legend": {
            display: "none",
          },
          background: "#ffffff",
        },
        notchedOutline: {
          top: 0,
        },
        input: {
          padding: "9px 28px 8px 12px",
        },
        inputSizeSmall: {
          padding: "5px 28px 4px 12px",
        },
      },
    },
    // MuiInputBase: {
    //   styleOverrides: {
    //     inputSizeSmall: {
    //       padding: 0,
    //       // padding: "2px 10px",
    //     },
    //   },
    // },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          "& legend": {
            display: "none",
          },
        },
        input: {
          padding: "9px 28px 8px 12px",
        },
        inputSizeSmall: {
          padding: "5px 28px 4px 12px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#ffffff",
          boxShadow: "none",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          padding: "0 24px",
        },
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: "#E0E3E6",
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        color: "info",
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        outlined: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 0,
          padding: "16px 24px",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 7,
        },
        switchBase: {
          "&.Mui-checked+.MuiSwitch-track": {
            opacity: 1,
          },
        },
        track: {
          borderRadius: 12,
        },
        thumb: {
          color: "#ffffff",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: "16px",
          height: "22px",
          minWidth: "22px",
        },
      },
    },
  },
};
