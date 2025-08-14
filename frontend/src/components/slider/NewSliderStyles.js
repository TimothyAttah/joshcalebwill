import styled, { css } from 'styled-components';
import pix1 from '../../assets/hero1.jpg';
import pix2 from '../../assets/hero2.jpg';
import pix3 from '../../assets/hero3.jpg';
import pix4 from '../../assets/hero4.png';
import pix5 from '../../assets/hero5.png';

export const SliderContainer = styled.div`
	overflow-x: hidden;
`;
export const Slider = styled.div`
	height: calc(100vh - 100px);
	position: relative;
	overflow: hidden;

	#progress {
	}

	@keyframes progress {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
`;
export const SliderItems = styled.div`
	height: 100%;
	.active {
		display: flex;
	}
`;
export const Item = styled.div`
	height: 100%;
	display: flex;
	display: none;
`;
export const Img = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background-position: center;
	background-size: cover;
	animation: zoom 1s linear forwards;
	background-attachment: fixed;

	@keyframes zoom {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.05);
		}
	}

	${(props) =>
		props.slider === 'slider1' &&
		css`
			background-image: url(${pix1});
		`}
	${(props) =>
		props.slider === 'slider2' &&
		css`
			background-image: url(${pix2});
		`}
     ${(props) =>
		props.slider === 'slider3' &&
		css`
			background-image: url(${pix3});
		`}
     ${(props) =>
		props.slider === 'slider4' &&
		css`
			background-image: url(${pix4});
		`}
     ${(props) =>
		props.slider === 'slider5 ' &&
		css`
			background-image: url(${pix5});
		`}
`;
export const Caption = styled.div`
	position: relative;
	max-width: 1170px;
	z-index: 10;
	margin: auto;
	flex-grow: 1;
	padding: 15px;

	h1 {
		margin: 0;
		font-size: 50px;
		animation: text 1s ease forwards;
	}

	p {
		margin: 10px 0 0;
		font-size: 20px;
		animation: text 1s ease forwards;
		animation-delay: 0.5s;
		opacity: 0;
	}

	@keyframes text {
		0% {
			opacity: 0;
			transform: translateX(-100px);
		}
		100% {
			opacity: 1;
			transform: translateX(0px);
		}
	}

	@media screen and (max-width: 1170px) {
		padding: 15px 100px;
	}

	@media screen and (max-width: 767px) {
		padding: 15px 70px;

		h1 {
			font-size: 30px;
		}

		p {
			font-size: 16px;
		}
	}
`;
export const Text = styled.div``;

export const Controls = styled.div`
	div {
		position: absolute;
		height: 40px;
		width: 40px;
		background-color: #222;
		color: #fff;
		border-radius: 50%;
		z-index: 11;
		top: 50%;
		margin-top: 20px;
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		cursor: pointer;
		transition: all 0.5s ease;

		&:hover {
			background-color: blue;
		}
	}

	.prev {
		left: 30px;
	}

	.next {
		right: 30px;
	}

	@media screen and (max-width: 767px) {
		.prev {
			left: 10px;
		}

		.next {
			right: 10px;
		}
	}
`;

export const SlideInfo = styled.div`
	position: absolute;
	width: 280px;
	padding: 15px;
	left: 30px;
	bottom: 50px;
	background-color: #fff;
	padding-right: 50px;

	.meter {
		height: 5px;
		background-color: #d5d5d5;
		width: 100%;
	}

	.meter .inner {
		width: 0;
		background-color: blue;
		height: 5px;
		transition: all 0.8s linear;
	}

	.number {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 35px;
		/* background-color:blue; */
		color: #fff;
		color: #000;
		text-align: center;
		line-height: 35px;
	}
`;
export const Progress = styled.div``;
