import styled, { css } from 'styled-components';
import slidePix1 from '../../assets/newSlide1.png';
import slidePix2 from '../../assets/newSlide2.png';
import slidePix3 from '../../assets/newSlide3.png';
import slidePix4 from '../../assets/newSlide4.png';
import slidePix7 from '../../assets/newSlide7.png';

import pix1 from '../../assets/offshore2.jpg';
// import pix1 from '../../assets/chemical1.jpg';

import pix2 from '../../assets/explore6.png';
import pix3 from '../../assets/gas1.jpg';
import pix4 from '../../assets/pipe5.jpg';
import pix5 from '../../assets/pipe3.jpg';

export const Slide = styled.div`
	width: 100%;
	padding-top: 42%;
	position: relative;
	${(props) =>
		props.slide1 &&
		css`
			background: url(${pix1});
			/* background: var(--main-color); */
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			position: relative;
		`}
	${(props) =>
		props.slide2 &&
		css`
			background: url(${pix2});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}
    ${(props) =>
		props.slide3 &&
		css`
			background: url(${pix3});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}
    ${(props) =>
		props.slide4 &&
		css`
			background: url(${pix4});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}

	@media screen and (max-width: 1100px) {
		padding-top: 62%;
	}

	@media screen and (max-width: 790px) {
		padding-top: 72%;
	}

	@media screen and (max-width: 570px) {
		padding-top: 82%;
	}

	@media screen and (max-width: 350px) {
		padding-top: 92%;
	}
`;

export const SlideContent = styled.div`
	position: absolute;
	bottom: 50px;
	left: 50%;
	transform: translateX(-50%);
	/* left: 20px; */
	max-width: 900px;
	width: 100%;
	color: #fff;
	background: #c18500c7;
	background: var(--color2);
	background: #00813299;

	padding: 20px;
	border-radius: 10px;
	/* opacity: 0.7; */
	/* backdrop-filter: 60px; */

	h1 {
		font-size: 60px !important;
		font-weight: bold;
		color: #fff;
		text-align: center;
	}

	h4 {
		font-size: 18px;
		font-weight: bold;
		color: #fff;
	}

	p {
		font-size: 16px;
		line-height: 1.4;
		padding-top: 10px;
		font-weight: bold;
		color: #fff;
	}

	div a {
		width: 200px;
		height: 50px;
		background-color: #fff;
		color: var(--primary-color);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px 0;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 10px;
	}

	@media screen and (max-width: 790px) {
		h1 {
			font-size: 20px;
		}

		p {
			font-size: 14px;
			line-height: 1.1;
			padding-top: 10px;
		}

		div a {
			width: 120px;
			height: 40px;
			font-size: 12px;
			margin: 20px 0;
		}
	}

	@media screen and (max-width: 570px) {
		bottom: 50px;
		text-align: center;

		div a {
			height: 30px;
			margin: 10px auto;
		}
	}

	@media screen and (max-width: 350px) {
		bottom: 20px;
	}
`;

export const SlideContentWrapper = styled.div`
	display: flex;
	gap: 50px;
	align-items: center;
	justify-content: center;
	z-index: 999;
	width: 100%;
	position: absolute;
	width: 100%;
	top: 50px;
`;

export const SlideContentImg = styled.div`
	max-width: 800px;
	width: 100%;

	img {
		width: 100%;
	}
`;
export const SlideContentText = styled.div`
	max-width: 500px;
	width: 100%;

	h1 {
		font-size: 40px;
		font-weight: bold;
		color: #fff;
		/* color: var(--color2); */
	}

	p {
		font-size: 20px;
		line-height: 1.5;
		padding-top: 15px;
		color: #fff;
		/* color: var(--color2); */
	}

	div a {
		width: 200px;
		height: 50px;
		background-color: var(--color2);
		color: #fff;

		/* color: var(--primary-color); */
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px 0;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 10px;
	}
`;
