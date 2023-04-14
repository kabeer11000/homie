const path = require('path');

module.exports = {
    entry: './source/index.js',
    "resolve.fallback": { "path": require.resolve("path-browserify") },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};