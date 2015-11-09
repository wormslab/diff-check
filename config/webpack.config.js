module.exports = {
    entry: [ "./public/js/app.js",  "./public/js/app.js" ],
    output: {
        path: './public/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
        ]
    }
};
