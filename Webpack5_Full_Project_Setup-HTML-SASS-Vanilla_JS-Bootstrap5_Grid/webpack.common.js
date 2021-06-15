const path=require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

let htmlPageNames = ['index'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
  })
});

module.exports={
    plugins:[new CleanWebpackPlugin(),new MiniCssExtractPlugin(),
    ].concat(multipleHtmlPlugins),
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,"dist"),
        assetModuleFilename:"images/[hash][ext][query]",
    },
    module:{
        rules:[
            {
                test:/\.(png|jpeg|jpg|gif|svg)$/i,
                // type:"asset",//webpack seçsin
                type:"asset/resource", //küçük büyük tüm kaynakları çıkart
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
                test:/\.js/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                },
            },
        ],
    }
};