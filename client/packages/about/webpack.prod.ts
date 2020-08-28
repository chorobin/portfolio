import { merge } from 'webpack-merge';
import common from './webpack.common';
import prod from '../../webpack.prod';

const config = merge(common, prod, {
    output: {
        publicPath: 'http://localhost:3002/',
    },
    devServer: {
        publicPath: 'http://localhost:3002/',
        port: 3002,
    },
});

export default config;
