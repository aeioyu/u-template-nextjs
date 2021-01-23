const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../components'),
      '@/configs': path.resolve(__dirname, '../configs'),
      '@emotion/core': toPath('node_modules/@emotion/react'),
      'emotion-theming': toPath('node_modules/@emotion/react'),
    };

    return config;
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@emotion/babel-preset-css-prop'],
  }),
};
