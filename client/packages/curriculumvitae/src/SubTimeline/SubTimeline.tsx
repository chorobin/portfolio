import styled from 'styled-components';

export const SubTimelineHeader = styled.div``;

export const SubTimeline = styled.div`
    position: relative;

    :before {
        content: '';
        z-index: 1;
        position: absolute;
        width: 6px;
        background-color: #68b0ab;
        left: 0px;
        bottom: 0px;
        top: 0px;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
    }
`;
