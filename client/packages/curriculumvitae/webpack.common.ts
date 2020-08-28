import * as webpack from 'webpack';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

const config: webpack.Configuration = {
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
};

export default config;
