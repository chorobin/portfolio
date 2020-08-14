import { merge } from 'webpack-merge';
import dev from '../../webpack.dev';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

const config = merge(dev, {
    output: {
        publicPath: 'http://localhost:3001/',
    },
    devServer: {
        publicPath: 'http://localhost:3001/',
        port: 3001,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            filename: 'remoteEntry.js',
            library: { type: 'var', name: 'shell' },
            remotes: {
                home: 'home',
                about: 'about',
                curriculumvitae: 'curriculumvitae',
            },
            exposes: {
                './Shell': './src/Shell/Shell',
                './Main': './src/Main/Main',
                './Images/Canada.jpg': './src/Images/Canada.jpg',
                './Images/France.jpg': './src/Images/France.jpg',
                './Images/Vietnam5.jpg': './src/Images/Vietnam5.jpg',
                './Images/Vietnam1.jpg': './src/Images/Vietnam1.jpg',
                './Images/Spain.jpg': './src/Images/Spain.jpg',
                './Title': './src/Title/Title',
                './Description': './src/Description/Description',
                './MenuButton': './src/MenuButton/MenuButton',
            },
            shared: require('./package.json').dependencies,
        }) as any,
    ],
});

export default config;
