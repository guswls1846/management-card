import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    *{
        box-sizing:border-box;
    };  
    
    html{

        font-size:10px;
 
        /* @media (max-width: 1024px){
            font-size: 50%; 
        };
  
        @media (max-width: 414px){
            font-size: 39%; 
        };     */
    };

    body {
        padding: 0;
        margin: 0;

        font-family: "Campton", "Georgia", "Apple SD Gothic Neo", 'Noto Sans KR';
    
    }

    p,span,div,h1,h2,h3,pre,select{
        line-height : 130%;
    }

    `;
export default GlobalStyle;
