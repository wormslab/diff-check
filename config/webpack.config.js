module.exports = {
    entry: [ __dirname + "/../public/js/app.js" ],
    output: {
        path: __dirname + "/../public/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
        ]
    }
};

console.log(__dirname)
