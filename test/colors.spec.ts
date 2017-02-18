import colors from '../src';
import { theme } from '../src/interfaces';
import { oceanDark } from '../src/themes/oceanDark';
import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';

@suite class Color {
  static result = colors();

  @test 'default equals default theme'() {
    expect(Color.result).equals(oceanDark);
  }

  @test 'dashboard text is correct color'() {
    expect(Color.result.dashboardText).equals('#fff');
  }
}
