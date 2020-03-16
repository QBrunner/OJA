module.exports = {
	publicPath: '/oja',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/style.scss";`
			}
		}
	},
	outputDir: "docs"
};
