import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Slider = styled(motion.div)`
	height: 100vh;
	width: 100%;
	position: relative;
	overflow: hidden;
`;

export const SliderItems = styled(motion.div)`
	height: 100%;
	width: 100%;
  overflow: hidden;
	.active {
		display: flex;
	}
`;

export const Item = styled(motion.div)`
  width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* position: relative; */
	display: none;
	/* overflow: hidden; */

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation: zoom 1s linear forwards;

		@keyframes zoom {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(1.05);
			}
		}
	}
`;

export const NewSliderVideo = styled.video`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	/* z-index: -1; */
	object-fit: cover;
	background-color: #000;
	animation: zoom 1s linear forwards;

	@keyframes zoom {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.05);
		}
	}
`;

export const SliderItemContentWrapper = styled(motion.div)`
	max-width: 600px;
	width: 100%;
	background-color: var(--brown);
	color: #fff;
	position: absolute;
	left: 50%;
	bottom: 50px;
	transform: translateX(-50%);
	padding: 20px;
	border-radius: 10px;
`;

export const NewSliderItemContent = styled(motion.div)`

  width: 100%;
  height: auto;
  background-color: var(--brown);
  color: #fff;

  div {
    h1 {
      padding-bottom: 5px;
      font-size: 40px;
    }

    h4 {
      font-size: 22px;
    }
  }

  p {
    font-size: 14px;
    padding-top: 10px;
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
export const ControlsButtons = styled(motion.div)``;