import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';
import { lighten, darken } from '../src/manipulation';

@suite class Manipulation {
  @test 'lighten'() {
    const subject = lighten({ h: 100, s: 100, l: 50 }, 0.5);
    expect(subject.l).equals(100);
  }

  @test 'darken'() {
    const subject = darken({ h: 100, s: 100, l: 50 }, 0.5);
    expect(subject.l).equals(0);
  }
}
