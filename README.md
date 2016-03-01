# squelch-nick-hash [![Build Status](https://travis-ci.org/squelch-irc/squelch-nick-hash.svg?branch=master)](https://travis-ci.org/squelch-irc/squelch-nick-hash)
Hashes nicknames to assign color indexes in Squelch. Returns an index between 1 and 16, inclusive, from the hash of the passed in nickname.

## Installing
`npm install squelch-nick-hash`

## Example usage
```js
var nickHash = require('squelch-nick-hash');

nickHash('MyNick') // returns 15
```

## License
The MIT License (MIT)

Copyright (c) 2016 Rahat Ahmed

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
