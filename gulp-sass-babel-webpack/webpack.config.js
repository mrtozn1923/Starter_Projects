const path=require('path');

module.exports={
    entry: path.resolve(__dirname, './src/js/index.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'main.min.js'
    },
    mode: 'production',   
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}