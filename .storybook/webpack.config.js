// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  entry: '../stories/index.stories.js',
  plugins: [
    // your custom plugins
  ],
  module: {

    rules: [
    {test: /(\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
    {
               test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
               use: [{
                   loader: 'file-loader',
                   options: {
                       name: '[name].[ext]',
                       outputPath: 'fonts/'
                   }
               }]
           }
    ],
  },
};
