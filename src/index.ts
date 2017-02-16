import { oceanDark } from './themes/oceanDark';
import { ColorsOptions, theme } from './interfaces';

export const colors = (options:ColorsOptions) => {
  this.theme = options.theme || 'Ocean Dark' as theme;

  if (!(this instanceof colors)) {
    return colors(options);
  }

  switch (this.theme) {
    case 'Ocean Dark' as theme:
      return oceanDark;
    default:
      throw new Error ('An unrecognized theme was selected.');
  }
};


export default colors;
