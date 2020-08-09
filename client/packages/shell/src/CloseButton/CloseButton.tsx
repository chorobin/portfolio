import * as React from 'react';
import styled from 'styled-components';

export const CloseButton = styled.a`
    position: absolute;
    left: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.5;

    :hover {
        opacity: 1;
        cursor: pointer;
    }

    :before,
    :after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: white;
    }

    :before {
        transform: rotate(45deg);
    }

    :after {
        transform: rotate(-45deg);
    }
`;
