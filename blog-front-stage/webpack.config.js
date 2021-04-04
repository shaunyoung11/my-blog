module.exports = {
  module: {
    rules: [
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: [['import', { libraryName: 'antd', style: 'css' }]],
        },
      },
    ],
  },
};
