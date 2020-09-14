const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );
const production = 'development' !== process.env.NODE_ENV;

module.exports = {
  ...defaultConfig,
  entry: {
    block: path.resolve( __dirname, 'src', 'block.js' ),
    frontend: path.resolve( __dirname, 'src', 'frontend.js' ),
    editor: path.resolve( __dirname, 'src', 'editor.scss' ),
    style: path.resolve( __dirname, 'src', 'style.scss' ),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve( __dirname, 'build' ),
  },
  module: {
    rules: [
	  ...defaultConfig.module.rules,
	],
  },
  optimization: {
    ...defaultConfig.optimization,
    splitChunks: {
      cacheGroups: {
              	default: false,
        editor: {
          chunks: 'all',
                  	enforce: true,
          name: 'editor',
          test: /editor\.s[ac]ss$/i,
        },
        style: {
          chunks: 'all',
                  	enforce: true,
          name: 'style',
          test: /style\.s[ac]ss$/i,
        },
      },
    },
  },
  plugins: [
    ...defaultConfig.plugins,
    new IgnoreEmitPlugin( [ 'editor.css', 'style.css', /^editor[a-zA-Z0-9_.-]*js$/, /^style[a-zA-Z0-9_.-]*js$/] ),
    new MiniCssExtractPlugin( {
      filename: '[name].[hash].css',
    } ),
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
	},
};
if ( production ) {
  module.exports.devtool = false;
}
