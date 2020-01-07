const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //to są importy. Używany jest require zamiast import. Pozwalają na wykorzystanie pakietów NPM.

//obiekty w fagmentami konfiguracji webpack7

//baseConfig zawiera elementy konfiguracji które są wspólne dla wersji developerskiej i produkcyjnej
const baseConfig = () => ({
  entry: './src/index.js', //entry wskazuje w którym pliku JS znajduje się główny kod aplikacji.
  output: {         // output wskazjuje miejsce w którym ma być wygenerowana wersja produkcyjna, stworzona za pomocją komenty npm run build. Odpowiada też za nzawę pliku w którym znajduje się scalony i skonwertowany kod js aplikacji.
    path: path.join(__dirname, 'dist'),
    filename: 'scripts_bundle.js',
  },
  module: {  //zawiera konfigurację dla różnych typów plików np. plików js czy scss
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});

//devConfig elementy konfiguracjyjne dla wersji developerskiej
const devConfig = () => ({
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});

//devConfig elementy konfiguracjyjne dla wersji produkcyjnej
const prodConfig = () => ({
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles_bundle_[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});


//module.exports eksportuje konfigurację aby była dostępna dla webpacka.
module.exports = (env, argv) => {
  const modeConfig = argv.mode == 'production' ? prodConfig : devConfig;

  return merge(baseConfig(), modeConfig());
};
