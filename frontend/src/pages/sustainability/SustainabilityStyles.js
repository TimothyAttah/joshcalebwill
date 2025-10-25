import styled, { css } from 'styled-components';

export const SustainabilityContainer = styled.div``;

export const Sustainability = styled.div``;

export const SustainabilityHero = styled.div`
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;

	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const BlendModeSubTitle = styled.h4`
	font-size: 2rem;
	width: 100%;
	background-color: #fff;
	color: var(--base-color-gold);
	position: absolute;
	bottom: 160px;
	text-align: center !important;
	/* padding: 20px 0; */
	padding-top: 30px;

	@media screen and (max-width: 900px) {
		font-size: 1.5rem !important;
		bottom: 120px;
	}

	@media screen and (max-width: 735px) {
		font-size: 1.5rem !important;
		bottom: 236px;
	}

	@media screen and (max-width: 590px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 80px;
	}

	@media screen and (max-width: 490px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 162px;
	}

	@media screen and (max-width: 390px) {
		font-size: 1.2rem !important;
		bottom: 115px;
		/* padding: 30px 0; */
	}

	@media screen and (max-width: 367px) {
		font-size: 1.2rem !important;
		bottom: 173px;
		/* padding: 30px 0; */
	}
`;

export const BlendModeTitle = styled.h1`
	font-size: 8rem;
	width: 100%;
	background-color: #fff;
	color: #000;
	position: absolute;
	bottom: -2px;
	text-align: center !important;
	/* padding: 20px 0; */
	mix-blend-mode: screen;
	letter-spacing: -5px;
	padding-top: 10px;

	@media screen and (max-width: 900px) {
		font-size: 6rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 590px) {
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
	padding: 50px 0;

	h4 {
		text-align: center !important;
		font-size: 35px !important;
		padding-bottom: 10px;
	}

	p {
		max-width: 700px;
		margin: auto;
		font-size: 22px !important;
		line-height: 30px;
		color: #000;
		text-align: center !important;
	}
`;

export const SustainabilityTitle = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 20px auto;
	text-align: center !important;

	h1 {
		color: var(--base-color-gold);
		font-size: 8rem !important;
		text-align: center !important;
	}

	@media screen and (max-width: 900px) {
		h1 {
			font-size: 6rem !important;
		}
	}

	@media screen and (max-width: 450px) {
		h1 {
			font-size: 4rem !important;
		}
	}

	@media screen and (max-width: 370px) {
		h1 {
			font-size: 3rem !important;
		}
	}
`;

export const SustainabilityListWrapper = styled.div`
	max-width: 1400px;
	width: 100%;
	margin: 50px auto;
`;
export const SustainabilityListItem = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
	padding: 50px 10px;

	${(props) =>
		props.primary &&
		css`
			flex-direction: row-reverse;
		`}

	@media screen and (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	@media screen and (max-width: 450px) {
	padding: 20px;
	}
`;
export const SustainabilityListItemImgBox = styled.div`
	max-width: 600px;
	width: 100%;

	img {
		width: 100%;
	}
	@media screen and (max-width: 450px) {
		max-width: 100%;

	}
`;

export const SustainabilityListItemImg = styled.div`
	width: 100%;
	height: 350px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}


		height: 200px !important;

`;
export const SustainabilityListItemContent = styled.div`
	max-width: 700px;
	width: 100%;

	h4 {
		color: var(--color2);
		color: #000;
		font-size: 28px;
		padding-bottom: 10px;
		letter-spacing: 0;
	}

	p {
		font-size: 22px;
		color: #463636;
		color: #000;
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

	@media screen and (max-width: 900px) {
		h4,
		p {
			text-align: center !important;
		}
	}

	@media screen and (max-width: 420px) {
		max-width: 100%;
	}
`;
