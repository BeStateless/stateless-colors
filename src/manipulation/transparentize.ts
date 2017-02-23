import { HSLColorObject, RGBColorObject } from '../interfaces';
import { convertPercentageToDecimal } from './utils';


export const transparentize = (color:HSLColorObject, percentage):HSLColorObject => {
  const amount = typeof percentage === 'string' ? convertPercentageToDecimal(percentage) : percentage;
  let newAlpha = color.s + (amount * 100);

  return {
    h: color.h,
    s: color.s,
    l: color.l,
    a: newAlpha
  };
};
