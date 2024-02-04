module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'app/*': './src/app/*',
          'processes/*': './src/processes/*',
          'screens/*': './src/screens/*',
          'shared/*': './src/shared/*',
        },
      },
    ],
  ],
};
