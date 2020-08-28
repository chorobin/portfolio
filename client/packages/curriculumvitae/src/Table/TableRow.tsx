import styled from 'styled-components';

export const TableRow = styled.tr`
    display: flex;

    & > *:first-child {
        flex: 5 5 0;
    }

    & > * {
        flex: 1 1 0;
    }
`;
