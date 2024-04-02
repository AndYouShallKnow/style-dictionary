
//Style Dictionary Transforms for Tokens Studio bit, not working


const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');


registerTransforms(StyleDictionary);

const sd = require('style-dictionary').extend({
  source: ['tokens/*.json'],
  platforms: {
    scss: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables'
      }]
    },
      ios: {
      buildPath: 'build/iOS/',
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


sd.cleanAllPlatforms();
sd.buildAllPlatforms();
