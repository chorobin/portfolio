import * as React from 'react';
import styled, { css } from 'styled-components';
import { Menu } from '../Menu/Menu';
import { GithubMark } from '../GithubMark/GithubMark';

const MainContainer = styled.div`
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    height: 100vh;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;

    animation-name: titleanimation;
    animation-duration: 1s;

    @keyframes titleanimation {
        from {
            overflow-y: hidden;
        }
        to {
            overflow-y: hidden;
        }
    }

    &.fade-enter {
        opacity: 0;
        z-index: 1;
        overflow-y: hidden;
    }
    &.fade-enter-active {
        opacity: 1;
        transition: opacity 2s;
        z-index: 1;
        overflow-y: hidden;
    }
    &.fade-exit {
        opacity: 1;
        z-index: 0;
        overflow: hidden;
        overflow-y: hidden;
    }
    &.fade-exit-active {
        opacity: 0;
        transition: opacity 2s;
        z-index: 0;
        overflow-y: hidden;
    }
`;

const BackgroundContainer = styled.div<{
    backgroundImage: string;
    smallBackgroundImage: string;
}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${(props) =>
        css`
            background-position: center center;
            background-repeat: no-repeat;

            background-attachment: fixed;
            background-size: cover;

            @media (min-width: 768px) {
                background-image: url(${props.smallBackgroundImage});
            }

            @media (min-width: 1920px) {
                background-image: url(${props.backgroundImage});
            }
        `}
    transition: 1s;
`;

const ContentContainer = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    width: 70%;
    margin: auto;

    @media (min-width: 768px) {
        width: 90%;
    }

    @media (min-width: 1920px) {
        width: 70%;
    }
`;

const MeContainer = styled.div<{ show: boolean }>`
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
    opacity: 0;
    transition: visibility 0.2s, opacity 0.2s;
    opacity: ${(props) => (props.show ? 1 : 0)};
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    height: ${(props) => (props.show ? 'auto' : 0)};
    overflow: hidden;
    animation-name: titleanimation;
    animation-duration: 1s;
    text-align: center;

    @keyframes titleanimation {
        from {
            position: relative;
            bottom: -100vh;
        }
        to {
            position: relative;
            bottom: 0px;
        }
    }
`;

export const Main: React.FunctionComponent<{
    showMenu?: boolean;
    setMenuShown?: (menuShown: boolean) => void;
    backgroundImage: string;
    smallBackgroundImage: string;
}> = ({ showMenu, setMenuShown, backgroundImage, smallBackgroundImage, children }) => {
    return (
        <MainContainer>
            <ContentContainer>
                <MeContainer show={!showMenu}>{children}</MeContainer>
            </ContentContainer>
            {setMenuShown && <Menu show={showMenu} onClose={() => setMenuShown(false)} />}
            <BackgroundContainer backgroundImage={backgroundImage} smallBackgroundImage={smallBackgroundImage} />
            <GithubMark />
        </MainContainer>
    );
};

export { Main as default };
