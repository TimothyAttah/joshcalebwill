import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;800&family=Poppins:wght@400;500;600;700&display=swap");

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

    --base-color-p: hsla(20, 100%, 50%, 1.00);

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

    /* Market Styles */
    --primary-color: #ed3849;
  --primary-color-dark: #d23141;
  --primary-color-light: #f4e5ec;
  --text-dark: #0f172a;
  --text-light: #64748b;
  --extra-light: #f8fafc;
  --white: #ffffff;
  --max-width-1400: 1400px;
  --max-width-1200: 1200px;
  --max-width-900: 900px;
  --header-font: "Playfair Display", serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: "EMprint", sans-serif !important; */
    /* font-family: "GothamBlack", "Helvetica Neue", Helvetica, Arial, sans-serif; */
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
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    /* font-family: "EMprint", sans-serif !important; */
    /* font-family: "GothamBlack", "Helvetica Neue", Helvetica, Arial, sans-serif; */

    font-weight: 900 !important;
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

  .loader-wrappers {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--main-color-g);
    color: #dbd8d6;

    h1, h2 {
    	font-size: clamp(3rem, 8vw, 7rem) !important;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0;
      text-align: center !important;
      color: #dbd8d6;
    }

    img {
      width: 300px;
      object-fit: cover;
      display: block;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 420px){
      img {
      width: 200px;

    }
      h1, h2 {
    	font-size: clamp(2rem, 5vw, 4rem) !important;
    }
    }
  }

  .absolute-load {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    background-color: var(--main-color-g);

    z-index: 1;
  }

  .blocks-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    pointer-events: none;
  }

  .row-trans {
    flex: 1;
    width: 100%;
    display: flex;
  }

  .block-trans {
    position: relative;
    flex: 1;
    background: #667067;
    background: var(--main-color-g);
   margin: -0.25px;
  }

  .transition-in .block-trans {
    transform-origin: top;
  }

  .transition-out .block-trans {
    transform-origin: bottom;
  }

`;
