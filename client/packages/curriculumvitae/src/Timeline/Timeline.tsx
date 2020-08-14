import styled from 'styled-components';

export const Timeline = styled.div`
    position: relative;

    :after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: white;
        top: 0px;
        bottom: 0px;
        border-radius: 5px;
    }
`;
