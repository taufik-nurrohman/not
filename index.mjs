import {
    isArray,
    isBoolean,
    isComment,
    isDefined,
    isDocument,
    isElement,
    isFloat,
    isFunction,
    isInstance,
    isInteger,
    isNode,
    isNull,
    isNumber,
    isNumeric,
    isObject,
    isPattern,
    isScalar,
    isSet,
    isString,
    isText,
    isWindow
} from '@taufik-nurrohman/is';

export const notArray = x => !isArray(x);
export const notBoolean = x => !isBoolean(x);
export const notComment = x => !isComment(x);
export const notDefined = x => !isDefined(x);
export const notDocument = x => !isDocument(x);
export const notElement = x => !isElement(x);
export const notFloat = x => !isFloat(x);
export const notFunction = x => !isFunction(x);
export const notInstance = (x, of) => !isInstance(x, of);
export const notInteger = x => !isInteger(x);
export const notNode = x => !isNode(x);
export const notNull = x => !isNull(x);
export const notNumber = x => !isNumber(x);
export const notNumeric = x => !isNumeric(x);
export const notObject = (x, y) => !isObject(x, y);
export const notPattern = x => !isPattern(x);
export const notScalar = x => !isScalar(x);
export const notSet = x => !isSet(x);
export const notString = x => !isString(x);
export const notText = x => !isText(x);
export const notWindow = x => !isWindow(x);
