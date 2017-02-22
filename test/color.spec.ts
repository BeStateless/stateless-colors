import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';
import { Color } from '../src/color';

@suite class ColorTest {

  @test 'returns a color'() {
    const subject = Color('#0f0f0f').color;
    expect(subject).equals('#0f0f0f');
  }

  @test '#Color.toObject'() {
    const subject = Color('rgb(233, 69, 33)').toObject('rgb').color;
    expect(subject.r).equals(233);
    expect(subject.g).equals(69);
    expect(subject.b).equals(33);
  }

  @test '#Color.darken'() {
    const subject = Color({
      h: 120,
      s: 30,
      l: 40,
      a: 1
    }).darken(0.3).color;
    expect(subject.l).equals(10);
  }

  @test '#Color lighten'() {
    const subject = Color({
      h: 120,
      s: 30,
      l: 40,
      a: 1
    }).lighten(0.3).color;
    expect(subject.l).equals(70);
  }

  @test '#Color lighten out of bounds'() {
    const subject = Color({
      h: 120,
      s: 30,
      l: 80,
      a: 1
    }).lighten(0.3).color;
    expect(subject.l).equals(100);
  }
}
