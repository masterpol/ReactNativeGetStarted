import { Dimensions, PixelRatio, useWindowDimensions } from 'react-native'
import CONSTANTS from '_constants'
import { isTablet } from 'react-native-device-info'

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

/**
 * Based on iPhone 11 and iPad 9.7 Retina scales
 * @param {number} value
 * @param {string} based
 */
export function normalize(value, based = CONSTANTS.DIMENSIONS.WIDTH) {
  const heightRatio = isTablet() ? 1024 : 896
  const widthRatio = isTablet() ? 768 : 414

  if (
    based !== CONSTANTS.DIMENSIONS.HEIGHT &&
    based !== CONSTANTS.DIMENSIONS.WIDTH
  ) {
    throw new Error('Based must be "height" or "width"')
  }

  const scale =
    based === CONSTANTS.DIMENSIONS.HEIGHT
      ? screenHeight / heightRatio
      : screenWidth / widthRatio

  console.log(PixelRatio.roundToNearestPixel(value * scale))
  return PixelRatio.roundToNearestPixel(value * scale)
}

/**
 * @param {number} percentage
 */
export function heightScreenPercentageToDP(percentage) {
  if (percentage < 0 || percentage > 100) {
    throw new Error('The value must be an integer between 0 and 100')
  }

  return PixelRatio.roundToNearestPixel(screenHeight * (percentage / 100))
}

/**
 * @param {number} percentage
 */
export function useHeightPercentageToDP(percentage) {
  const { height } = useWindowDimensions()

  if (percentage < 0 || percentage > 100) {
    throw new Error('The value must be an integer between 0 and 100')
  }

  return PixelRatio.roundToNearestPixel(height * (percentage / 100))
}

/**
 * @param {number} percentage
 */
export function widthScreenPercentageToDP(percentage) {
  if (percentage < 0 || percentage > 100) {
    throw new Error('The value must be an integer between 0 and 100')
  }

  return PixelRatio.roundToNearestPixel(screenWidth * (percentage / 100))
}

/**
 * @param {number} percentage
 */
export function useWidthPercentageToDP(percentage) {
  const { width } = useWindowDimensions()

  if (percentage < 0 || percentage > 100) {
    throw new Error('The value must be an integer between 0 and 100')
  }

  return PixelRatio.roundToNearestPixel(width * (percentage / 100))
}
