import * as React from 'react';
import styled from 'styled-components';

const MenuItemContainer = styled.div`
    position: relative;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    border-radius: 10px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-color: transparent;
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
    cursor: pointer;
    transition: background-color 0.5s, backdrop-filter 0.5s;
    backdrop-filter: blur(2px);
    border-color: transparent;

    :hover {
        background-color: rgba(0, 0, 0, 0);
        backdrop-filter: blur(0px);
    }
`;

export const MenuItem: React.FunctionComponent<{ image: string; text: string }> = ({ image, text }) => (
    <MenuItemContainer>
        <Image src={image} />
        <Text>{text}</Text>
    </MenuItemContainer>
);
