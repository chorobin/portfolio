import { merge } from 'webpack-merge';
import common from './webpack.common';
import dev from '../../webpack.dev';

const config = merge(common, dev, {
    output: {
        publicPath: 'http://localhost:3000/',
    },
    devServer: {
        publicPath: 'http://localhost:3000/',
        port: 3000,
    },
});

export default config;
