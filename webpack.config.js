const path = require('path');

module.exports = {
    entry: { // es6 메인파일
        index: './src/js/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
    }
};