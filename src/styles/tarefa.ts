import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 50px auto;
`;

export const Content = styled.div`
  width: 100%;  
  flex-direction: column;
  display: flex;
`;

export const TaskInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2{
    display: flex;
    align-self: start;
    margin: 0 0 10px 5px;
    font-size: 1.8rem;
    color: #2D2D2D;
  }

  span{
    color: #C6C6C1;
    margin-right: 10px;
  }
`;

//
export const TaskArea = styled.form`
  width: 80%;
  height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;
  background-color: #268C77;
  border-radius: 15px;
 
  textarea{
      width: 100%;
      height: 100px;
      padding: 10px;
      font-size: 1rem;
      font-weight: 500;
      resize: none;
      background-color: #C6C6C1;
      border-radius: 15px;
  }

  button{
    width: 100%;
    height: 25px;
    margin-top: 10px;
    border-radius: 15px;
    color: #C6C6C1;
    font-weight: bold;
    background-color: #2D2D2D;
    

    &:hover{
      transition: 300ms;
      background-color: #C6C6C1;
      color: #2D2D2D;
    }
  }
`;

//Lista de tarefas
export const TaskList = styled.div`
  width: 80%;
  background-color: #268C77;
  border-radius: 15px;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    font-size: 1.5rem;
    color: #2d2d2d;
  }

  .list-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
    padding: 5px 10px;
    background-color: #c6c6c1;
    border-radius: 15px;
    
    span{
      margin: 5px 0;
      color: #2d2d2d;
      span{
        color: #268C77;
      }
    }

    .list-description{
      background-color: #2d2d2d;
      border-radius: 10px;
      padding: 10px;
    }

    .list-buttons{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100;
      padding: 0 20px;
      margin-top: 5px;

      button{
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background:  transparent;

        span{
          font-weight: 700;
          margin-right: 4px;
        }
      }
      .edit{
        color: #2d2d2d;
      }
      .delete{
        color: red;
      }
    }
  }
`;
