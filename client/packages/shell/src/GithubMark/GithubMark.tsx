import * as React from 'react';
import styled from 'styled-components';
import githubMarkImage from './Github-Mark-64px.png';

const ButtonContainer = styled.a`
    position: absolute;
    top: 32px;
    right: 32px;
`;

const ButtonImage = styled.img`
    border-radius: 50%;
    border: none;
    text-align: center;
    text-decoration: none;
    background-size: cover;
    fill: white;
    transition: 1s box-shadow;
    filter: brightness(0) invert(1);

    :focus {
        outline: none;
    }

    :hover {
        box-shadow: 0px 0px 64px 0px white;
        cursor: pointer;
    }
`;

export const GithubMark: React.FunctionComponent = () => (
    <ButtonContainer href="https://github.com/chorobin/portfolio" target="_blank">
        <ButtonImage src={githubMarkImage} />
    </ButtonContainer>
);
