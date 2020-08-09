import { merge } from 'webpack-merge';
import dev from '../../webpack.dev';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

const config = merge(dev, {
    output: {
        publicPath: 'http://localhost:3000/',
    },
    devServer: {
        publicPath: 'http://localhost:3000/',
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'home',
            library: { type: 'var', name: 'home' },
            filename: 'remoteEntry.js',
            remotes: {
                shell: 'shell',
            },
            exposes: {
                './Home': './src/Home/Home',
            },
            shared: require('./package.json').dependencies,
        }) as any,
    ],
});

export default config;
