const general = {
  primary: '#2196f3',
  secondary: '#6ec6ff',
  blue: '#2196f3',
  red: '#f44336',
  pailRed: '#ef5350',
  black: '#333333',
  orange: '#ffa726',
  pailOrange: '#ffb74d',
  gray: '#9e9e9e',
  white: '#f5f5f5',
}

const colors = ColorScheme => ({
  [ColorScheme.DARK]: {
    background: general.black,
    ...general,
  },
  [ColorScheme.LIGHT]: {
    background: general.white,
    ...general,
  },
})

export default colors
