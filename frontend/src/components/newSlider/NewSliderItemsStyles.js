import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Slider = styled(motion.div)`
	height: 100vh;
	width: 100%;
	position: relative;
	overflow: hidden;
	transition: 0.5s;

	@media screen and (max-width: 750px) {
		height: 70vh;
	}
`;

export const SliderItems = styled(motion.div)`
	height: 100%;
	width: 100%;
	overflow: hidden;
	.active {
		display: flex;
	}
`;

export const SliderOverlay = styled.div`
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.2);
	position: absolute;
	top: 0;
`;

export const Item = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: none;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation: zoom 1s linear forwards;

		@keyframes zoom {
			0% {
				transform: scale(2);
			}
			100% {
				transform: scale(1.05);
			}
		}
	}

	@media screen and (max-width: 750px) {
		img {
			width: 100%;
			height: 100%;

			animation: zoom 1s linear forwards;
		}
	}
`;

export const ItemBox = styled.div`
	height: 100%;
	width: 100%;
	background: var(--brown);
	display: flex;

	/* margin-top: 100px; */
`;

export const ItemInfoBox = styled.div`
	max-width: 500px;
	width: 100%;
	height: 400px;
	background-color: #fff;
	background: var(--brown);
	color: #fff;
	position: absolute;
	left: 50px;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	justify-content: center;

	div {
		h1 {
			font-size: 40px;
			padding-bottom: 5px;
		}

		h4 {
			font-size: 20px;
			padding-bottom: 5px;
		}

		p {
			font-size: 17px;
			line-height: 1.5;
			padding-top: 10px;
		}
	}

	@media screen and (max-width: 1120px) {
		max-width: 400px;
	}

	@media screen and (max-width: 1020px) {
		max-width: 300px;
	}

	@media screen and (max-width: 920px) {
		max-width: 90%;
		top: 250px;
	}

	@media screen and (max-width: 750px) {
		max-width: 80%;
		top: 200px;
		text-align: center;

		div {
			h1 {
				font-size: 22px;
			}

			h4 {
				font-size: 16px;
			}

			p {
				font-size: 14px;
				line-height: 1.2;
				padding-top: 5px;
			}
		}
	}

	@media screen and (max-width: 350px) {
		max-width: 80%;
		top: 200px;
		text-align: center;
		padding-right: 20px;

		div {
			h1 {
				font-size: 18px;
			}

			h4 {
				font-size: 14px;
			}

			p {
				font-size: 12px;
				line-height: 1.2;
				padding-top: 5px;
			}
		}
	}
`;

export const ItemImgBox = styled.div`
	max-width: 800px;
	width: 100%;
	position: absolute;
	right: 50px;
	top: 50%;
	transform: translateY(-50%);

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 1420px) {
		max-width: 700px;
	}

	@media screen and (max-width: 1330px) {
		max-width: 600px;
	}

	@media screen and (max-width: 1230px) {
		max-width: 500px;
	}
	@media screen and (max-width: 920px) {
		max-width: 90%;
		bottom: 400px;
	}
	@media screen and (max-width: 750px) {
		max-width: 50%;
		bottom: 400px;
		margin: auto;
		transform: translateX(-35%);
	}

	@media screen and (max-width: 480px) {
		max-width: 79%;
		/* bottom: -429px; */
		margin: auto;
		transform: translateX(4%);
		bottom: 0;
		top: 330px;
	}
`;

export const NewSliderVideo = styled.video`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	z-index: -1;
	object-fit: cover;
	background-color: #000;
	/* animation: zoom 1s linear forwards; */

	/* @keyframes zoom {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.05);
		}
	} */
`;

export const SliderItemContentWrapper = styled(motion.div)`
	max-width: 800px;
	width: 100%;
	background-color: var(--brown);
	color: #fff;
	position: absolute;
	left: 50%;
	bottom: 100px;
	transform: translateX(-50%);
	padding: 50px;
	border-radius: 10px;
	backdrop-filter: blur(40px) opacity(1);
	-webkit-backdrop-filter: blur(10px) opacity(1);
	border-radius: 12px 12px 0px 0px;
	transition: transform 0.75s cubic-bezier(0.72, 0.05, 0.35, 1) 0.75s,
		opacity 0.5s cubic-bezier(0.72, 0.05, 0.35, 1) 0.75s;
	opacity: 0.8;

	@media screen and (max-width: 750px) {
		bottom: 100px;
	}
`;

export const NewSliderItemContent = styled(motion.div)`
	width: 100%;
	/* height: auto; */
	background-color: var(--brown);
	color: #fff;

	div {
		text-align: center;
		padding-bottom: 5px;
		h1 {
			/* padding-bottom: 5px; */
			font-size: 44px;
			text-transform: capitalize !important;
			text-align: center;
		}

		h4 {
			font-size: 25px;
		}
	}

	p {
		font-size: 22px;
		line-height: 29px;
		padding-top: 10px;
		font-weight: bold;
	}

	a {
		background: #fff;
		padding: 10px;
		display: block;
		width: 300px;
		text-align: center;
		margin-top: 10px;
		text-transform: capitalize;
		border-radius: 10px;
	}

	@media screen and (max-width: 450px) {
		text-align: center;
		div {
			h1 {
				padding-bottom: 5px;
				font-size: 25px;
				text-transform: capitalize;
			}

			h4 {
				font-size: 18px;
			}
		}

		p {
			font-size: 10px;
			padding-top: 11px;
			line-height: 15px;
		}
	}
`;

export const Progress = styled(motion.div)`
	/* margin-top: 50px;
	width: 100%;
	height: 20px;
	background-color: #edede0;
	border-radius: 10px;
	overflow: hidden;

	div {
		height: 100%;
		background-color: green;
		transition: width 1s linear;
	} */
`;

export const Controls = styled(motion.div)`
	width: 400px;
	z-index: 999990;
	position: absolute;
	bottom: 50px;
	left: 50%;
	transform: translateX(-50%);

	div {
		position: absolute;
		height: 40px;
		width: 40px;
		background-color: #222;
		color: #fff;
		border-radius: 50%;
		z-index: 11;
		/* top: 80%; */
		bottom: 10px;
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
		left: 20px;
	}

	.next {
		right: 20px;
	}

	@media screen and (max-width: 420px) {
		width: 100%;
		bottom: 50px;
		.prev {
			left: 30px;
		}

		.next {
			right: 30px;
		}
	}
`;
export const ControlsButtons = styled(motion.div)``;
