const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../jayang_phoenix_backend/public"), //build outputPath
    transpileDependencies: ['vuetify'],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            }
        }
    },
    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    },
    filenameHashing: false,
    chainWebpack: config => config.optimization.minimize(false),
    publicPath: './',
};
