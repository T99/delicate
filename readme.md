# delicate
Touch any key to die!

### [Find @t99/delicate on NPM.](https://www.npmjs.com/package/@t99/delicate)

## Table of Contents

 - [Installation](#installation)
 - [Basic Usage](#basic-usage)
 - [License](#license)

## Installation
Install from NPM with
```
$ npm install --save @t99/delicate
```

Note that _delicate_ only works with NodeJS, as it relies on both `process#exit` and Node's access to stdin (`process.stdin`).

## Basic Usage
```typescript
import * as delicate from "@t99/delicate";
delicate.prompt();
// Then press a key. You'll never guess what happens next!
```

If you want to change the action that occurs after the <kbd>any</kbd> key is pressed:
```typescript
import * as delicate from "@t99/delicate";
delicate.prompt(() => {
    // Die with style.
});
```

If you would rather still use the default implementation but want to exit with a different status code (other than the default exit code, `0`):
```typescript
import * as delicate from "@t99/delicate";
delicate.prompt(42);
// Quit with an exit code of '42'.
```

## License
@t99/delicate is made available under the GNU General Public License v3.

Copyright (C) 2019 Trevor Sears
