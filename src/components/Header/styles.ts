import styled from 'styled-components';

export const Container = styled.div` 
    height: 70px;   
    background-color: #268C77;
    border-bottom: 1px solid #C6C6C1;
`;

export const Content = styled.div`
    img{
      width: 80px;
      height: 70px;
      cursor: pointer;
    }

    width: 73%; //896 é 73% da lagura do container
    margin: 0 auto;
    height: 70px;   
    display: flex;
    align-items: center;
    background: transparent;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: 300px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150x;
    height: 50px;

    background-color: transparent;

    font-size: 1.2rem;
    font-weight: medium;
    color: #2d2d2d;

    &:hover{
        color: #C6C6C1;
    }

    &+button{
        margin-left: 20px;
    }
`;
