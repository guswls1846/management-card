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
        background-color: ${theme.colors.B_1};
        font-family: "Campton", "Georgia", "Apple SD Gothic Neo", 'Noto Sans KR';
    
    }

    p,span,div,h1,h2,h3,pre,select{
        line-height : 130%;
    }

    @font-face {
        font-family: "Campton";
        font-weight: 400;
        src: url("/fonts/campton-book.otf") format("opentype");
    }

    @font-face {
        font-family: "Campton";
        font-weight: 700;
        src: url("/fonts/campton-bold.otf") format("opentype");
    }

    @font-face {
        font-family: "Georgia";
        font-weight: 400;
        src: url("/fonts/Georgia-Regular.otf") format("opentype"),         
    }

    @font-face {
        font-family: "Georgia";
        font-weight: 700;
        src: url("/fonts/Georgia-bold.otf") format("opentype"),
            
    }

    @font-face {
        font-family: "Apple SD Gothic Neo";
        font-weight: 400;
        src: url("/fonts/AppleSDGothicNeoR.ttf") format("truetype");
    }

    @font-face {
        font-family: "Apple SD Gothic Neo";
        font-weight: 700;
        src: url("/fonts/AppleSDGothicNeoB.ttf") format("truetype");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-weight: 400;
        src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-weight: 700;
        src: url("/fonts/NotoSansKR-Bold.otf") format("opentype");
    }

    

    /* font-weight */
    .bold {
        font-weight:700;
    }

    .book {
        font-weight:400;
    }

     /* font-family Defalut = Campton */
    .geo {
        font-family:Georgia;
    }
    .campton {
        font-family: "Campton";
    }
     /* line-height Defalut = 130% */
     ._180 {
        line-height:180%;
    }

        
      /* font-size */
    .H1_90{
        font-size : 9rem;
    }
    .H1_60 {
        font-size: 6rem;
    }
    .H2_50 {
        font-size: 5rem;     
    }

    .H3_40 {
        font-size: 4rem;
    }

    .T1_30{
        font-size: 3rem;
    }
  

    .T2_25 {
        font-size: 2.5rem;
        
    }

    .T3_20 {
        font-size: 2rem;
    }

    .B1_18 {
        font-size: 1.8rem;
    }

    .B2_15 {
        font-size: 1.5rem;
    }
    .C_13 {
        font-size: 1.3rem;
    }



      /* font-size mediaQuery */
    .H1{
        font-size : 9rem;
    }
    .H2 {
        font-size: 6rem;
    }
    .H3 {
        font-size: 5rem;     
    }
    .H4 {
        font-size: 4rem;
    }
    .T1{
        font-size: 3rem;
    }
    .T2 {
        font-size: 2.5rem;
    }
    .T3 {
        font-size: 2rem;
    }
    .B1 {
        font-size: 1.8rem;
    }
    .B2 {
        font-size: 1.5rem;
    }
    .C {
        font-size: 1.3rem;
    }

    @media (max-width : 414px){
    
    .H2_50 {
        font-size: 3rem;     
    }
    .T2_25{
        font-size :1.8rem;
    }
    .T3_20{
        font-size : 1.8rem;
    }
    .B1_18{
        font-size : 1.3rem;
    } 




    
    .H1{
        font-size : 9rem;
    }
    .H2 {
        font-size: 6rem;
    }
    .H3 {
        font-size: 3rem;     
    }
    .H4 {
        font-size: 3rem;
    }
    .T1{
        font-size: 2rem;
    }
    .T2 {
        font-size: 1.8rem;
    }
    .T3 {
        font-size: 1.8rem;
    }
    .B1 {
        font-size: 1.5rem;
    }
    .B2 {
        font-size: 1.5rem;
    }
    .C {
        font-size: 1.3rem;
    }
    }







    /* font-color */
    .B_1 {
        color: ${theme.colors.B_1};
    }


    /* mrgin-top, padding-top*/
    .mt-5{
        margin-top:  ${theme.spacing._5};
    }
        
    .pt-5 {
        padding-top:  ${theme.spacing._5};
    }

    .mt-8{
        margin-top:  ${theme.spacing._8};
    }
        
    .pt-8 {
        padding-top:  ${theme.spacing._8};
    }

    .mt-10{
        margin-top:  ${theme.spacing._10};
    }
        
    .pt-10 {
        padding-top:  ${theme.spacing._10};
    }
    .mt-20{
        margin-top:  ${theme.spacing._20};
    }
        
    .pt-20 {
        padding-top:  ${theme.spacing._20};
    }
    .mt-30{
        margin-top:  ${theme.spacing._30};
    }
        
    .pt-30 {
        padding-top:  ${theme.spacing._30};
    }
    .mt-40{
        margin-top:  ${theme.spacing._40};
    }
        
    .pt-40 {
        padding-top:  ${theme.spacing._40};
    }
    .mt-60{
        margin-top:  ${theme.spacing._60};
    }
        
    .pt-60 {
        padding-top:  ${theme.spacing._60};
    }
    .mt-80{
        margin-top:  ${theme.spacing._80};
    }
        
    .pt-80 {
        padding-top:  ${theme.spacing._80};
    }

    .mt-100{
        margin-top:  ${theme.spacing._100};
    }
        
    .pt-100 {
        padding-top:  ${theme.spacing._100};
    }



    .mt-150{
        margin-top:  ${theme.spacing._150};
    }
        
    .pt-150 {
        padding-top:  ${theme.spacing._150};
    }

    .mt-200{
        margin-top:  ${theme.spacing._200};
    }
        
    .pt-200 {
        padding-top:  ${theme.spacing._200};
    }

    .mt-300{
        margin-top:  ${theme.spacing._300};
    }
        
    .pt-300 {
        padding-top:  ${theme.spacing._300};
    }


  /* mrgin-right, padding-right*/
    .mr-5{
        margin-right:  ${theme.spacing._5};
    }
        
    .pr-5 {
        padding-right:  ${theme.spacing._5};
    }

    .mr-8{
        margin-right:  ${theme.spacing._8};
    }
        
    .pr-8 {
        padding-right:  ${theme.spacing._8};
    }

    .mr-10{
        margin-right:  ${theme.spacing._10};
    }
        
    .pr-10 {
        padding-right:  ${theme.spacing._10};
    }
    .mr-20{
        margin-right:  ${theme.spacing._20};
    }
        
    .pr-20 {
        padding-right:  ${theme.spacing._20};
    }
    .mr-30{
        margin-right:  ${theme.spacing._30};
    }
        
    .pr-30 {
        padding-right:  ${theme.spacing._30};
    }
    .mr-40{
        margin-right:  ${theme.spacing._40};
    }
        
    .pr-40 {
        padding-right:  ${theme.spacing._40};
    }
    .mr-60{
        margin-right:  ${theme.spacing._60};
    }
        
    .pr-60 {
        padding-right:  ${theme.spacing._60};
    }
    .mr-80{
        margin-right:  ${theme.spacing._80};
    }
        
    .pr-80 {
        padding-right:  ${theme.spacing._80};
    }

    .mr-100{
        margin-right:  ${theme.spacing._100};
    }
        
    .pr-100 {
        padding-right:  ${theme.spacing._100};
    }


    .mr-150{
        margin-right:  ${theme.spacing._150};
    }
        
    .pr-150 {
        padding-right:  ${theme.spacing._150};
    }

    .mr-200{
        margin-right:  ${theme.spacing._200};
    }
        
    .pr-200 {
        padding-right:  ${theme.spacing._200};
    }

    .mr-300{
        margin-right:  ${theme.spacing._300};
    }
        
    .pr-300 {
        padding-right:  ${theme.spacing._300};
    }

     /* mrgin-bottom, padding-bottom*/
    .mb-5{
        margin-bottom:  ${theme.spacing._5};
    }
        
    .pb-5 {
        padding-bottom:  ${theme.spacing._5};
    }

    .mb-8{
        margin-bottom:  ${theme.spacing._8};
    }
        
    .pb-8 {
        padding-bottom:  ${theme.spacing._8};
    }

    .mb-10{
        margin-bottom:  ${theme.spacing._10};
    }
        
    .pb-10 {
        padding-bottom:  ${theme.spacing._10};
    }
    .mb-20{
        margin-bottom:  ${theme.spacing._20};
    }
        
    .pb-20 {
        padding-bottom:  ${theme.spacing._20};
    }
    .mb-30{
        margin-bottom:  ${theme.spacing._30};
    }
        
    .pb-30 {
        padding-bottom:  ${theme.spacing._30};
    }
    .mb-40{
        margin-bottom:  ${theme.spacing._40};
    }
        
    .pb-40 {
        padding-bottom:  ${theme.spacing._40};
    }
    .mb-60{
        margin-bottom:  ${theme.spacing._60};
    }
        
    .pb-60 {
        padding-bottom:  ${theme.spacing._60};
    }
    .mb-80{
        margin-bottom:  ${theme.spacing._80};
    }
        
    .pb-80 {
        padding-bottom:  ${theme.spacing._80};
    }

    .mb-100{
        margin-bottom:  ${theme.spacing._100};
    }
        
    .pb-100 {
        padding-bottom:  ${theme.spacing._100};
    }


    .mb-150{
        margin-bottom:  ${theme.spacing._150};
    }
        
    .pb-150 {
        padding-bottom:  ${theme.spacing._150};
    }

    .mb-200{
        margin-bottom:  ${theme.spacing._200};
    }
        
    .pb-200 {
        padding-bottom:  ${theme.spacing._200};
    }

    .mb-300{
        margin-bottom:  ${theme.spacing._300};
    }
        
    .pb-300 {
        padding-bottom:  ${theme.spacing._300};
    }

     /* mrgin-left, padding-left*/
     .ml-5{
        margin-left:  ${theme.spacing._5};
    }
        
    .pl-5 {
        padding-left:  ${theme.spacing._5};
    }

    .ml-8{
        margin-left:  ${theme.spacing._8};
    }
        
    .pl-8 {
        padding-left:  ${theme.spacing._8};
    }

    .ml-10{
        margin-left:  ${theme.spacing._10};
    }
        
    .pl-10 {
        padding-left:  ${theme.spacing._10};
    }
    .ml-20{
        margin-left:  ${theme.spacing._20};
    }
        
    .pl-20 {
        padding-left:  ${theme.spacing._20};
    }
    .ml-30{
        margin-left:  ${theme.spacing._30};
    }
        
    .pl-30 {
        padding-left:  ${theme.spacing._30};
    }
    .ml-40{
        margin-left:  ${theme.spacing._40};
    }
        
    .pl-40 {
        padding-left:  ${theme.spacing._40};
    }
    .ml-60{
        margin-left:  ${theme.spacing._60};
    }
        
    .pl-60 {
        padding-left:  ${theme.spacing._60};
    }
    .ml-80{
        margin-left:  ${theme.spacing._80};
    }
        
    .pl-80 {
        padding-left:  ${theme.spacing._80};
    }

    .ml-100{
        margin-left:  ${theme.spacing._100};
    }
        
    .pl-100 {
        padding-left:  ${theme.spacing._100};
    }


    .ml-150{
        margin-left:  ${theme.spacing._150};
    }
        
    .pl-150 {
        padding-left:  ${theme.spacing._150};
    }

    .ml-200{
        margin-left:  ${theme.spacing._200};
    }
        
    .pl-200 {
        padding-left:  ${theme.spacing._200};
    }

    .ml-300{
        margin-left:  ${theme.spacing._300};
    }
        
    .pl-300 {
        padding-left:  ${theme.spacing._300};
    }

    a{
        text-decoration:none;
        color:inherit;
    };

    
    ol, ul, li {
        list-style: none;
    };

    img {
        display: block;
        width: 100%;
        height: 100%;
    };

    img.cursor {
        cursor:pointer;
    }
    
    
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
        outline : none;
        border : none;
    };


