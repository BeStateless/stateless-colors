import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';
import { rgbToHsl, hslToObject, rgbToHslObject, rgbObjectToHslObject } from '../src/manipulation/hsl';

@suite class Hsl {
  @test '#rgbToHsl'() {
    const subject = rgbToHsl(255, 125, 36, true);
    expect(subject).to.deep.equal([24, 100, 57]);
  }

  @test '#hslToObject'() {
    const subject = hslToObject('hsl(39, 55%, 67%)');
    expect(subject).to.deep.equal({
      h: 39,
      s: 55,
      l: 67,
      a: 1
    });
  }

  @test '#rgbObjectToHslObject'() {
    const subject = rgbObjectToHslObject({
      r: 255,
      g: 125,
      b: 36
    });
    expect(subject).to.deep.equal({
      h: 24,
      s: 100,
      l: 57,
      a: 1
    });
  }

  @test '#rgbToHslObject'() {
    const subject = rgbToHslObject('rgb(255, 125, 36)');
    expect(subject).to.deep.equal({
      h: 24,
      s: 100,
      l: 57,
      a: 1
    });
  }
}
