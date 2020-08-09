import * as React from 'react';
import Main from 'shell/Main';
import vietnam1Image from 'shell/Images/Vietnam1.jpg';
import Title from 'shell/Title';
import Description from 'shell/Description';

export const About: React.FunctionComponent = () => {
    const [menuShown, setMenuShown] = React.useState(false);
    return (
        <Main backgroundImage={vietnam1Image} showMenu={menuShown} setMenuShown={setMenuShown}>
            <Title>About me.</Title>
            <Description>My name is Christopher Horobin. I am from Leicestershire, United Kingdom.</Description>
            <Description>
                I've been a keen software developer for the majority of the past decade. I've worked on a variety of
                different lanaguages and technologies but since 2016 I've been mainly interested in creating Single Page
                Applications. In particular using Typescript, React and .NET Core. But I'm always trying to learn and
                improve as a software developer.
            </Description>
            <Description>In my down time, I'm an avid traveller and snowboarder</Description>
        </Main>
    );
};

export { About as default };
