import * as React from 'react';
import canadaImage from 'shell/Images/Canada.jpg';
import Main from 'shell/Main';
import Title from 'shell/Title';
import Description from 'shell/Description';

export const Home: React.FunctionComponent = () => {
    const [menuShown, setMenuShown] = React.useState(false);
    return (
        <Main backgroundImage={canadaImage} showMenu={menuShown} setMenuShown={setMenuShown}>
            <Title>Welcome, my name is Christopher Horobin</Title>
            <Description>
                I'm an enthusiastic backend and frontend developer. I also love travelling and snowboarding!
            </Description>
        </Main>
    );
};

export { Home as default };
