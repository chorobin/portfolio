import * as React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuItemContainer = styled.div<{ columnSpan?: number; rowSpan?: number }>`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    width: 100%;
    height: 100%;
`;

const Text = styled.span`
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 3rem;
    background-color: rgba(0, 0, 0, 0.25);
    text-shadow: 0px 0px 60px black;
    cursor: pointer;
    transition: background-color 0.5s, backdrop-filter 0.5s;
    backdrop-filter: blur(2px);
    border-color: transparent;

    :hover {
        background-color: rgba(0, 0, 0, 0);
        backdrop-filter: blur(0px);
    }
`;

const activeClassName = 'nav-item-active';
const MenuLink = styled(NavLink).attrs<{ activeClassName: string }>({
    activeClassName,
})`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;

    &.${activeClassName} {
        display: none;
    }
`;

export const MenuItem: React.FunctionComponent<{
    image: string;
    text: string;
    to: string;
    className?: string;
}> = ({ image, text, to, className }) => (
    <MenuLink to={to} className={className}>
        <MenuItemContainer>
            <Image src={image} />
            <Text>{text}</Text>
        </MenuItemContainer>
    </MenuLink>
);
