import * as React from 'react';
import Main from 'shell/Main';
import Title from 'shell/Title';
import spain1920Image from 'shell/Images/Spain-1920.jpg';
import spain1024Image from 'shell/Images/Spain-1024.jpg';
import { AddButton } from '../AddButton/AddButton';
import Description from 'shell/Description';

export const App: React.FunctionComponent = () => (
    <Main backgroundImage={spain1920Image} smallBackgroundImage={spain1024Image}>
        <Title>Admin</Title>
        <Description>Remove and add new blog posts</Description>
        <AddButton onClick={() => console.log('hello world!')} />
    </Main>
);
