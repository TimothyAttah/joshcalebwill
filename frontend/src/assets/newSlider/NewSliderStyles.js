import { motion } from "framer-motion";
import styled from "styled-components";

export const NewSliderMainContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* position: relative; */
  transition: 0.5s;
  font-family: serif;
  overflow: hidden;
	border: 5px solid red;
`;

export const NewSliderContainer = styled(motion.div)`
	width: 100%;
	height: 100%;
	/* display: flex; */
	/* flex-direction: column;
	align-items: center;
	justify-content: center; */
	/* position: relative; */
	transition: 0.5s;
	/* font-family: serif; */
	overflow: hidden;
	border: 5px solid blue;
	/* width: 100%;
	height: 100vh;
	position: absolute;
	top: 0; */
`;

export const CurrentImagesDiv = styled(motion.div)`
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	cursor: pointer;
`;
export const NewSliderUrlWrapper = styled(motion.div)`
	box-sizing: border-box;
	height: 100%;
	min-width: 100%;
	/* overflow: hidden; */
	object-fit: cover;
	transform: translateX(0);
	transition: transform 1s ease;

	img {
		max-width: 100%;
		max-height: 100%;

	}
`;
export const NewSliderItem = styled(motion.div)``;
export const NewSliderVideo = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  object-fit: cover;
  background-color: #000;
	position: relative;
`;

export const NewSliderImg = styled(motion.div)`
	/* width: 100%;
	height: 100%; */
	/* position: absolute;
	top: 0;
	z-index: -1;
	object-fit: cover;
	background-color: #000; */


  /* img {
    width: 100%;
		height: 100%;
  } */
`;

export const NewSliderItemOverlay = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
`;

export const NewSliderListItem = styled(motion.div)``;
export const NewSliderItemContentWrapper = styled(motion.div)`
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
	max-width: 600px;
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

export const ProgressBar = styled(motion.div)`
  margin-top: 50px;
  width: 100%;
  height: 20px;
  background-color: #edede0;
  border-radius: 10px;
  overflow: hidden;

  div {
    height: 100%;
    background-color: green;
    transition: width 1s linear;
  }
`;

export const Controls = styled(motion.div)`

`
export const ControlsButtons = styled(motion.div)``;