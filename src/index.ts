import { oceanDark } from './themes/oceanDark';
import { ColorsOptions, theme } from './interfaces';

export const colors = (options:ColorsOptions = {
  theme: 'Ocean Dark'
}) => {
  this.theme = options.theme || 'Ocean Dark' as theme;

  switch (this.theme) {
    case 'Ocean Dark' as theme:
      return oceanDark;
    default:
      throw new Error ('An unrecognized theme was selected.');
  }
};

export * from './manipulation';
export default colors;
