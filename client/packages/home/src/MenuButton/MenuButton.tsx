import * as React from 'react';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.div`
    padding: 20px;
`;

const ButtonImage = styled.img`
    border-radius: 50%;
    border: none;
    text-align: center;
    text-decoration: none;
    background-size: cover;
    width: 100px;
    height: 100px;
    fill: white;
    box-shadow: 0px 0px 32px 0px black;
    transition: 1s box-shadow;

    :focus {
        outline: none;
    }

    :hover {
        box-shadow: 0px 0px 64px 0px white;
        cursor: pointer;
    }
`;

export const MenuButton: React.FunctionComponent<{ src: string; onClick: () => void }> = ({ src, onClick }) => (
    <ButtonContainer>
        <ButtonImage src={src} onClick={onClick} />
    </ButtonContainer>
);
