import * as React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
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

const Button: React.FunctionComponent<{ onClick: () => void; className: string; image: string }> = ({
    onClick,
    className,
    image,
}) => (
    <ButtonContainer className={className}>
        <ButtonImage src={image} onClick={onClick} />
    </ButtonContainer>
);

export { Button as default };
