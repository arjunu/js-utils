import {getType} from '../../index';

describe("isValidHTMLColor tests", () => {
  test("Tests", () => {
    expect(getType('')).toEqual('String');

    expect(getType(undefined)).toEqual('Undefined');
    expect(getType()).toEqual('Undefined');

    expect(getType(5)).toEqual('Number');
    expect(getType(-5)).toEqual('Number');
    expect(getType(0)).toEqual('Number');
    expect(getType(NaN)).toEqual('Number');

    expect(getType({})).toEqual('Object');

    expect(getType(f=>f)).toEqual('Function');
  });
});