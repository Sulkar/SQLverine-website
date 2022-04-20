module.exports = function (context, options) {
    return {
      name: 'sqlverine-webpack-config',
      configureWebpack(config, isServer, utils) {
        const {getJSLoader} = utils;
        return {
          module: {
            rules: [
                {
                    test: /\.pegjs$/,
                    use: 'pegjs-loader'
                },
            ],
          },
        };
      },
    };
  };