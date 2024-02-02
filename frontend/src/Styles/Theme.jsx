import { createTheme } from '@mui/material/styles';

export const Palette = createTheme({
  primary: {
    main: '#efb810',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#bbbbbb',
    contrastText: '#ffffff',
  },
  tertiary: { 
    main: "#5271ff",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#ff9800",
    contrast: "#ffffff",
  },
  success: {
    main: "#4caf50",
    contrastText: "#ffffff",
  },
  error: {
    main: "#f44336",
    contrastText: "#ffffff",
  },
  lightMode: {
    main: "#ffffff",
    contrastText: "#000000",
  },
  darkMode: {
    main: "#000000",
    contrastText: "#ffffff",
  },
});

export const Breakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    /* values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    }, */
  },
});
