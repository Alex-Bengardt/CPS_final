// Импорты
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

// Проверки на тип сборки
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log(`Сборка запущена в режиме ${process.env.NODE_ENV}`);

const optimization = () => {
  const config = {
		runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    }
  }

  if (isProd) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin(),
    ]
  }

  return config;
}

// Настройки вебпака
module.exports = {
	// Режим сборки модулей
	mode: 'development',
	// Рабочая директория проекта
	context: path.resolve(__dirname, 'src'),
	// Точки входа - В main импортируются все основные модули. В качестве второй точки входа будет подключаться свайпер
	entry: {
		babel: '@babel/polyfill',
		main: path.resolve(__dirname, 'src', 'js', 'index.js'),
		// swiper: './js/index.js',
	},
	// Конечный файл, в который соберуться все импортируемые модули
	output: {
		filename: 'js/[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		// Алиасы для сокращения и эстетичности кода в прописывании относительных путей
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},
	// Оптимизация и минификааация кода для js и css
	optimization: optimization(),
	// Собственный локальный сервер с апдейтом "на лету" в режиме разработки
	devServer: {
		port: 4500,
		open: true,
		hot: isDev,
	},
	// Карты ресурсов для дебагинга в режиме разработки
	devtool: isDev ? 'source-map' : undefined,
	// Готовый билд собирается под целевые версии браузеров
	target: isDev ? 'web' : 'browserslist',


	module: {
		rules: [
			// Работа с файлами чатамуле
			{
				test: /\.html$/i,
				use: 'html-loader',
			},
			// Работа со шрифтами
			{
				test: /\.(ttf|woff2?|eot)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext]'
				},
			},
			// Работа с изображениями
			{
				test: /\.(png|svg|gif|jpe?g)$/i,
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75
							}
						}
					},
				],
				generator: {
					filename: 'img/[hash][ext]'
				},
			},
			// Работа с файлами стилей
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [postcssPresetEnv()],
							}
						}
					},
					'sass-loader',
				]
			},
			// Работа с файлами жабаскрипта
			{
				test: /\.m?js$/i,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}],
			},
		]
	},


	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css',
		}),
		new ESLintPlugin(),
	]
}

// Быстрая установка зависимостей врукопашную:
// npm i -D webpack webpack-cli webpack-dev-server cross-env
// npm i -D html-loader css-loader sass-loader sass
// npm i -D postcss-loader postcss postcss-preset-env image-webpack-loader
// npm i -D css-minimizer-webpack-plugin terser-webpack-plugin
// npm i -D babel-loader @babel/core @babel/preset-env @babel/polyfill @babel/eslint-parser eslint-webpack-plugin eslint
// npm i -D html-webpack-plugin mini-css-extract-plugin clean-webpack-plugin
