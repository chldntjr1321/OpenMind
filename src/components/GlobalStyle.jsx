import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Actor','Pretendard', sans-serif;
    background-color: #F9F9F9;
  }`;

export default GlobalStyle;
