import { registerTransforms } from "@tokens-studio/sd-transforms";

import StyleDictionary from "style-dictionary";



// will register them on StyleDictionary object
// that is installed as a dependency of this package.
registerTransforms(StyleDictionary);

const StyleDictionary = require('style-dictionary').extend({
  source: ['output/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables'
      }]
    }
    // ...
  }
});

StyleDictionary.buildAllPlatforms();
