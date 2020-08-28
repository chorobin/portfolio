import * as webpack from 'webpack';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

export const config: webpack.Configuration = {
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
};

export default config;
