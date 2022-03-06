import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 225px;
    height: 50px;
    margin-left: auto;

    border-radius: 15px;
    background-color: #2D2D2D;

  p{
    font-weight: bold;
    color: #C6C6C1;
  }

  .user-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid white;
  }

  .user-name{
    margin-left: 10px;
  }
    
  .git-login-label{
      display: flex;
      align-items: center;
      justify-content: center;
      .git-login-logo {
          width: 30px;
          height: 30px;
          margin-left: 10px;
      }
  }

    .close-icon{
        display: flex;
        align-items: center;
        width: 15px;
        height: 15px;
        margin-left: 30px;
        color: #C6C6C1;
        cursor: pointer;
    }
`;
