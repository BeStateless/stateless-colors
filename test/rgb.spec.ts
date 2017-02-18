import {
  rgb,
  rgba,
  rgbToObject,
  hexToObject
} from '../src/manipulation/rgb';
import { RGBColorObject } from '../src/interfaces';
import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';

@suite class RGB {


  @test '#rgb'() {
    let subject = rgb('#ffffff');
    expect(subject).equals('rgb(255, 255, 255)');
  }

  @test '#rgba'() {
    let subject = rgba('#ffffff', 1);
    expect(subject).equals('rgba(255, 255, 255, 1)');
  }

  @test '#rgba - with less alpha'() {
    let subject = rgba('#87CEEB', 0.5);
    expect(subject).equals('rgba(135, 206, 235, 0.5)');
  }

  @test '#rgb to object'() {
    let subject = rgbToObject('rgb(112, 0, 33)');
    expect(Object.keys(subject).length).equals(4);
    expect(subject.r).equals(112);
    expect(subject.g).equals(0);
    expect(subject.b).equals(33);
    expect(subject.a).equals(1);
  }

  @test '#rgba to object'() {
    let subject = rgbToObject('rgba(13, 99, 255, 0.7)');
    expect(Object.keys(subject).length).equals(4);
    expect(subject.r).equals(13);
    expect(subject.g).equals(99);
    expect(subject.b).equals(255);
    expect(subject.a).equals(0.7);
  }


}
