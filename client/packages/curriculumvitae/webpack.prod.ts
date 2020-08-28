import { merge } from 'webpack-merge';
import common from './webpack.common';
import prod from '../../webpack.dev';

const config = merge(common, prod, {
    output: {
        publicPath: 'http://localhost:3003/',
    },
    devServer: {
        publicPath: 'http://localhost:3003/',
        port: 3003,
    },
});

export default config;
