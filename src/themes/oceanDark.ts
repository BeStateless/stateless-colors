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
  purple: '#4f3179'
};

const theme = {
  dashboardBackground: lighten(rgbToHslObject(palette.navyBlue), 0.1),
  dashboardText: Color(palette.white).color,
  headerBackground: Color(palette.navyBlue).color,
  headerText: Color(palette.white).color,
  menuBackground: Color(palette.purple).color,
  menuText: Color(palette.white).color,
  logoFill: Color(palette.neonGreen).color,
  containerBackground: Color(palette.navyBlue).lighten(0.03).color,
};

export const oceanDark = { ...metadata, ...palette, ...theme };
