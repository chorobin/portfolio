import { merge } from 'webpack-merge';
import prod from '../../webpack.prod';
import common from './webpack.common';

const config = merge(common, prod, {
    output: {
        publicPath: 'http://localhost:3001/',
    },
    devServer: {
        publicPath: 'http://localhost:3001/',
        port: 3001,
    },
});

export default config;
