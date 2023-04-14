// metro.config.js
module.exports = {
    resolver: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.obj', '.glb', '.dae', '.mtl'],
        extraNodeModules: require('node-libs-expo'),
    },
};