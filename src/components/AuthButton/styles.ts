import styled from 'styled-components';

export const Container = styled.button`
    .main-login, .git-login{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 25px;
        border-radius: 15px;
        color: #2D2D2D;
        background-color: #C6C6C1;
    }
    .git-login{
      background-color: #333;
      color: #f5f5f5;

        .git-login-logo{
          margin-left: 5px;
        }
    }
`;
