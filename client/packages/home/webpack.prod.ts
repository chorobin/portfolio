import { merge } from 'webpack-merge';
import common from './webpack.common';
import prod from '../../webpack.prod';

const config = merge(common, prod, {
    output: {
        publicPath: 'http://localhost:3000/',
    },
    devServer: {
        publicPath: 'http://localhost:3000/',
        port: 3000,
    },
});

export default config;
