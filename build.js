
//Style Dictionary Transforms for Tokens Studio bit
const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');
registerTransforms(StyleDictionary);

const sd = require('style-dictionary').extend({
   source: ['tokens/*.json'],
  //source: ['https://github.com/gerard-figma/variables-github-action-example/blob/main/colors.json'],
  platforms: {
    scss: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/',
      files: [{
          destination: 'variables.js',
          format: 'javascript/es6'
      }]
    },
      ios: {
      buildPath: 'build/',
      transformGroup: 'tokens-studio',
      prefix: 'sd',
      files: [
        {
          destination: 'any.swift',
          format: 'ios-swift/any.swift'
        }
      ]
    }
    // ...
  }
});


// sd.cleanAllPlatforms();
sd.buildAllPlatforms();
