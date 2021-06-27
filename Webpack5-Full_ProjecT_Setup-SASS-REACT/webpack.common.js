const path=require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports={
    plugins:[new CleanWebpackPlugin(),new MiniCssExtractPlugin(),new HtmlWebpackPlugin({
        template:"./src/index.html"
    })],
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,"dist"),
        assetModuleFilename:"images/[hash][ext][query]",
    },
    module:{
        rules:[
            {
                test:/\.(png|jpe?g|gif|svg)$/i,
                type:"asset", //webpack seçsin
                // type:"asset/resource", //küçük büyük tüm kaynaklar
                // type:"asset/inline", //base64 çıktı için kullanılabilir
            },
            {
                test:/\.(s[ac]|c)ss$/i,
                use:[
                    {
                      loader:MiniCssExtractPlugin.loader,
                      options:{publicPath:""},
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                },
            },
        ],
    },
    resolve:{
        extensions:[".js",".jsx"],
    },
    
};