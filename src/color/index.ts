import {
  darken,
  lighten,
  determineColorFormat,
  rgbToObject,
  hexToHSLObject,
  desaturate,
  saturate
} from '../manipulation';
import { RGBColorObject, HSLColorObject, percentage } from '../interfaces';



export const Color = (color:string | HSLColorObject | RGBColorObject):any => {
  this.color = color;

  if (color instanceof Color) {
    return color;
  }

  this.toObject = (objectType: 'rgb' | 'rgba' | 'hsl' | 'hsla'):RGBColorObject | HSLColorObject => {
    if (typeof this.color === 'object') return;
    const format = determineColorFormat(this.color);
    if (format === 'rgb') {
      if (objectType === 'rgb') {
        this.color = rgbToObject(this.color);
      }
    }
    if (format === 'hex') {
      if (objectType === 'hsl') {
        this.color = hexToHSLObject(this.color);
      }
    }

    return this;
  };
  this.toHSL = (objectType: 'object' | 'string') => {
    this.color = toHSL(this.color, objectType);
    return this;
  };
  this.darken = (percentage: percentage) => {
    this.color = darken(this.color, percentage);
    return this;
  };
  this.lighten = (percentage: percentage) => {
    this.color = lighten(this.color, percentage);
    return this;
  };
  this.saturate = (percentage: percentage) => {
    this.color = saturate(this.color, percentage);
    return this;
  };
  this.desaturate = (percentage: percentage) => {
    this.color = desaturate(this.color, percentage);
    return this;
  };

  return this;
};




export default Color;
