import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WelcomeContainer = styled(motion.div)`
	width: 80%;
	margin: auto;
	padding: 100px 0;
`;

export const WelcomeWrapper = styled(motion.div)`
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media screen and (max-width: 950px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;
export const WelcomeInfo = styled(motion.div)`
	width: 500px;

	h4 {
		color: #e85d00a8;

	}

	h2 {
		color: #111;
		color: #e85c00;
		font-size: 28px;
		padding: 10px 0;
	}

	p {
		font-size: 15px;
		line-height: 22px;
		padding-top: 10px;
	}

	@media screen and (max-width: 720px) {
		width: 100%;
		text-align: center;
	}
`;
export const WelcomeImgBoxWrapper = styled(motion.div)`
	display: flex;
	gap: 10px;

	@media screen and (max-width: 950px) {
		flex-direction: column;
		width: 100%;
		text-align: center;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;
export const WelcomeImgBox = styled(motion.div)`
	width: 300px;

	p {
		text-align: center;
		text-transform: capitalize;
		padding: 10px 0;
		background: #df6512;
		color: #ffffff;
		width: 233px;
		margin: auto;
		font-size: 15px;
	}
`;

export const WelcomeImg = styled(motion.div)`
	width: 100%;
	height: 300px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export const WelcomeInfoButton = styled(motion.div)`
	border-color: rgb(51, 51, 51);
	border-width: 0px;
	border-radius: 5px;
	background-color: rgb(18, 22, 38) !important;
	height: 35px;

	border-color: rgb(51, 51, 51);
	border-width: 0px;
	border-radius: 5px;
	background-color: rgb(18, 22, 38) !important;
	height: 35px;
	box-shadow: rgb(18, 22, 38) 0px 0px 0px 0px inset;
`;

export const WelcomeInfoButton2 = styled(motion.div)`
	border-color: rgb(51, 51, 51);
	border-width: 0px;
	border-radius: 5px;
	background-color: rgb(223, 101, 18) !important;
	height: 35px;
	box-shadow: rgb(223, 101, 18) 0px 0px 0px 0px inset;
`;
