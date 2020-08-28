import * as React from 'react';
import canada1920Image from 'shell/Images/Canada-1920.jpg';
import canada1024Image from 'shell/Images/Canada-1024.jpg';
import Main from 'shell/Main';
import Title from 'shell/Title';
import Description from 'shell/Description';
import MenuButton from 'shell/MenuButton';

export const Home: React.FunctionComponent = () => {
    const [menuShown, setMenuShown] = React.useState(false);
    return (
        <Main
            backgroundImage={canada1920Image}
            showMenu={menuShown}
            setMenuShown={setMenuShown}
            smallBackgroundImage={canada1024Image}
        >
            <Title>Welcome, my name is Christopher Horobin</Title>
            <Description>
                I'm an enthusiastic backend and frontend developer. I also love travelling and snowboarding!
            </Description>
            <MenuButton onClick={() => setMenuShown(true)}></MenuButton>
            <Description>Menu</Description>
        </Main>
    );
};

export { Home as default };
