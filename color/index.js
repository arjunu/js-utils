import {HTMLColors} from '../constants/color';
import {REGEX_HEX_COLOR} from '../constants/regex';

export const isValidHTMLColor = color => HTMLColors.includes(color) || REGEX_HEX_COLOR.test(color.toLowerCase());