import { hexToR, hexToG, hexToB } from './hex';
import { RGBColorObject } from '../interfaces';

export const rgb = (hex:string):string => `rgb(${hexToR(hex)}, ${hexToG(hex)}, ${hexToB(hex)})`;

export const rgba = (hex:string, alpha:number):string => `rgba(${hexToR(hex)}, ${hexToG(hex)}, ${hexToB(hex)}, ${alpha})`;

export const rgbToObject = (rgb:string):RGBColorObject => {
  const rgbArray:string[] = rgb.split(',').map((item, index) => {
    return item.replace(/[a-z()]/gi, '');
  });
  const returnAlpha = (alpha) => {
    return alpha == null ? 1 : alpha;
  };
  return {
    r: parseInt(rgbArray[0]),
    g: parseInt(rgbArray[1]),
    b: parseInt(rgbArray[2]),
    a: parseFloat(rgbArray[3]) || 1
  };
};

export const hexToObject = (hex:string):RGBColorObject => {
  return rgbToObject(rgb(hex));
};