.border-line-B_3 {
    border-top: 1px solid  ${theme.colors.B_3};;
  }
  .border-line-G_5 {
    border-top: 4px solid  ${theme.colors.G_5};;
  }





  /**mediaQuery*/


  .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1360px;
        padding:0px;
        margin:0 auto;
     };
    .col-xl-12{
        flex: 0 0 100%;
        max-width: 100%;
     }
    .col-xl-9{
        flex: 0 0 73.97058823529412%;
        max-width: 73.97058823529412%;
     }
    .col-xl-8 {
        flex: 0 0 65.29411764705883%;
        max-width: 65.29411764705883%;
    }
    .col-xl-7 {
        flex: 0 0 56.61764705882353%;
        max-width: 56.61764705882353%;
    }
    .col-xl-6 {
        flex: 0 0 47.94117647058824%;
        max-width:47.94117647058824%;
    }
    .col-xl-5 {
        flex: 0 0 39.26470588235294%;
        max-width:39.26470588235294%;
    }
    .col-xl-4 {
        flex: 0 0 30.58823529411765%;
        max-width:30.58823529411765%;
    }
    .col-xl-3{
        flex: 0 0 21.91176470588235%;
        max-width:21.91176470588235%;
    }

    
  @media  (max-width: 1024px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1024px;
        padding: 0 30px;
        margin:0 auto;
    };
    .col-lg-12{
        flex: 0 0 100%;
        max-width: 100%;
    }
    .col-lg-9{
        flex: 0 0 73.97058823529412%;
        max-width: 73.97058823529412%;
    }
    .col-lg-8 {
        flex: 0 0 65.29411764705883%;
        max-width: 65.29411764705883%;
    }
    .col-lg-7 {
        flex: 0 0 56.3235294117647%;
        max-width: 56.3235294117647%;
    }
    .col-lg-6 {
        flex: 0 0 50%;
        max-width:50%;
    }
    .col-lg-5 {
        flex: 0 0 39.26470588235294%;
        max-width:39.26470588235294%;
    }
    .col-lg-4 {
        flex: 0 0 30.58823529411765%;
        max-width:30.58823529411765%;
    }
    .col-lg-3{
        flex: 0 0 21.91176470588235%;
        max-width:21.91176470588235%;
    }
 
    };
   

    @media (max-width: 414px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 414px;
        padding: 0 25px;
        margin:0 auto;
     };

     .col-12{
        flex: 0 0 100%;
        max-width: 100%;
     }
    .col-8 {
        flex: 0 0 65.29411764705883%;
        max-width: 65.29411764705883%;
    }
     .col-7 {
        flex: 0 0 56.3235294117647%;
        max-width: 56.3235294117647%;
    }
    .col-6 {
        flex: 0 0 48.30769230769231%;
        max-width:48.30769230769231%;
    }
    .col-5 {
        flex: 0 0 39.26470588235294%;
        max-width:39.26470588235294%;
    }
    .col-4 {
        flex: 0 0 30.58823529411765%;
        max-width:30.58823529411765%;
    }
    .col-3{
        flex: 0 0 21.91176470588235%;
        max-width:21.91176470588235%;
    }

 
    };






`;

export default GlobalStyle;
