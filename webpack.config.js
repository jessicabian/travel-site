/**
 * Created by JBI on 6/22/2017.
 */
const path = require('path');

module.exports = {
    entry: "./app/assets/scripts/App.js",

    output:{
        //path:"./app/temp/scripts",
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename:"App.js"
    },
    module : {
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets :['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}