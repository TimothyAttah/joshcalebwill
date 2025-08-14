import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ImgAnimationContainer = styled(motion.div)`
	position: relative;
	height: 240vh;
	background-color: green;
	background-color: #000;
	background-color: #e6edf3;
	/* background-color: onion; */
	background-color: var(--brown);

	@media screen and (max-width: 920px) {
		/* height: auto; */
		height: 200vh;
	}
`;
export const ImgAnimationBoxItem = styled(motion.div)`
	width: 60%;
	margin: auto;

	height: 60vh;
	/* border: 2px solid white; */
	position: relative;

	@media screen and (max-width: 920px) {
		/* height: 40vh; */
		height: 50vh;
	}
`;

export const ImgAnimationBox = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* background-color: yellow; */

	img {
		width: 100%;
	}

	/* position: absolute; */
	bottom: 0;

	${(props) =>
		props.right &&
		css`
			right: 0;
		`}

	@media screen and (max-width: 920px) {
		img {
			width: 400px;
		}
	}
`;

export const Text = styled(motion.h1)`
	font-size: 3.2rem;
	margin-bottom: 70px;
	text-align: center;
	color: #fff;
	color: #0d1117;
	@media screen and (max-width: 920px) {
		/* height: auto; */
		font-size: 2rem;
		margin-bottom: 30px;
	}

	@media screen and (max-width: 920px) {
		/* height: auto; */
		font-size: 1.5rem;
		margin-bottom: 30px;
	}
`;
