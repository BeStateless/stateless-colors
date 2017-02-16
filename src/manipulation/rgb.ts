import { hexToR, hexToG, hexToB } from './hex';
import { RGBColorObject } from '../interfaces';

export const rgb = (hex:string):string => `rgb(${hexToR(hex)}, ${hexToG(hex)}, ${hexToB(hex)})`;

export const rgbToObject = (rgb:string):RGBColorObject => {
  const rgbArray:string[] = rgb.split(',').map((item, index) => {
    return item.replace(/\D/g, '');
  });
  return {
    r: parseInt(rgb[0]),
    g: parseInt(rgb[1]),
    b: parseInt(rgb[2]),
    a: parseInt(rgb[3]) || 1
  };
};

export const hexToObject = (hex:string):RGBColorObject => {
  return rgbToObject(rgb(hex));
};
