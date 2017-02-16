import { colorFormat } from '../interfaces';

export const determineColorFormat = (color:string):colorFormat => {
  if (color.split(',').length === 1) {
    return 'hex';
  } else if (color.match(/^\/rgb/) !== null) {
    return 'rgb';
  } else if (color.match(/^\/hsl/) !== null) {
    return 'hsl';
  };
};
