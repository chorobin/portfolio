import * as React from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import styled, { css } from 'styled-components';
import earthImage from './Earth.svg';
import { Menu } from '../Menu/Menu';
import { Description } from '../Description/Description';
import { GithubMark } from '../GithubMark/GithubMark';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    &.fade-enter {
        opacity: 0;
        z-index: 1;
    }
    &.fade-enter-active {
        opacity: 1;
        transition: opacity 2s;
        z-index: 1;
    }
    &.fade-exit {
        opacity: 1;
        z-index: 0;
    }
    &.fade-exit-active {
        opacity: 0;
        transition: opacity 2s;
        z-index: 0;
    }
`;

const BackgroundContainer = styled.div<{ backgroundImage: string }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    ${(props) =>
        css`
            background-image: url(${props.backgroundImage});
        `}
    background-size: cover;
    background-position: center;
    transition: 1s;
`;

const ContentContainer = styled.div`
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
    flex-flow: column nowrap;
    width: 70%;
`;

const MeContainer = styled.div`
    border: 5px solid rgb(51, 66, 91);
    border-radius: 10px;
    padding: 40px;
    color: white;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 0px 60px black;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    box-shadow: 0px 0px 32px 0px black;
    background-color: rgba(51, 66, 91, 0.7);
`;

export const Main: React.FunctionComponent<{
    showMenu: boolean;
    setMenuShown: (menuShown: boolean) => void;
    backgroundImage: string;
}> = ({ showMenu, setMenuShown, backgroundImage, children }) => {
    return (
        <MainContainer>
            <ContentContainer>
                {!showMenu && (
                    <MeContainer>
                        {children}
                        <MenuButton src={earthImage} onClick={() => setMenuShown(true)}></MenuButton>
                        <Description>Menu</Description>
                    </MeContainer>
                )}
            </ContentContainer>
            <Menu show={showMenu} onClose={() => setMenuShown(false)} />
            <BackgroundContainer backgroundImage={backgroundImage} />
            <GithubMark />
        </MainContainer>
    );
};

export { Main as default };
