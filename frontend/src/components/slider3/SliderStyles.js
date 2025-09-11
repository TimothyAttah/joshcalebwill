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
	/* padding-top: 42%; */
	position: relative;
	overflow: hidden !important;



	img, video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;

		/* animation: zoom 10s linear forwards infinite !important; */
		/* animation: zoom 15s linear both infinite !important; */

		/* @keyframes zoom {
			0% {
				transform: scale(2);
			}
			100% {
				transform: scale(1);
			}
		} */
	}

	${(props) =>
		props.slideUrl === 'slide1' &&
		css`
			background: url(${pix1});

			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			position: relative;
			overflow: hidden;
		`}
	${(props) =>
		props.slideUrl === 'slide2' &&
		css`
			background: url(${pix2});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}
    ${(props) =>
		props.slideUrl === 'slide3' &&
		css`
			background: url(${pix3});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}
    ${(props) =>
		props.slideUrl === 'slide4' &&
		css`
			background: url(${pix4});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}

    ${(props) =>
		props.slideUrl === 'slide5' &&
		css`
			background: url(${pix5});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}
`;

export const SliderOverlay = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: #05050540;
	z-index: 9;
`;

export const SlideContent = styled.div`
	position: absolute !important;
	bottom: 50px;
	left: 50%;
	transform: translateX(-50%);
	max-width: 1000px;
	width: 100%;
	color: #fff;
	z-index: 999999;

	padding: 48px 40px 40px;
	border-radius: 16px;
	backdrop-filter: blur(40px) opacity(1);
	-webkit-backdrop-filter: blur(10px) opacity(1);

	/* transform: translateX(0); */
	background-color: #0b2d7180;
	background: #00813299;
	/* background: var(--main-color); */
	opacity: 1;
	/* z-index: 3; */
	pointer-events: all;
	transition: transform 0.75s cubic-bezier(0.72, 0.05, 0.35, 1) 0.75s,
		opacity 0.5s cubic-bezier(0.72, 0.05, 0.35, 1) 0.75s;
	/* opacity: 0.7; */
	/* backdrop-filter: 60px; */

	h2 {
		font-weight: bold;
		color: #fff;
		text-align: center;
		font-size: 6.4rem !important;
		line-height: 6.8rem !important;
		letter-spacing: -0.013em !important;
		text-transform: lowercase;
		animation: text 1s ease forwards;
	}

	h4 {
		font-size: 18px;
		font-weight: bold;
		color: #fff;
		animation: text 2s ease forwards;
	}

	p {
		font-size: 16px;
		line-height: 1.4;
		padding-top: 10px;
		font-weight: bold;
		color: #fff;
		animation: text 3s ease forwards;
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
		animation: text 4s ease forwards;
	}

	/* @keyframes text {
		0% {
			opacity: 0;
			transform: translateX(-100px);
		}
		100% {
			opacity: 1;
			transform: translateX(0px);
		}
	} */

	@media screen and (max-width: 900px) {
		h2 {
			font-size: 4.4rem !important;
			line-height: 4.8rem !important;
			letter-spacing: -0.013em !important;
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

		h2 {
			font-size: 3rem !important;
			line-height: 3.4rem !important;
			letter-spacing: -0.013em !important;
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
      margin: auto;
		}
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
