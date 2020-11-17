import {
    isArray,
    isBoolean,
    isFloat,
    isFunction,
    isInteger,
    isNull,
    isNumber,
    isNumeric,
    isObject,
    isPattern,
    isSet,
    isString,
    isNode,
    isNodeComment,
    isNodeElement,
    isNodeText
} from '@taufik-nurrohman/is';

export const notArray = x => !isArray(x);
export const notBoolean = x => !isBoolean(x);
export const notFloat = x => !isFloat(x);
export const notFunction = x => !isFunction(x);
export const notInteger = x => !isInteger(x);
export const notNull = x => !isNull(x);
export const notNumber = x => !isNumber(x);
export const notNumeric = x => !isNumeric(x);
export const notObject = (x, y) => !isObject(x, y);
export const notPattern = x => !isPattern(x);
export const notSet = x => !isSet(x);
export const notString = x => !isString(x);
export const notNode = x => !isNode(x);
export const notNodeComment = x => !isNodeComment(x);
export const notNodeElement = x => !isNodeElement(x);
export const notNodeText = x => !isNodeText(x);
