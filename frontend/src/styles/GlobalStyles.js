import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'EMprint';
  src: url('fonts/EMprint Bold.woff2') format('woff2');
  src: url('fonts/EMprint Light.woff2') format('woff2');
  src: url('fonts/EMprint Regular.woff2') format('woff2');
  src: url('fonts/EMprint Semibold.woff2') format('woff2');

}

@font-face {
  font-family: 'Gotham' ;
  src: url('fonts/Gotham Black.otf') format('otf');
}
  :root {
    --main-color-p: #b76e79;
    --main-color-g: #fdb515;
    --main-color-o: #f07537;
    --main-color: #ff7300;

    --base-color-green: hsl(128, 47%, 26%);
    --base-color-green-neg: hsl(from var(--base-color-green) h s calc(l - 10));
    --base-color-green-plus: hsl(from var(--base-color-green) h s calc(l + 10));

    --base-color-gold: hsl(35 100% 50%);
    --base-color-gold-neg: hsl(from var(--base-color-gold) h s calc(l - 10));
    --base-color-gold-plus: hsl(from var(--base-color-gold) h s calc(l + 10));

    --color-black: #000000;
    --color-light-blue: #009dd9;
    --color-medium-blue: #0066b2;
    --color-dark-blue: #0b2d71;
    --color-light-gray: #dbdcdd;
    --color-medium-gray: #8c8f93;
    --color-dark-gray: #6b6d6f;
    --color-light-green: #b2cc34;
    --color-medium-green: #769231;
    --color-dark-green: #444b0d;
    --color-light-orange: #faab18;
    --color-medium-orange: #e5601f;
    --color-dark-orange: #711b00;
    --color-light-purple: #ba3093;
    --color-medium-purple: #751269;
    --color-dark-purple: #3a0d36;
    --color-light-red: #e21836;
    --color-medium-red: #97002e;
    --color-dark-red: #58001c;
    --color-light-teal: #00b2bd;
    --color-medium-teal: #00708c;
    --color-dark-teal: #003653;
    --color-white: #ffffff;
    --color-offwhite: #f4f4f4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "EMprint", sans-serif !important;
    font-family: "GothamBlack", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: normal;

  }

  body {
    max-width: 2000px;
    width: 100%;
    margin: 0 auto;
    /* border: 2px solid red; */
    /* height: 100vh; */
    overflow-x: hidden;
    overflow-y: scroll !important;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6, p, li {
    text-transform: none;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    font-family: "EMprint", sans-serif !important;
    font-family: "GothamBlack", "Helvetica Neue", Helvetica, Arial, sans-serif;

    font-weight: 900 !important;
    text-align: left !important;
}

a {
  text-decoration: none;
  color: #000;
    font-weight: normal !important;

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

  ul {
    padding: 0 !important;
    margin: 0 !important;
    font-weight: normal !important;


    li {
    list-style: none;
    font-weight: normal !important;


  }
  }

  input {
    border: none;
    outline: none;
    &:focus {
      border: none;
    outline: none;
    }
  }

  canvas {
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0px !important;
  padding: 0px !important;
  position: absolute !important;
  z-index: 0 !important;
  top: 0px !important;
  left: 0px !important;
  pointer-events: none;
}

  #tsparticles canvas,
  #particles canvas
   {
		z-index: -1;
		height: 100%;
		width: 100%;
		position: absolute !important;

    width: 100% !important;
    height: 100% !important;
    margin: 0px !important;
    padding: 0px !important;
    position: absolute !important;
    z-index: 0 !important;
    top: 0px !important;
    left: 0px !important;
    pointer-events: none;
	}

  .cans {
    z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0px !important;
  padding: 0px !important;
  position: absolute !important;
  z-index: 0 !important;
  top: 0px !important;
  left: 0px !important;
  pointer-events: none;
  }
  .activeHeader {
    background: var( --main-color-g);
    max-width: 2000px !important;
	width: 100% !important;
  }

`;
