import {
  DefaultTheme as Default,
  DarkTheme as Dark,
} from '@react-navigation/native'
import colors from './colors'
import sizes from './sizes'

const generalData = {
  sizes,
}

export const ColorScheme = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const LightTheme = {
  ...Default,
  ...generalData,
  colors: colors(ColorScheme)[ColorScheme.LIGHT],
}

export const DarkTheme = {
  ...Dark,
  ...generalData,
  colors: colors(ColorScheme)[ColorScheme.DARK],
}
