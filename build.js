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
