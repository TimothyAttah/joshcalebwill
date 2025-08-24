import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeAboutParentContainer = styled.div`
	width: 100%;
	padding: 50px;

	@media screen and (max-width: 980px) {
		padding: 50px 10px;
	}
`;

export const HomeAboutChildrenWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	gap: 20px;

	@media screen and (max-width: 980px) {
		flex-direction: column-reverse;
		width: 100%;
		text-align: center;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;

export const HomeAboutImgWrapper = styled.div`
	max-width: 600px;
	width: 100%;
	display: flex;

	img {
		width: 100%;
	}
`

export const HomeAboutImgWrapper2 = styled.div`
	max-width: 600px;
	width: 100%;
	display: flex;
	/* gap: 10px; */

	div {
		max-width: 300px;
		height: 400px;
		width: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	@media screen and (max-width: 980px) {
		flex-direction: column;
		width: 100%;
		text-align: center;
		justify-content: center;
		align-items: center;
		gap: 20px;

		div {
			max-width: 100%;
			margin-top: 10px;
			height: auto;
		}
	}
`;

export const Details = styled.p`
	max-width: 600px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--green);
	color: #fff;
	margin-top: 0px;
	font-weight: bold;
`

export const HomeAboutDetailsWrapper = styled.div`
	max-width: 800px;
	width: 100%;
	padding-top: 20px;
`

export const HomeAboutDetails = styled.div`
	width: 100%;
	padding-top: 20px;

	p {
		font-size: 18px;
		line-height: 25px;
		padding: 10px 0;
	}

	@media screen and (max-width: 450px) {


		p {
			font-size: 12px;
			line-height: 18px;
		}
	}
`;

export const WelcomeImgBoxWrapper = styled(motion.div)`
	display: flex;
	justify-content: space-around;
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
		/* object-fit: contain; */
	}
`;




export const HomeAboutInfoTitleContainer = styled.div`
	width: 100%;
	h4 {
		text-transform: capitalize;
		position: relative;
		width: 200px;
		text-align: center;
		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 50px;
			height: 2px;
			background-color: var(--brown);
		}

		&::before {
			left: 0;
			bottom: 0;
		}

		&::after {
			right: 0;
			bottom: 0;
		}
	}

	h1 {
		margin-top: 10px;
		color: var(--brown);
	}

	@media screen and (max-width: 980px) {
		h4 {
			margin: auto;
			/* font-size: 15px; */
		}

	}

	@media screen and (max-width: 450px) {
		h4 {
			margin: auto;
			font-size: 15px;
		}

		h1 {
			font-size: 22px;
		}
	}
`;


export const HomeAboutMissionContainer = styled.div`
	div {
		margin-bottom: 10px;
		h4 {
			color: var(--brown);
			font-size: 22px;
			font-weight: bold;
		}

		p {
			padding: 10px 0;
			font-size: 18px;
			line-height: 27px;
		}
	}

	@media screen and (max-width: 450px) {
		div {
			h4 {
				font-size: 15px;
			}

			p {
				font-size: 12px;
				line-height: 18px;
			}
		}
	}
`;


