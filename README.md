# matches-selector-ng

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AgentME/matches-selector-ng/blob/master/LICENSE.txt) [![npm version](https://img.shields.io/npm/v/matches-selector-ng.svg?style=flat)](https://www.npmjs.com/package/matches-selector-ng) [![CircleCI Status](https://circleci.com/gh/AgentME/matches-selector-ng.svg?style=shield)](https://circleci.com/gh/AgentME/matches-selector-ng)

Check if an element matches a given selector. Uses the native
[`matches` method](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
if present. For use with a commonjs bundler such as browserify.

## Installation

    $ yarn add matches-selector-ng

## Example

```js
var matches = require('matches-selector-ng');
matches(el, 'ul li a');
// => true or false
```

## Types

[Flow](https://flowtype.org/) type declarations for this module are included!
If you are using Flow, they won't require any configuration to use.
