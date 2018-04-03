import { HTMLColors } from '../constants/color';
import { REGEX_HEX_COLOR } from '../constants/regex';

/**
 *
 * @param {string} color
 * @returns {boolean}
 * @test 'red'->true
 * @test '#51436f'->true
 * @test '51436f'->false
 */
const isValidHTMLColor = color =>
  HTMLColors.includes(color) || REGEX_HEX_COLOR.test(color.toLowerCase());

export default isValidHTMLColor;
