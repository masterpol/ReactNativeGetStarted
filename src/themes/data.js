import { DefaultTheme as Default, DarkTheme as Dark } from '@react-navigation/native';

const ColorScheme = {
  LIGHT: 'light',
  DARK: 'dark',
};

const LightTheme = {
  ...Default,
};

const DarkTheme = {
  ...Dark,
};

export { ColorScheme, LightTheme, DarkTheme };