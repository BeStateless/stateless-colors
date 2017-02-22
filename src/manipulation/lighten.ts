import { HSLColorObject } from '../interfaces';
import { convertPercentageToDecimal, clamp } from './utils';

export const lighten = (color:HSLColorObject, percentage):HSLColorObject => {
  const amount = typeof percentage === 'string' ? convertPercentageToDecimal(percentage) : percentage;
  let newLight:number = clamp(color.l + (amount * 100), 0, 100);
  return {
    h: color.h,
    s: color.s,
    l: newLight,
    a: color.a
  };
};
