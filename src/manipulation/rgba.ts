import { hexToR, hexToG, hexToB } from './hex';

export const rgba = (hex:string, alpha:number):string => `rgb(${hexToR(hex)}, ${hexToG(hex)}, ${hexToB(hex)}, ${alpha})`;
