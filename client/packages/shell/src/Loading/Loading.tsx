import styled from 'styled-components';

export const Loading = styled.div`
    background-color: white;

    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-active {
        opacity: 1;
        transition: opacity 2s;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-exit-active {
        opacity: 0;
        transition: opacity 2s;
    }
`;
