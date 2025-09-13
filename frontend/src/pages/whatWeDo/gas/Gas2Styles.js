import styled, { css } from 'styled-components';

export const GasContainer = styled.div``;
export const GasHeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden !important;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h1 {
		position: absolute !important;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 1000px;
		width: 100%;
		color: #fff;
		z-index: 99;
		backdrop-filter: blur(40px) opacity(1);
		-webkit-backdrop-filter: blur(10px) opacity(1);
		text-align: center;
		font-size: 4rem !important;
		border-radius: 20px;
		padding: 20px;
	}



	@media screen and (max-width: 770px) {
		h1 {
			font-size: 4rem !important;
		}
	}

	@media screen and (max-width: 550px) {
		h1 {
			font-size: 3rem !important;
		}
	}

	@media screen and (max-width: 430px) {
		h1 {
			font-size: 2rem !important;
		}
	}

	@media screen and (max-width: 310px) {
		h1 {
			font-size: 1.5rem !important;
		}
	}
`;
export const GasHeroOverlay = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	/* background: rgba(0, 0, 0, 0.7); */
	background: #05050540;
	z-index: 9;
	overflow: hidden !important;
`;

export const GasIntroSection = styled.div`
	/* max-width: 1000px; */
	width: 100%;
	margin: 0px auto;
	/* margin-top: 90px; */
	padding: 100px;
	text-align: center;
  background-color: #ddd;

	h4,
	h3 {
		color: var(--color2);
		font-size: 28px;
		padding-bottom: 10px;
	}

	h3 {
		display: none;
	}

	p {
		font-size: 22px;
		color: #463636;
	}

	@media screen and (max-width: 570px) {
		text-align: center;
    padding: 100px 20px;

		h4 {
			display: none;
		}

		h3 {
			font-size: 22px;
			display: block;
		}

		p {
			font-size: 18px;
		}
	}
`;

export const GasItemContainer = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 50px auto;

	h2 {
		color: var(--color2);
		font-size: 32px !important;
		padding-bottom: 10px;
    text-align: center;
	}
`;

export const GasItemImg = styled.div`
  max-width: 500px;
  width: 100%;
  height: 300px;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const GasItemContent = styled.div`
	max-width: 700px;
	width: 100%;
	margin: 20px auto;
  padding: 10px;

	ul {
		padding: 0;
		li {
			padding: 5px 0;
			span {
				font-weight: bold;
			}
		}
	}
`;

export const GasReasonWrapper = styled.div`
  width: 100%;
  background-color: #ddd;
  padding: 50px;
  margin: auto;

  h4 {
    color: var(--color2);
    font-size: 28px;
    padding-bottom: 10px;
    letter-spacing: 0;
  }

  p {
    font-size: 22px;
    color: #463636;
  }

  ul {
    padding: 0;
    li {
      padding: 5px 0;
      span {
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 720px) {
    h4,
    p {
      text-align: center;
    }
  }
`;