import styled, { css } from 'styled-components';
export const Communities = styled.div``;

export const CommunitiesHero = styled.div`
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

export const ApproachContainer = styled.div`
	background-color: var(--main-color-p);
	padding: 50px;

	@media screen and (max-width: 520px) {
		padding: 10px 20px;
	}
`;
export const ApproachTitle = styled.div`
	max-width: 900px;
	width: 100%;
	margin: 50px auto;

	h2 {
		color: #fff;
		font-size: 5rem;
		text-align: center !important;
		margin-bottom: 30px;
	}

	img {
		width: 100%;
		/* height: 350px;
		object-fit: cover; */
		margin-bottom: 30px;
	}

	p {
		font-size: 1.2rem;
		color: #fff;
		padding-bottom: 10px;
		text-align: center !important;
	}

	${(props) =>
		props.second &&
		css`
			h2 {
				color: var(--main-color-p);
			}
			p {
				color: #000;
			}
		`}

	@media screen and (max-width: 520px) {
		h2 {
			font-size: 3rem;
		}

		padding: 10px;
	}

	@media screen and (max-width: 320px) {
		h2 {
			font-size: 2rem;
		}
	}
`;
export const ApproachOptionsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 30px;
	padding-top: 20px;
`;
export const ApproachOptions = styled.div`
	width: 350px;
	h4,
	p {
		color: #fff;
	}

	h4 {
		padding-bottom: 10px;
		font-size: 2rem;
	}

	@media screen and (max-width: 520px) {
		padding: 20px;

		h4,
		p {
			text-align: center !important;
		}
	}
`;
