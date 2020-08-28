import * as React from 'react';
import styled, { css } from 'styled-components';
import earthImage from './Earth.svg';

const ButtonContainer = styled.a`
    padding: 20px;
`;

const ButtonImage = styled.img`
    padding: 10px;
    border: none;
    text-align: center;
    text-decoration: none;
    width: 100px;
    height: 100px;
    fill: #2185d0;
    transition: 2s transform;
    object-fit: contain;
    object-position: center;
    filter: drop-shadow(15px 5px 4px gray);

    :focus {
        outline: none;
    }

    :hover {
        cursor: pointer;
        animation-play-state: running;
        transform: scale(1.2);
    }
`;

export const MenuButton: React.FunctionComponent<{ onClick: () => void; className: string }> = ({
    onClick,
    className,
}) => (
    <ButtonContainer className={className}>
        <ButtonImage src={earthImage} onClick={onClick} />
    </ButtonContainer>
);

export { MenuButton as default };
