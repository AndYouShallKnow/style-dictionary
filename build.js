
const sd = StyleDictionary.extend({
  source: ['**/*.json'], // <-- make sure to have this match your token files!!!
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
