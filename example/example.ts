import * as charCodes from "../mod.ts";

const dot = charCodes.dot;
console.log(dot); // 46

const digitZero = charCodes.digit0;
console.log(charCodes.isDigit(digitZero)); // true

const colon = charCodes.colon;
console.log(charCodes.isDigit(colon)); // false

const uppercaseA = charCodes.uppercaseA;
console.log(charCodes.isAlphabet(uppercaseA)); // true

const backslash = charCodes.backslash;
console.log(charCodes.isAlphabet(backslash)); // false
