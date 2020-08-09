import { merge } from 'webpack-merge';
import dev from '../../webpack.dev';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

const config = merge(dev, {
    output: {
        publicPath: 'http://localhost:3002/',
    },
    devServer: {
        publicPath: 'http://localhost:3002/',
        port: 3002,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'about',
            library: { type: 'var', name: 'about' },
            filename: 'remoteEntry.js',
            remotes: {
                shell: 'shell',
            },
            exposes: {
                './About': './src/About/About',
            },
            shared: require('./package.json').dependencies,
        }) as any,
    ],
});

export default config;
