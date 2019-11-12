module.exports = function(api) {
  api.cache(true);

  const presets = [['@babel/preset-env', { loose: true, modules: false }], '@babel/preset-typescript', '@babel/preset-react'];
  const plugins = [['babel-plugin-styled-components', { ssr: false, pure: true }]];

  return {
    presets,
    plugins
  };
};
