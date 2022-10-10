import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Epilogue', sans-serif;
    font-weight: 500;
  }
  #root {
    margin: 0 auto;
  }
  :root{
    /* colors */
    --pure-white: hsl(0, 0%, 100%);
    --almost-white: hsl(0, 0%, 98%);
    --light-gray: hsl(0, 0%, 68%);
    --medium-gray: hsl(0, 0%, 41%);
    --almost-black: hsl(0, 0%, 8%);
    /* font-size */
    --heading-large: 80px;
    --body-medium: 18px;
    --body-small: 14px;
    --button: 18px;
  }
  body{
    background-color: var(--almost-white);
  }
  a, button{
    cursor: pointer;
  }
`;
