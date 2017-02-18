import { Color } from '../color';
import { rgbToHsl, rgbToHslObject } from '../manipulation/hsl';
import { lighten } from '../manipulation/lighten';

const metadata = {
  info: 'Ocean Dark is a terrible name for a theme',
  brightness: 'dark'
};

const palette = {
  navyBlue: '#1c1c2c',
  neonGreen: '#00e7b4',
  white: '#fff',
  lightGray: '#eee',
  black: '#000',
  darkGray: '#222',
};

const theme = {
  dashboardBackground: lighten(rgbToHslObject(palette.navyBlue), 10),

  headerBackground: palette.navyBlue,
  headerText: palette.lightGray,
};

export const oceanDark = { ...palette, ...theme };
