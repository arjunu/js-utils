import {isValidHTMLColor} from '../../src/index';

describe("isValidHTMLColor tests", () => {
  test("Truthy tests", () => {
    expect(isValidHTMLColor('red')).toEqual(true);
    expect(isValidHTMLColor('#000000')).toEqual(true);
    expect(isValidHTMLColor('#51436f')).toEqual(true);
    expect(isValidHTMLColor('#AAAAAA')).toEqual(true);
    expect(isValidHTMLColor('#aaaaaa')).toEqual(true);
  });

  test("Falsy tests", () => {
    expect(isValidHTMLColor('000000')).toEqual(false);
    expect(isValidHTMLColor('')).toEqual(false);
  });
});