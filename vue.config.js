module.exports = {
	publicPath: '/',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/style.scss";`
			}
		}
	},
	outputDir: "docs"
};
