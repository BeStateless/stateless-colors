import colors from '../src';
import { theme } from '../src/interfaces';
import * as mocha from 'mocha';
import { expect } from 'chai';

describe('colors', () => {
  it('should work', () => {
    const result = colors({ theme: 'Ocean Dark' });
    expect(result).to.equal({

    });
  });
});
