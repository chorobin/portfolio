import { merge } from 'webpack-merge';
import dev from '../../webpack.dev';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

const config = merge(dev, {
    output: {
        publicPath: 'http://localhost:3003/',
    },
    devServer: {
        publicPath: 'http://localhost:3003/',
        port: 3003,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'curriculumvitae',
            library: { type: 'var', name: 'curriculumvitae' },
            filename: 'remoteEntry.js',
            remotes: {
                shell: 'shell',
            },
            exposes: {
                './CurriculumVitae': './src/CurriculumVitae/CurriculumVitae',
            },
            shared: require('./package.json').dependencies,
        }) as any,
    ],
});

export default config;
