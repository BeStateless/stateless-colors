import { RGBColorObject, HSLColorObject, colorFormat } from '../interfaces';
import { rgbToObject, rgb } from './rgb';
import { determineColorFormat } from './determineColor';

export const rgbToHsl = (r, g, b, returnArray:boolean) => {
  r /= 255, g /= 255, b /= 255;
   let max = Math.max(r, g, b), min = Math.min(r, g, b);
   let h, s, l = (max + min) / 2;

   if (max === min) {
       h = s = 0;
   } else {
       let d = max - min;
       s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
       switch (max) {
           case r: h = (g - b) / d + (g < b ? 6 : 0); break;
           case g: h = (b - r) / d + 2; break;
           case b: h = (r - g) / d + 4; break;
       }
       h /= 6;
   }
   h = Math.floor(h * 360);
   s = Math.floor(s * 100);
   l = Math.floor(l * 100);
  if (returnArray)
    return [h, s, l];
  else
    return `hsl(${h}, ${s}%, ${l}%)`;
};

export const rgbObjectToHslObject = (rgb:RGBColorObject):any => {
  let hsl = rgbToHsl(rgb.r, rgb.b, rgb.b, true);
  console.log(hsl);
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



export const toHSL = (color:string, objectOrString: 'object' | 'string'  = 'object'):HSLColorObject | string => {
  const format = determineColorFormat(color);
  if (objectOrString === 'object') {
    switch (format) {
      case 'hex':
        return hexToHSLObject(color);
      case 'rgb':
        return rgbToHslObject(color);
      case 'hsl':
        return color;
    }
  }
  if (objectOrString === 'string') {
    switch (format) {
      case 'hex':
        return hslObjectToString(hexToHSLObject(color));
      case 'rgb':
        return hslObjectToString(rgbToHslObject(color));
      case 'hsl':
        return color;
    }
  }
};
