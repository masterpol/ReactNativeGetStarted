import React from 'react'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from '@emotion/react'
import { ColorScheme, DarkTheme, LightTheme } from '_themes/data'

const Theme = ({ children }) => {
  const scheme = useColorScheme()

  return (
    <ThemeProvider theme={scheme === ColorScheme.DARK ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
