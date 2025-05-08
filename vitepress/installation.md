# Installation

## Install

1. Download the latest version from the [GitHub releases page](https://github.com/jcgerhard/cflib/releases)
2. Unzip the downloaded archive with the following structure:

   ```bash{7}
   .
   └── cflib-x.x.x
       ├── CHANGELOG.md
       ├── LICENSE.md
       ├── README.md
       └── release
           └── cflib.js # [!code focus]
   ```

3. Copy/move the `cflib.js` file from the `release` folder to your Cloudflow environment
4. Done!

## Update

Same procedure as installation, just replace the old `cflib.js` file with the new one.
You can backup and rename the old file if you want to keep it.
If you need to get the version number of the library, you can check the file header by opening the file in a text editor:

```js{2}
/**
 * @license MIT
 * cflib v0.0.1 // [!code focus]
 * Copyright (c) 2025 Jan C. Gerhard <jang@hybridsoftware.com>
 */
 !function(e,n){"object"==typeof exports&&"undefined"!=typeof module?...
 ```
