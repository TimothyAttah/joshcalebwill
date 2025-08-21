import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'EMprint';
  src: url('fonts/EMprint Bold.woff2') format('woff2');
  src: url('fonts/EMprint Light.woff2') format('woff2');
  src: url('fonts/EMprint Regular.woff2') format('woff2');
  /* src: url('fonts/EMprint Semibold.woff2') format('woff2'); */

}

  :root {
    --crimson: rgb(220, 20, 60);
    --brown: rgb(255, 115, 0);
    --green: rgb(81, 128, 11);
    --blue:rgb(40, 115, 208);
    --black: #000;

    --first-color: hsl(220, 68%, 54%);
    --first-color-lighten: hsl(220, 68%, 97%);
    --title-color: hsl(220, 48%, 28%);
    --text-color: hsl(220, 12%, 45%);
    --body-color: hsl(220, 100%, 99%);
    --color-black: #000000;
    --color-light-blue: #009dd9;
    --color-medium-blue: #0066b2;
    --color-dark-blue: #0b2d71;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    /* font-family: "Poppins", sans-serif; */
    font-family: "EMprint", sans-serif;
  }

  body {
    max-width: 2000px;
    width: 100%;
    margin: auto;
    /* border: 2px solid red; */
    overflow-x: hidden;
    /* background-color: #0d1117; */
    /* background-color: #e6edf3; */
    color: #e6edf3;
    color: #0d1117;
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

  input {
    border: none;
    outline: none;

    &:focus {
      border: none;
    outline: none;
    }
  }
`;
