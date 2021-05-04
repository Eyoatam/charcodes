# charcodes

> Char codes utility for deno

# Example

```ts
import * as charCodes from "https://deno.land/x/charcodes@0.1.0/mod.ts";
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
```

```bash
deno run https://deno.land/x/charcodes@0.1.0/example/example.ts
```

# License

[MIT](https://github.com/Eyoatam/charcodes/blob/main/LICENSE)
