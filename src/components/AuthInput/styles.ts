import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;

    label{
        color: #2d2d2d;
        font-weight: 600;
        margin-bottom: 2.5px;
    }

    input{
        width: 250px;
        height: 25px;
        padding: 5px;
        border-radius: 5px;
    }
`;
