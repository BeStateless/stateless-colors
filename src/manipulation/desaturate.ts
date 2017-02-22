import { HSLColorObject } from '../interfaces';
import { convertPercentageToDecimal } from '../utils';

export const desaturate = (color:HSLColorObject, percentage):HSLColorObject => {
  const amount = typeof percentage === 'string' ? convertPercentageToDecimal(percentage) : percentage;
  let newSaturation = color.s - (amount * 100);
  return {
    h: color.h,
    s: newSaturation,
    l: color.l,
    a: color.a
  };
};
