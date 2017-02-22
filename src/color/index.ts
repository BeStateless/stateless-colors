import { darken, lighten, determineColorFormat, rgbToObject, hexToHSLObject, desaturate, saturate } from '../manipulation';
import { RGBColorObject, HSLColorObject } from '../interfaces';



export const Color = (color:string | HSLColorObject | RGBColorObject) => {
  this.color = color;
  this.toObject = (objectType: 'rgb' | 'rgba' | 'hsl' | 'hsla'):RGBColorObject | HSLColorObject => {
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
  this.darken = (percentage: number) => {
    this.color = darken(this.color, percentage);
    return this;
  };
  this.lighten = (percentage: number) => {
    this.color = lighten(this.color, percentage);
    return this;
  };
  this.saturate = (percentage: number) => {
    this.color = saturate(this.color, percentage);
    return this;
  };
  this.desaturate = (percentage: number) => {
    this.color = desaturate(this.color, percentage);
    return this;
  };

  return this;
};




export default Color;
