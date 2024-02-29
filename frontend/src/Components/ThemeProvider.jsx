import { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Palette, Breakpoints } from '../Styles/Theme';

// Contexto para el tema
const ThemeContext = createContext();

// Hook para acceder al contexto del tema
export const useThemeContext = () => useContext(ThemeContext);

const lightTheme = createTheme({
  breakpoints: Breakpoints,
  palette: {
    primary: Palette.lightMode,
    mode: 'light',
    background: {
      paper: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  breakpoints: Breakpoints,
  palette: {
    primary: Palette.darkMode,
    mode: 'dark',
    background: {
      paper: '#000000',
    },
  },
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode) ;

  const theme = darkMode ? darkTheme : lightTheme;

  useEffect (() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.add('dark-mode');
    }

    return () => {
      document.body.classList.remove('dark-mode');
      document.body.classList.remove('light-mode');
    };

  }, [darkMode]);

  // Proporciona el tema y función de alternar por medio del contexto
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
