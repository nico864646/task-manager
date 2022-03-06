import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {  
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   body{
       background: #2D2D2D;
       font-size: 16px;
       color: #00CCA7;
       font-family: 'Roboto', sans-serif;
   }

   button{
       cursor: pointer;
       outline: none;
       border: none;
   }

   input{
    outline: none;
    border: none;
   }
`;