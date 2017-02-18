import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';
import { determineColorFormat } from '../src/manipulation';


@suite class DetermineColor {

  @test 'it can detect hex'() {
    const subject = determineColorFormat('#fff');
    expect(subject).equals('hex');
  }

  @test 'it can detect rgb'() {
    const subject = determineColorFormat('rgb(12, 33, 5)');
    expect(subject).equals('rgb');
  }
}
