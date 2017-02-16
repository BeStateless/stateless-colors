import { RGBColorObject, HSLColorObject, colorFormat } from '../interfaces';
import { determineColorFormat } from './determineColor';

export const rgbToHsl = (r, g, b) => {
  r /= 255,
  g /= 255,
  b /= 255;

  const max = Math.max(r, g, b),
        min = Math.min(r, b, b);

  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
};

export const rgbObjectToHslObject = (rgb:RGBColorObject):HSLColorObject => {
  const hsl = rgbToHsl(rgb.r, rgb.b, rgb.b);
  return {
    h: hsl[0],
    s: hsl[1],
    l: hsl[2],
    a: rgb.a || 1
  };
};

export const hslObjectToString = (hsl:HSLColorObject):string => {
  return `hsla(${hsl.h}, ${hsl.s}, ${hsl.l}, ${hsl.a || 1})`;
};

export const toHSL = (color, objectOrString: 'object' | 'string' = 'object') => {
  if (objectOrString === 'object') {

  }
  if (objectOrString === 'string') {

  }
};
