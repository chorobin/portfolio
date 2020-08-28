import * as React from 'react';
import styled, { css } from 'styled-components';
import { CloseButton } from '../CloseButton/CloseButton';
import spain500Image from '../Images/Spain-500.jpg';
import vietnam5500Image from '../Images/Vietnam5-500.jpg';
import vietnam1500Image from '../Images/Vietnam1-500.jpg';
import canada500Image from '../Images/Canada-500.jpg';
import { MenuItem } from '../MenuItem/MenuItem';

const MenuContainer = styled.div<{ show: boolean }>`
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    position: fixed;
    visibility: hidden;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    transition: 0.75s;
    ${(props) =>
        props.show &&
        css`
            opacity: 1;
            visibility: visible;
        `}
`;

const MenuContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 500px);
    grid-auto-rows: 389px;
    grid-gap: 1rem;
    justify-content: center;
    width: 75%;
    align-items: center;
    justify-items: center;
`;

const HomeMenuItem = styled(MenuItem)``;

const AboutMenuItem = styled(MenuItem)``;

const ResumeMenuItem = styled(MenuItem)``;

const BlogMenuItem = styled(MenuItem)``;

export const Menu: React.FunctionComponent<{ show: boolean; onClose: () => void }> = ({ show, onClose }) => (
    <MenuContainer show={show}>
        <CloseButton onClick={onClose} />
        <MenuContent>
            <AboutMenuItem to="/about" image={vietnam1500Image} text="About Me" />
            <ResumeMenuItem to="/curriculumvitae" image={vietnam5500Image} text="Currivulum Vitae" />
            <BlogMenuItem to="/blog" image={spain500Image} text="Blog" />
            <HomeMenuItem to="/home" image={canada500Image} text="Home" />
        </MenuContent>
    </MenuContainer>
);
