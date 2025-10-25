import styled, { css } from 'styled-components';


export const Haulage = styled.div``;

export const HaulageHero = styled.div`
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

	small {
		text-align: center !important;
		display: block;
		font-size: 15px;
	}

	p {
		max-width: 700px;
		margin: auto;
		font-size: 22px;
		line-height: 30px;
		color: #000;
		text-align: center !important;
	}

	@media screen and (max-width: 450px) {
		padding: 0 20px;
	}
`;

export const HaulageContainer = styled.div``;
export const HaulageHeroContainer = styled.div`
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
export const HaulageHeroOverlay = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	/* background: rgba(0, 0, 0, 0.7); */
	background: var(--main-color-p);
	z-index: 9;
	overflow: hidden !important;
`;

export const HaulageIntroSection = styled.div`
	/* max-width: 1000px; */
	width: 100%;
	/* margin: 0px auto; */
	/* margin-top: 90px; */
	padding: 50px;
	text-align: center;
	/* background-color: #ccc; */

	margin-top: 20px;

	small {
		color: var(--main-color);
		padding-bottom: 10px;
		display: block;
		font-size: 14px;
	}

	h4 {
		/* color: #fff; */
		font-size: 28px;
		padding-bottom: 10px;
		letter-spacing: 0;
		line-height: 40px;
	}

	p {
		font-size: 22px;
		color: #000;
		/* color: #fff; */
		padding-bottom: 10px;
	}

	@media screen and (max-width: 570px) {
		text-align: center;
		padding: 20px;

		h4 {
			font-size: 22px;
		}

		p {
			font-size: 18px;
		}
	}
`;

export const HaulageIntroGalleryContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	gap: 20px;
	flex-wrap: wrap;
	margin-top: 50px;

	div {
		max-width: 400px;
		width: 100%;
		height: 300px;

		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: all 0.5s ease-in-out;

			&:hover {
				scale: 1.1;
			}
		}
	}

	@media screen and (max-width: 450px){
		div {
			height: 220px !important;
		}
	}
`;

export const HaulageServicesList = styled.div`
  /* max-width: 1200px; */
  width: 100%;
  margin: auto;
`;

export const HaulageService = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: end;
	padding: 20px;
	padding: 20px 100px;
	background-color: var(--main-color-g);

	h2 {
		width: 100%;
		text-align: right !important;
		padding-bottom: 10px;
		color: #fff;
	}

	h4 {
		color: #fff;
	}

	p {
		max-width: 600px;
		width: 100%;
		text-align: right !important;
		color: #fff;
		font-size: 20px;
	}

	${(props) =>
		props.primary &&
		css`
			background-color: var(--main-color-o);
			background: var(--main-color-p);

			align-items: start;

			h2 {
				text-align: left !important;
			}

			p {
				max-width: 500px;
				text-align: left !important;
			}
		`}

	@media screen and (max-width: 520px) {
		text-align: center;
		align-items: center;
		padding: 20px;

		h2,
		p, h4 {
			text-align: center !important;
		}

		p {
			font-size: 16px;
		}

		${(props) =>
			props.primary &&
			css`
				align-items: center;

				h2 {
					text-align: center;
				}

				p {
					text-align: center;
				}
			`}
	}
`;
