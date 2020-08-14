import * as React from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import styled, { css } from 'styled-components';
import earthImage from './Earth.svg';
import { Menu } from '../Menu/Menu';
import { Description } from '../Description/Description';
import { GithubMark } from '../GithubMark/GithubMark';

const MainContainer = styled.div`
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
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
    align-items: center;
    flex-flow: column nowrap;
    width: 70%;
    margin: auto;
`;

const MeContainer = styled.div`
    padding: 40px;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    background-color: rgba(51, 66, 91, 0.2);
    margin: auto;
    background: rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
    box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
    margin: 1rem 0;
    padding: 1em 1em;
    border-radius: 0.28571429rem;
    border-top-left-radius: 0.285714rem;
    border-top-right-radius: 0.285714rem;
    border-bottom-right-radius: 0.285714rem;
    border-bottom-left-radius: 0.285714rem;
    border: 1px solid rgba(34, 36, 38, 0.15);
`;

export const Main: React.FunctionComponent<{
    showMenu: boolean;
    setMenuShown: (menuShown: boolean) => void;
    backgroundImage: string;
}> = ({ showMenu, setMenuShown, backgroundImage, children }) => {
    return (
        <MainContainer>
            <ContentContainer>{!showMenu && <MeContainer>{children}</MeContainer>}</ContentContainer>
            <Menu show={showMenu} onClose={() => setMenuShown(false)} />
            <BackgroundContainer backgroundImage={backgroundImage} />
            <GithubMark />
        </MainContainer>
    );
};

export { Main as default };
