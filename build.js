
//Style Dictionary Transforms for Tokens Studio bit, not working

//CJS
// const { registerTransforms } = require('@tokens-studio/sd-transforms');
// const StyleDictionary = require('style-dictionary');

// ES6?
// import { registerTransforms } from "@tokens-studio/sd-transforms";
// import StyleDictionary from "style-dictionary";

// If this line works, the 'tokens-studio' lib will be available to be
// registerTransforms(StyleDictionary);

// StyleDictionary bit
const sd = require('style-dictionary').extend({
  source: ['tokens/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      // This transform group isn't working due to the above init not working
      // transformGroup: 'tokens-studio',
      buildPath: 'build/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables'
      }]
    }
    // ...
  }
});


sd.cleanAllPlatforms();
sd.buildAllPlatforms();
