import { PaletteColorOptions } from "@mui/material";
import { NextComponentType, NextPageContext } from "next";
import { ReactElement, ReactNode } from "react";

declare module "*.mp3";
declare module "*.wav";
declare module "next" {
  export declare type NextPage<P = unknown, IP = P> = NextComponentType<NextPageContext, IP, P> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral?: Neutral;
    black?: PaletteColorOptions;
    pink?: PaletteColorOptions;
  }

  interface PaletteOptions {
    neutral?: Neutral;
    black?: PaletteColorOptions;
    pink?: PaletteColorOptions;
  }
}

declare module "@mui/material/Pagination" {
  interface PaginationPropsColorOverrides {
    info: unknown;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: unknown;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    black: unknown;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    pink: unknown;
  }
}
