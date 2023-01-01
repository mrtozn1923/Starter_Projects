module.exports={   
    entry: {
        common:'./src/js/common.js',        
        homepage:'./src/js/homepage.js',       
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