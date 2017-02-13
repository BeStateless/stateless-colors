import { oceanDark } from './themes/oceanDark';

interface ColorsOptions {
  theme: string;
}

export const colors = (options:ColorsOptions = { theme: 'Ocean Dark' }) => {
  this.theme = options.theme;
  switch (this.theme) {
    case 'Ocean Dark':
      return oceanDark;
    default:
      throw new Error ('An unrecognized theme was selected.');
  }
};

export default colors;
