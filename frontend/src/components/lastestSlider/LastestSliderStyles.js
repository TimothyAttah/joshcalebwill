import styled, { css } from 'styled-components';
import pix1 from '../../assets/hero1.jpg';
import pix2 from '../../assets/hero2.jpg';
import pix3 from '../../assets/hero3.jpg';
import pix4 from '../../assets/hero4.png';
import pix5 from '../../assets/hero5.png';
import { motion } from 'framer-motion';

export const LastestSliderContainer = styled(motion.div)`
	height: 80vh;
	/* background-color: ${(props) =>
		props.dataBgColor ? props.dataBgColor : 'rgb(255, 115, 0)'};
	color: ${(props) => (props.dataColor ? props.dataColor : '#fff')};
  position: relative; */

  overflow-x: hidden;
	/* overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	} */
`;

export const LastestSliderItemsWrapper = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
  justify-content: space-around;
	/* justify-content: center; */
	padding: 50px;
  gap: 50px;
  padding-top: 100px;
`;

export const LastestSliderItems = styled(motion.div)`
	width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  gap: 50px;
  border: 2px solid white;

  h1 {
    padding-bottom: 20px;
  }
`;

export const LastestSliderItemsImg = styled(motion.div)`
  max-width: 800px;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
  }
`;

export const Slider = styled(motion.div)`
	height: calc(100vh - 100px);
	position: relative;
	overflow: hidden;
`;
export const SliderItems = styled(motion.div)`
	height: 100%;
	.active {
		display: flex;
	}
`;



export const Item = styled(motion.div)`
	height: 100%;
	display: flex;
  display: none;
  /* padding: 50px; */
  /* padding-bottom: 100px; */

`;
export const Img = styled(motion.div)`
	height: 100%;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background-position: center;
	background-size: cover;
	animation: zoom 1s linear forwards;
	/* background-attachment: fixed; */
	padding: 50px;

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
			background-color: var(--brown);
			/* background-image: url(${pix5}); */
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 50px;

			@media screen and (max-width: 795px) {
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		`}
	${(props) =>
		props.slider === 'slider2' &&
		css`
			background-color: var(--green);
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 50px;
			@media screen and (max-width: 795px) {
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		`}
     ${(props) =>
		props.slider === 'slider3' &&
		css`
			background-color: var(--crimson);
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 50px;
			flex-direction: row-reverse;
			@media screen and (max-width: 795px) {
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		`}
     ${(props) =>
		props.slider === 'slider4' &&
		css`
			background-color: var(--blue);
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 50px;
			@media screen and (max-width: 795px) {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				/* width: 70%; */
			}
		`}
		${(props) =>
		props.slider === 'slider5' &&
		css`
			background-color: var(--blue);
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 50px;
			@media screen and (max-width: 795px) {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				/* width: 70%; */
			}
		`}
`;
export const Caption = styled(motion.div)`
	max-width: 500px;
	width: 100%;
	position: relative;
	/* max-width: 1170px; */
	z-index: 10;
	/* margin: auto; */
	flex-grow: 1;
	padding: 15px;
	color: #fff;

	h1 {
		font-size: 40px;
		padding-bottom: 5px;
	}

	h4 {
		font-size: 20px;
	}

	p {
		font-size: 14px;
		line-height: 20px;
		padding-top: 15px;
	}

	@media screen and (max-width: 795px) {
		max-width: 450px;
		z-index: 10;
		margin: auto;
		flex-grow: 0;
		h1 {
			font-size: 20px;
			padding-bottom: 5px;
		}

		h4 {
			font-size: 12px;
		}

		p {
			font-size: 10px;
			line-height: 20px;
			padding-top: 15px;
		}
	}
`;
export const CaptionImg = styled(motion.div)`
	max-width: 800px;
	width: 100%;
	/* border: 2px solid red; */

	img {
		width: 100%;
	}

	@media screen and (max-width: 795px) {
		max-width: 450px;
		/* width: 70%; */

		img {
			margin-top: -150px;
			margin-bottom: 50px;
		}
	}
`;

export const Text = styled(motion.div)``;

export const Controls = styled(motion.div)`
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

export const Progress = styled(motion.div)``;