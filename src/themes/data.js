import {
  DefaultTheme as Default,
  DarkTheme as Dark,
} from '@react-navigation/native'
import colors from './colors'

export const ColorScheme = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const LightTheme = {
  ...Default,
  colors: colors(ColorScheme)[ColorScheme.LIGHT],
}

export const DarkTheme = {
  ...Dark,
  colors: colors(ColorScheme)[ColorScheme.DARK],
}
