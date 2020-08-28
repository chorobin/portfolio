import { merge } from 'webpack-merge';
import dev from '../../webpack.dev';
import common from './webpack.common';

const config = merge(common, dev, {
    output: {
        publicPath: 'http://localhost:3001/',
    },
    devServer: {
        publicPath: 'http://localhost:3001/',
        port: 3001,
    },
});

export default config;
