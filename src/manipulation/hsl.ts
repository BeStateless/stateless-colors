import { RGBColorObject, HSLColorObject, colorFormat } from '../interfaces';
import { rgbToObject, rgb } from './rgb';
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
  return `hsl(${h}, ${s}%, ${l}%)`;
};

export const rgbObjectToHslObject = (rgb:RGBColorObject):any => {
  const hsl = rgbToHsl(rgb.r, rgb.b, rgb.b);
  return {
    h: hsl[0],
    s: hsl[1],
    l: hsl[2],
    a: rgb.a || 1
  };
};

/* TODO: Fix temporary workaround */
export const hslToObject = (hsl:string):HSLColorObject => {
  const hslArray:string[] = hsl.split(',').map((item, index) => {
    return item.replace(/[a-z()%]/gi, '');
  });
  return {
    h: parseInt(hslArray[0]),
    s: parseInt(hslArray[1]),
    l: parseInt(hslArray[2]),
    a: parseFloat(hslArray[3]) || 1
  };
};

export const hexToHSLObject = (hex:string):HSLColorObject => {
  return rgbToHslObject(rgb(hex));
};

export const rgbToHslObject = (rgbString:string):HSLColorObject => {
  return rgbObjectToHslObject(rgbToObject(rgbString));
};


export const hslObjectToString = (hsl:HSLColorObject):string => {
  return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${hsl.a || 1})`;
};

export const toHSL = (color:string, objectOrString: Object | string  = 'object') => {
  const format = determineColorFormat(color);
  if (objectOrString === 'object') {
    switch (format) {
      case 'hex':
        break;
      case 'rgb':
        break;
      case 'hsl':
        return color;
    }
  }
  if (objectOrString === 'string') {
    switch (format) {
      case 'hex':
        break;
      case 'rgb':
        break;
      case 'hsl':
        break;
    }
  }
};
