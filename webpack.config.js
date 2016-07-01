var path = require('path');

var phaserModule = path.join(__dirname,'/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: './src/main.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            
            {
                test: /pixi\.js/,
                loader: 'expose?PIXI'
            },

            {
                test: /phaser-split\.js$/,
                loader: 'expose?Phaser'
            },

            {
                test: /p2\.js/,
                loader: 'expose?p2'
            }
            
        ],
        
        resolve:
        {
            alias: 
            {
                'phaser': phaser,
                'pixi': pixi,
                'p2': p2
            }
        }
    }
};