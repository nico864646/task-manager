import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 50px auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 400px;
    margin: 0 auto;
    background-color: #268C77;
    border-radius: 15px;
    
    
    h1{
        font-family: 'Oswald', sans-serif;
        color: #2d2d2d;
        margin-bottom: 20px;
    }
    
    .login-btn, .git-login-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 30px;
        border-radius: 15px;
    }
    
    .login-btn{
        margin: 20px 0 10px;
    }
    
    .git-login-btn{
            background-color: #333;
            color: #f5f5f5;
            
            .git-login-logo{
                width: 25px;
                height: 25px;
                margin-left: 10px;
            }
        }
        
        p{
            cursor: pointer;
            color: white;
            margin-top: 20px;
        }
`;

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    padding: 5px;
    background-color: #E74C3C;
    color: white;
    border-radius: 5px;
`;