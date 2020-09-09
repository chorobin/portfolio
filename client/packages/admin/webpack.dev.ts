import { merge } from 'webpack-merge';
import common from './webpack.common';
import dev from '../../webpack.dev';

const config = merge(common, dev, {
    output: {
        publicPath: 'http://localhost:3004/',
    },
    devServer: {
        publicPath: 'http://localhost:3004/',
        port: 3004,
    },
});

export default config;
