import styled, { css } from 'styled-components';

export const Procurement = styled.div``;

export const ProcurementHero = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transition: 0.5s ease all;
  }
`;

export const BlendModeTitle = styled.h1`
  font-size: 10rem;
  width: 100%;
  background-color: #fff;
  color: #000;
  position: absolute;
  bottom: 0px;
  text-align: center !important;
  /* padding: 50px 0; */
  mix-blend-mode: screen;
  letter-spacing: -5px;
  /* padding-top: 10px; */
  padding-bottom: 50px;

  @media screen and (max-width: 900px) {
    font-size: 8rem !important;
    letter-spacing: 0;
  }

  @media screen and (max-width: 790px) {
    font-size: 4rem !important;
    letter-spacing: 0;
    padding-top: 30px;
  }

  @media screen and (max-width: 390px) {
    font-size: 3rem !important;
    letter-spacing: 0;
    padding: 30px 0;
  }
`;

export const CultureInfo = styled.div`
  background-color: #fff;
  padding: 0px 0;

  p {
    max-width: 700px;
    margin: auto;
    font-size: 22px;
    line-height: 30px;
    color: #000;
    text-align: center !important;
  }

  @media screen and (max-width: 390px) {
    padding: 0 20px;
  }
`;

export const ProcurementContainer = styled.div`
  background-color: var(--main-color-p);
  padding: 50px;
  margin-top: 50px;

  h2 {
    max-width: 1000px;
    width: 100%;
    text-align: center !important;
    font-size: 28px !important;
    margin: auto;
    color: #fff;
    line-height: 1.2;
  }

  @media screen and (max-width: 390px) {
    padding: 20px;

    h2 {
      font-size: 20px !important;
    }
  }
`;
export const ProcurementOptionsContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  ${(props) =>
    props.primary &&
    css`
      flex-direction: row-reverse;
    `}

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ProcurementOptionsImg = styled.div`
  max-width: 600px;
  width: 100%;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media screen and (max-width: 450px){
    height: 250px !important;
  }
`;

export const ProcurementOptionsInfo = styled.div`
  max-width: 600px;
  width: 100%;
  color: #fff;

  h4 {
    color: #fff;
    padding-bottom: 10px;
    font-size: 28px;
    color: var(--main-color-g);
  }

  p {
    color: #fff;
    padding-bottom: 10px;
    font-size: 20px;
  }

  ul li {
    padding: 5px;
    span {
      font-weight: bold;
      color: var(--main-color-g);
    }
  }

  @media screen and (max-width: 750px) {
    h4, p, ul li {
      text-align: center !important;
    }
  }
`;

export const ChooseUs = styled.div`
	background-color: #555;
	padding: 50px;

	color: #fff;

	h4 {
		color: #fff;
		font-size: 28px;
		padding-bottom: 10px;
	}

	h2{
		color: #fff;
		font-size: 28px;
		padding-bottom: 10px;
	}

	p {
		color: #fff;
		font-size: 18px;
		padding-bottom: 10px;

		a {
			color: var(--main-color-g);
		}
	}

	ul {
		margin: 20px 0 !important;

		li {
			padding-bottom: 5px;
		}
	}

	div {
		button {
			padding: 10px 20px;
			display: block;
			margin: 20px 0;
			background-color: var(--main-color-g);
			a {
				color: #fff;
			}
		}
	}

	@media screen and (max-width: 450px) {
		h4,
		p,
		ul li, h2 {
			text-align: center !important;
		}

    button {
      margin: 20px auto !important;
    }

		padding: 20px;
	}
`;
