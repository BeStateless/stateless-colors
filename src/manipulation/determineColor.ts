import { colorFormat } from '../interfaces';

export const determineColorFormat = (color:string):colorFormat => {
  if (/#/.test(color)) {
    return 'hex';
  } else if (/rgb/.test(color)) {
    return 'rgb';
  } else if (/hsl/.test(color)) {
    return 'hsl';
  };
};
