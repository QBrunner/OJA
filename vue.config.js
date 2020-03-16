module.exports = {
	publicPath: '/OJA/',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/style.scss";`
			}
		}
	},
	outputDir: "docs"
};
