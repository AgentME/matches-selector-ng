# matches-selector-ng

Check if an element matches a given selector. For use with browserify.

## Installation

    $ npm install --save matches-selector-ng

## Example

```js
var matches = require('matches-selector');
matches(el, 'ul li a');
// => true or false
```

## Running Tests

Tests can be easilly run locally in the browser of your choice, and have passed if it ends with `# ok`.  They are also run on testling-ci when pushed to the repository:

```
npm install
npm test
```

To re-run tests after making changes, just refresh your browser
