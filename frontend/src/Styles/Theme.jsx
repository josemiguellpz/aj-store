import { createTheme } from "@mui/material/styles";
import ThemePalette from './ThemePalette';

const Theme = createTheme({
  palette: ThemePalette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default Theme;