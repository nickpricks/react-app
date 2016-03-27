module.exports = {
    context: __dirname + "/client",
    entry: './main.js',
    output: {
        path: __dirname + "/client/",
        filename: 'main.min.js'
    },
    devServer: {
        inline: true,
        port: 3003
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']

                }
            },
            {
                test: /\.jade$/,
                loader: "jade"
            }
        ]

    }
};