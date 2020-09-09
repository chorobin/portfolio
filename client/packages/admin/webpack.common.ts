import * as webpack from 'webpack';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

const config: webpack.Configuration = {
    plugins: [
        new ModuleFederationPlugin({
            name: 'admin',
            library: { type: 'var', name: 'admin' },
            filename: 'remoteEntry.js',
            remotes: {
                shell: 'shell',
            },
            shared: require('./package.json').dependencies,
        }) as any,
    ],
};

export default config;
