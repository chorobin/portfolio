import * as webpack from 'webpack';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

const config: webpack.Configuration = {
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
                './Images/Canada-1024.jpg': './src/Images/Canada-1024.jpg',
                './Images/Canada-1920.jpg': './src/Images/Canada-1920.jpg',
                './Images/Vietnam5.jpg': './src/Images/Vietnam5.jpg',
                './Images/Vietnam5-1024.jpg': './src/Images/Vietnam5-1024.jpg',
                './Images/Vietnam5-1920.jpg': './src/Images/Vietnam5-1920.jpg',
                './Images/Vietnam1.jpg': './src/Images/Vietnam1.jpg',
                './Images/Vietnam1-1024.jpg': './src/Images/Vietnam1-1024.jpg',
                './Images/Vietnam1-1920.jpg': './src/Images/Vietnam1-1920.jpg',
                './Images/Span-1920.jpg': './src/Images/Spain-1920.jpg',
                './Images/Spain.jpg': './src/Images/Spain.jpg',
                './Title': './src/Title/Title',
                './Description': './src/Description/Description',
                './MenuButton': './src/MenuButton/MenuButton',
            },
            shared: require('./package.json').dependencies,
        }) as any,
    ],
};

export default config;
