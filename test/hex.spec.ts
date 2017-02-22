import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';
import { hexToRgbArray } from '../src/manipulation/hex';

@suite class Hex {
  @test '#hexToRgb'() {
    const subject = '#000000';
    expect(hexToRgbArray(subject)).to.deep.equal([0, 0, 0]);
  }
  @test '#hexToRgb - 3 length'() {
    const subject = '#000';
    expect(hexToRgbArray(subject)).to.deep.equal([0, 0, 0]);
  }
}
