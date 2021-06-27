const {merge}=require('webpack-merge');
const common=require('./webpack.common');

module.exports=merge(common,{
    mode:'development',
    target:'web',
    devtool:"source-map",
    devServer:{
        contentBase: ["./dist","./src/index.html"],
        // contentBase: "./dist",
        hot:true,
        watchContentBase: true
    }
});