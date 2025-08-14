import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    max-width: 2000px;
    width: 100%;
    margin: auto;
    border: 2px solid red;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    :focus {
      border: none;
     outline: none;
    }
  }

  ul li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

