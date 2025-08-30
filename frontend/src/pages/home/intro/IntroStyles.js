import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const IntroContainer = styled(motion.div)`
	width: 100%;
	padding: 100px 0;
	background-color: #f7f9fa;
`;

export const IntroInfoContainer = styled(motion.div)``;
export const IntroTitleBox = styled(motion.div)`
	max-width: 1000px;
	width: 100%;
	text-align: center;

	margin: auto;
	h4 {
		font-size: 40px;
		font-size: 3rem;
		/* color: var(--brown); */
		background: -webkit-linear-gradient(45deg, #ef6f00 0%, #ee0900 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: #ee0900;

		/* span {
			color: var(--crimson);
		} */
	}

	small {
		color: var(--brown-primary);
		font-size: 18px;
		padding-bottom: 12px;
		display: block;
		font-weight: bold;
	}

	p {
		font-size: 20px;
		padding: 20px 0;
		font-weight: bold;
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
			font-size: 18px;
			padding-bottom: 5px;
		}

		p {
			font-size: 20px;
			line-height: 28px;
		}
	}
`;

export const IntroImgContainer = styled(motion.div)`

`;

export const IntroImgBox = styled(motion.div)`
	max-width: 450px;
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




