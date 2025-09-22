const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      '@': './src',
      '@components': './src/components',
      '@screens': './src/screens',
      '@navigation': './src/navigation',
      '@utils': './src/utils',
      '@types': './src/types',
      '@hooks': './src/hooks',
      '@services': './src/services',
    },
  },
  transformer: {
    unstable_allowRequireContext: true,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
