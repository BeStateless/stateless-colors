import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';
import { Color } from '../src/color';

@suite class ColorTest {

  @test 'returns a color'() {
    const subject = Color('#0f0f0f');
    expect(subject).equals('#0f0f0f');
  }
}
