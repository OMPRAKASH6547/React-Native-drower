// babel.config.js or babel.config.json
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-reanimated/plugin',
        {
          // Add plugin options if needed
        },
      ],
    ],
  };
};
