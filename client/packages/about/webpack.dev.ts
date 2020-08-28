import { merge } from 'webpack-merge';
import common from './webpack.common';
import dev from '../../webpack.dev';

const config = merge(common, dev, {
    output: {
        publicPath: 'http://localhost:3002/',
    },
    devServer: {
        publicPath: 'http://localhost:3002/',
        port: 3002,
    },
});

export default config;
