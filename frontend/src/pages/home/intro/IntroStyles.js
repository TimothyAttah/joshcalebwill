import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const IntroContainer = styled(motion.div)`
	width: 100%;
	padding: 100px 0;
	background-color: #f7f9fa;
	/* background-color: #ff9b44ad; */
	/* background-color: skyblue; */
	/* background-color: #000; */
	background: linear-gradient(45deg, var(--brown) 0%, var(--brown-primary) 50%);
	ackground: linear-gradient(90deg, var(--brown) 0%, var(--brown-primary) 50%);
`;

export const IntroInfoContainer = styled(motion.div)``;
export const IntroTitleBox = styled(motion.div)`
	max-width: 1000px;
	width: 100%;
	text-align: center;

	margin: auto;
	h4 {
		font-size: 70px !important;
		font-size: 3rem;
		/* color: var(--brown); */
		/* background: -webkit-linear-gradient(45deg, #ef6f00 0%, #ee0900 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent; */
		color: #b95c00ff;
		/* color: #fff; */
		/* color: #0b2d71; */
		color: #ff933a;
		color: rgb(255, 85, 0);

		/* span {
			color: var(--crimson);
		} */
	}

	small {
		color: var(--brown);
		/* color: #fff; */
		/* color: #0b2d71; */
		color: #b95c00ff;
		color: var(--green);
		/* color: rgb(9, 255, 0); */

		font-size: 18px;
		padding-bottom: 12px;
		display: block;
		font-weight: bold;
	}

	p {
		font-size: 30px;
		padding: 40px 0;
		font-weight: bold;
		/* color: #fff; */
		color: #f5891dff;
		color: #b95c00ff;
		color: rgb(115, 255, 0);
		color: rgb(129, 255, 25);
		color: rgb(179, 255, 93);
		color: rgb(115, 0, 255);
		color: rgb(140, 0, 255);
		color: rgb(255, 85, 0);
		color: rgb(9, 255, 0);
		color: var(--green);
	}
`;

export const IntroVisionMissionContainer = styled(motion.div)`
	max-width: 1000px;
	width: 100%;
	text-align: center;

	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	div {
		max-width: 600px;
		h4 {
			color: var(--brown);
			/* color: #032c6eff; */
			/* color: #fff; */
			font-size: 27px !important;

			font-size: 18px;
			padding-bottom: 5px;

			width: 300px;
			padding: 10px 20px;
			/* height: 40px; */
			background: #032c6eff;
			color: #fff;
			border-radius: 50px;
			margin: auto;
			margin-bottom: 10px;
		}

		p {
			font-size: 20px !important;
			line-height: 28px;
			color: var(--brown);
			/* color: #0b2d71; */
			/* color: #0c4db4ff; */
			color: rgb(255, 85, 0);
		}
	}
`;

export const IntroImgContainer = styled(motion.div)`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media screen and (max-width: 990px){
		flex-direction: column;
	}
`;

export const IntroImgBox = styled(motion.div)`
	max-width: 400px;
	width: 100%;
	height: 600px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 520px) {
		max-width: 100%;
	}
`;
export const IntroImgBoxWrapper = styled(motion.div)`
	display: flex;
	gap: 10px;
	/* border: 2px solid green; */

	@media screen and (max-width: 520px){
		flex-direction: column;

	}
`;
export const IntroImgInfoTitle = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 20px;

	@media screen and (max-width: 520px) {
		max-width: 100%;
		text-align: center;
	}
`;
export const IntroImgInfoBoxWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 80px;
	/* gap: 50px; */

	/* ${props => props.primary && css`
		flex-direction: row-reverse;
	`} */
`;




