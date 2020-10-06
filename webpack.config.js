const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            "jQuery": "jquery",
            "window.jQuery": "jquery",
            "jquery": "jquery",
            "window.jquery": "jquery",
            "$": "jquery",
            "window.$": "jquery"
        })
    ],

    entry: {
        main: "./src/js/index.js",
        pageIndex: "./src/js/import/pages/pageIndex.js",
        pageDoctorsAndReferrals: "./src/js/import/pages/pageDoctorsAndReferrals.js",
        pagePricesAndPromotions: "./src/js/import/pages/pagePricesAndPromotions.js",
        pageContact: "./src/js/import/pages/pagePricesAndPromotions.js",
        pageAboutUs: "./src/js/import/pages/pageAboutUs.js",
        pageDoctorDetails: "./src/js/import/pages/pageDoctorDetails.js",
        pageReviews: "./src/js/import/pages/pageReviews.js"
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules")
        }
    }
};
