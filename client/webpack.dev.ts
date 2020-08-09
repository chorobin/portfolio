import { merge } from 'webpack-merge';
import common from './webpack.common';

const config = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
    },
});

export default config;
