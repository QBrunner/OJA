module.exports = {
	publicPath: '/OJA/',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/style.scss";`
			}
		}
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.(pdf)(\?.*)?$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								name: 'files/[name].[hash:8].[ext]'
							}
						}
					]
				}
			]
		}
	},
	outputDir: "docs"
};
