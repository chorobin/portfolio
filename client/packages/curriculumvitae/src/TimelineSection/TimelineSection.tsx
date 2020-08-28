import * as React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{ animationDelay: string }>`
    position: relative;
    background-color: inherit;
    padding: 20px 40px;
    animation-name: timeline-animation;
    ${(props) =>
        css`
            animation-duration: ${props.animationDelay}s;
        `}
    z-index: 1;

    @keyframes timeline-animation {
        from {
            opacity: 0;
            position: relative;
            bottom: -100vh;
        }
        to {
            opacity: 1;
            position: relative;
            bottom: 0px;
        }
    }

    :after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        left: -9px;
        background: #68b0ab;
        box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
        top: 45px;
        border-radius: 50%;
        z-index: 1;
    }

    :before {
        content: ' ';
        height: 0;
        position: absolute;
        top: 50px;
        width: 0;
        z-index: 1;
        left: 32px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }
`;

const Content = styled.div`
    background: #fff;
    -webkit-box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
    margin: 1rem 0;
    padding: 1em 1em;
    border-radius: 0.28571429rem;
    border: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.8);
`;

export const TimelineSection: React.FunctionComponent<{ className?: string; animationDelay: number }> = ({
    className,
    children,
    animationDelay,
}) => (
    <Container animationDelay={animationDelay} className={className}>
        <Content>{children}</Content>
    </Container>
);
