import { merge } from 'webpack-merge';
import common from './webpack.common';
import dev from '../../webpack.dev';

const config = merge(common, dev, {
    output: {
        publicPath: 'http://localhost:3003/',
    },
    devServer: {
        publicPath: 'http://localhost:3003/',
        port: 3003,
    },
});

export default config;
