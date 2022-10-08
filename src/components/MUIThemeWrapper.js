import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import {createTheme, ThemeProvider} from "@mui/material";

// Make MUI components respects docusaurus's colour mode
export default function MUIThemeWrapper({children}) {
  const { isDarkTheme } = useColorMode();

  const darkTheme = createTheme({
    palette: {
      mode: isDarkTheme?'dark':'light',
    }
  })

  return (
        <ThemeProvider theme={darkTheme}>
        {children}
        </ThemeProvider>

  );
};