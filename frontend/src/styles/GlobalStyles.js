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
    --brown-primary: rgb(129 59 1);
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

    --main-color: #ff7300;
    --primary-color: #c18500;
    --secondary-color: #7c8b00;
    --color1: #248900;
    --color2: #008132;
    --color3: #00765e;
    --color4: #032c6eff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    /* font-family: "Poppins", sans-serif; */
    font-family: "EMprint", sans-serif !important;
  };

  body {
    max-width: 2000px;
    width: 100%;
    margin: auto;
    /* border: 2px solid red; */
    overflow-x: hidden !important;
    /* background-color: #0d1117; */
    /* background-color: #e6edf3; */
    color: #e6edf3;
    color: #0d1117;
    font-family: "EMprint", sans-serif !important;
  };

  html, body, h1, h2, h3, h4, h5, h6, p, ul, li {
    font-family: "EMprint", sans-serif !important;
  }

  a {
    text-decoration: none;
    color: #000;
    font-family: "EMprint", sans-serif !important;
  }

  button {
    border: none;
    outline: none;
    font-family: "EMprint", sans-serif !important;
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
    font-family: "EMprint", sans-serif !important;

    &:focus {
      border: none;
    outline: none;
    }
  }

  .activeHeader {
    background: var(--main-color);
    max-width: 2000px !important;
	width: 100% !important;
  }


.embla__container {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: "EMprint", sans-serif !important;

}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}

.line {
  transform: translateY(100%);
  will-change: transform;
}
`;
