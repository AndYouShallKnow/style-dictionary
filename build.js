// const { registerTransforms } = require('@tokens-studio/sd-transforms');
// const StyleDictionary = require('style-dictionary');

// import { registerTransforms } from "@tokens-studio/sd-transforms";
// import StyleDictionary from "style-dictionary";

// registerTransforms(StyleDictionary);


const sd = require('style-dictionary').extend({
  source: ['tokens/*.json'],
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


sd.cleanAllPlatforms();
sd.buildAllPlatforms();
