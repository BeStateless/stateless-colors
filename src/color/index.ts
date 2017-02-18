import { darken, lighten, determineColorFormat, rgbToObject } from '../manipulation';
import { RGBColorObject, HSLColorObject } from '../interfaces';



export const Color = (color:string) => {
  this.color = color;
  this.toObject = (objectType: 'rgb' | 'rgba' | 'hsl' | 'hsla'):RGBColorObject | HSLColorObject => {
    const format = determineColorFormat(this.color);
    if (format === 'rgb') {
      if (objectType === 'rgb') {
        this.color = rgbToObject(this.color);
      }
    }


    return this;
  };
  this.darken = (percentage: number) => {
    this.color = darken(this.color, percentage);
    return this;
  };

  return this;
};




export default Color;
