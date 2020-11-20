const path = require('path');

module.exports = {
    entry: { // es6 메인파일
        index: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: { // Babel-loader는 Babel을 Webpack에서 쓸 수 있도록 해주는 것
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
    }
};

// Babel-preset: JS는 계속해서 발전하고 있고 version들 간에 추가되는 요소들에 대한 정의들을 담고 있는 라이브러리