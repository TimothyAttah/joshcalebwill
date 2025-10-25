import styled, { css } from 'styled-components';
export const Environment = styled.div``;

export const EnvironmentHero = styled.div`
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;

	img,
	video {
		width: 100%;
		height: 100%;
		/* object-fit: contain; */
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

	@media screen and (max-width: 450px){
		padding: 20px;
	}
`;

export const StragegyContainer = styled.div`
	background-color: var(--color-medium-green);
	padding: 10px;
`;

export const StragegyTitleContainer = styled.div`
	max-width: 900px;
	margin: 20px auto;
	h4 {
		color: #fff;
		font-size: 20px !important;
		text-align: center !important;
	}

	h1 {
		color: #fff;
		font-size: 8rem !important;
		text-align: center !important;
		padding-bottom: 20px;
	}

	p {
		color: #fff;
		font-size: 1rem !important;
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
`;

export const StragegyPixContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 60px auto;
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const StragegyPix = styled.div`
	max-width: 500px;
	height: 500px;
	border-radius: 20px;
	overflow: hidden;

	p {
		font-size: 2rem;
		color: #fff;
		text-align: center !important;
		line-height: 1.2;
		padding-top: 20px;
	}

	img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 20px;
	}

	@media screen and (max-width: 900px) {
		p {
			font-size: 1.4rem;
		}
	}

	@media screen and (max-width: 450px){
		height: auto;
		padding-bottom: 40px;
		img {
			height: 200px;
		}
	}
`;

export const EnvironmentOptionsContainer = styled.div`
	background-color: var(--main-color-p);
	padding: 50px;
	color: #fff;

	h4 {
		font-size: 30px !important;
		color: #fff;
		padding: 10px 0;
		padding-top: 50px;
		border-bottom: 2px solid #fff;
	}

	@media screen and (max-width: 470px) {
		padding: 20px;
		p , h4{
			text-align: center !important;
		}
	}
`;

export const EnvironmentOptions = styled.div`
	padding: 20px 0;
	/* max-width: 900px; */
	h2 {
		font-size: 30px !important;
		color: #fff;
		padding: 5px 0;
	}

	@media screen and (max-width: 470px) {
		padding: 10px;
		h2 {
			text-align: center !important;
		}
	}
`;
