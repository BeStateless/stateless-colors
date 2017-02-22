import { HSLColorObject } from '../interfaces';
import { convertPercentageToDecimal } from './utils';

export const darken = (color:HSLColorObject, percentage):HSLColorObject => {
  const amount = typeof percentage === 'string' ? convertPercentageToDecimal(percentage) : percentage;
  let newDarkness = color.l - (amount * 100);
  return {
    h: color.h,
    s: color.s,
    l: newDarkness,
    a: color.a
  };
};
