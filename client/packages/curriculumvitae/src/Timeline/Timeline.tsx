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
        box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
    }
`;
