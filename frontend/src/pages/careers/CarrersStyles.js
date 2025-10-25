import styled, { css } from 'styled-components';

export const Careers = styled.div``;

export const CareersHero = styled.div`
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

	@media screen and (max-width: 450px) {
		padding: 20px;
	}
`;
export const CareersInfo = styled.div`
	background-color: #fff;
	padding: 50px 0;

	p {
		max-width: 700px;
		margin: auto;
		font-size: 22px;
		line-height: 30px;
		color: #000;
		text-align: center !important;
	}

	@media screen and (max-width: 450px) {
		padding: 20px;
	}
`;
export const CareersOptions = styled.div``;
export const CareersOptionsList = styled.div`
	max-width: 1200px;
	margin: 50px auto;
	width: 100%;
	height: 500px;
	display: flex;
	border-radius: 20px;
	overflow: hidden;

	${(props) =>
		props.second &&
		css`
			flex-direction: row-reverse;
		`}

	@media screen and (max-width: 670px) {
		flex-direction: column;
		max-width: 100%;
		height: 100%;
	}
`;
export const CareersOptionsListImg = styled.div`
	max-width: 600px;
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 670px) {
		max-width: 100%;
	}

	@media screen and (max-width: 450px) {
		height: 200px;
	}
`;
export const CareersOptionsListInfo = styled.div`
	max-width: 600px;
	width: 100%;
	height: 100%;
	padding: 70px;

	p {
		color: #fff;
		margin-top: 20px;
	}

	${(props) =>
		props.first &&
		css`
			background-color: var(--base-color-gold);

			h4 {
				color: var(--base-color-gold-neg);
				font-size: 3rem;
				color: #fff;
			}
		`}

	${(props) =>
		props.second &&
		css`
			background-color: var(--base-color-green);
			background-color: #b76e79;

			h4 {
				color: var(--base-color-green-neg);
				font-size: 3rem;
				color: #fff;
			}
		`}

		${(props) =>
		props.third &&
		css`
			background-color: var(--color-medium-red);
			background-color: var(--main-color-o);
			h4 {
				color: var(--color-light-red);
				font-size: 3rem;
				color: #fff;
			}
		`}

		${(props) =>
		props.fourth &&
		css`
			background-color: var(--color-medium-purple);
			background-color: var(--main-color-g);

			h4 {
				color: var(--color-light-purple);
				color: #fff;
				font-size: 3rem;
			}
		`}

		@media screen and (max-width: 900px) {
		padding: 50px;
	}

	@media screen and (max-width: 670px) {
		max-width: 100%;
	}

	@media screen and (max-width: 420px) {
		padding: 20px;
		h4 {
			font-size: 1.6rem;
			text-align: center !important;
		}

		p {
			font-size: 1.1rem;
			text-align: center !important;
		}
	}
`;

// export const Careers = styled.div``;
// export const Careers = styled.div``;
// export const Careers = styled.div``;
