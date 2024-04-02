const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
registerTransforms(StyleDictionary);


const sd = StyleDictionary.extend({
  source: ['output/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'], // <-- add a token name transform for generating token names, default is camel
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();




// const StyleDictionary = require('style-dictionary').extend({
//   source: ['output/**/*.json'],
//   platforms: {
//     scss: {
//       transformGroup: 'tokens-studio',
//       buildPath: 'build/',
//       files: [{
//         destination: 'variables.scss',
//         format: 'scss/variables'
//       }]
//     }
//     // ...
//   }
// });

// StyleDictionary.buildAllPlatforms();
