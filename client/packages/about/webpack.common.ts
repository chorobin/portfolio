import * as webpack from 'webpack';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

const config: webpack.Configuration = {
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
};

export default config;
