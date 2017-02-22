# Stateless Colors ✨

[![codecov](https://codecov.io/gh/BeStateless/stateless-colors/branch/master/graph/badge.svg)](https://codecov.io/gh/BeStateless/stateless-colors)

**WIP**

A tiny palette manager and color manipulation tool for Stateless.

The purpose of this module is to not have to search through documentation or anything of the like when it comes to styling Stateless products. It reduces the friction when allowing the user to switch between themes by allowing all background/color properties to be specified in javascript.

## Installation

```
npm install --save @stateless/colors
```

If you want to build your own copy, git clone and then run `npm i`, `npm run build`.

⚠️️ **IMPORTANT**: make sure to shrinkwrap or stay consistent with which package you choose. A breaking-change semver-wise for this project is when any value changes its color, or the color itself changes.

### Importing

The project currently accepts ES6-styled imports, i.e.

```javascript
import '@stateless/colors';

import { colors } from '@stateless/colors';

import { colors, lightTheme } from '@stateless/colors';
```


## API

### `colors(options).[name]`

```javascript
@options Object { theme }
@name identifiers
```

Returns, as a string, the color of the specified name. Names can be a specific color from a palette (i.e. navyBlue), or an Element/Component type (i.e. headerBackground, headerText, logoColor).
You can also call metadata about the colors.

Examples

```javascript
colors().headerText
colors('Spring Breeze').headerText
colors('Tomorrow').info
```


### `colors(options).[name].[function]`

You can chain a number of manipulation functions to the colors that stateless-colors emits:

#### `lighten(percentage)`

#### `darken(percentage)`

#### `saturate(percentage)`

#### `desaturate(percentage)`




## Contributing

Contributions are always accepted. Themes are always a huge plus 👍
