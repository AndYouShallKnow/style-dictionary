
// import { registerTransforms } from "@tokens-studio/sd-transforms";


const StyleDictionary = require('style-dictionary').extend({
  source: ['output/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
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
