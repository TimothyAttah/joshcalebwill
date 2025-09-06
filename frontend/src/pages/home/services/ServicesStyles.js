import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import pix from '../../../assets/serviceBg.png'

export const ServicesMainContainer = styled.section`
  min-height: 100vh;
  background: url(${pix});
  background-attachment: fixed;
  background-color: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px 0 80px 0;
	position: relative;
	z-index: 1;


`;

export const ServicesOverlay = styled.div`
	height: 100%;
	width: 100%;
	background: rgba(0,0,0,0.6);
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`;

export const ServicesTitle = styled.div`
  margin: 40px 0;
	z-index: 999 !important;
`;
export const ServicesTitleText = styled.div`
	text-align: center;
	font-size: 40px;
	color: #e0e2db;
	color: var(--brown);
	font-style: italic;
	text-transform: uppercase;
	z-index: 999 !important;

	h1 {
		color: var(--color2);
	}
`;
export const ServicesTitleUnderline = styled.div`
	width: 200px;
	/* border: 3px solid #e6af2e; */
	border: 3px solid var(--color1);

	margin: 0 auto;
`;



export const ServicesContainer = styled.div`
	max-width: 90vw;
	margin: 0 auto;
	color: #e0e2db;
	z-index: 999 !important;

	@media screen and (min-width: 776px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`;
export const ServicesItem = styled.article`
	overflow: hidden;
	position: relative;
	/* padding: 60px; */
	border: 1px solid #fff;
	height: 270px;
	z-index: 999 !important;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	svg {
		font-size: 60px;
		margin-bottom: 30px;
		color: #e6af2e;
		display: none;
	}

	&:hover {
		z-index: 999 !important;
		.front-text {
			transform: translateY(-200px);
		}

		.back-text {
			bottom: 0;
		}
	}

	${(props) =>
		props.black &&
		css`
			z-index: 999 !important;
			background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
		`}

	${(props) =>
		props.white &&
		css`
			z-index: 999 !important;
			background: linear-gradient(
				rgba(206, 208, 206, 0.6),
				rgba(206, 208, 206, 0.6)
			);
			color: #191716;

			button {
				background: #e6af2e !important;

				a {
					color: #191716 !important;
				}

				&:hover {
					background: #191716 !important;
					border-color: #191716 !important;
					z-index: 999 !important;

					a {
						color: #e6af2e !important;
					}
				}
			}
		`}

    @media screen and (min-width: 776px) {
		/* &:nth-of-type(1) {
			order: 1;
		}
		&:nth-of-type(2) {
			order: 2;
		}
		&:nth-of-type(3) {
			order: 4;
		}
		&:nth-of-type(4) {
			order: 3;
		} */

		/* &:nth-of-type(1) {
			order: 1;
		}
		&:nth-of-type(4) {
			order: 4;
		}
		&:nth-of-type(4) {
			order: 3;
		} */

		&:nth-of-type(1) {
			order: 1;
		}
		&:nth-of-type(2) {
			order: 2;
		}
		&:nth-of-type(3) {
			order: 2;
		}
		&:nth-of-type(5) {
			order: 3;
		}
		&:nth-of-type(6) {
			order: 3;
		}
		&:nth-of-type(7) {
			order: 6;
		}
	}
`;
export const FrontText = styled.div`
	text-align: center;
	transition: transform 2s;
	z-index: 999 !important;

	h1 {
		color: var(--main-color);
		font-size: 18px;
	}
`;
export const BackText = styled.div`
	position: absolute;
	bottom: -15em;
	width: 90%;
	margin: 0 auto;
	height: 100%;
	transition: bottom 2s;
	padding: 10px;
	z-index: 999 !important;

	h1 {
		margin-bottom: 10px;
		font-size: 15px;
		color: var(--main-color);
	}

	p {
		font-size: 12px;
	}

	button {
		margin-top: 20px;
		padding: 10px 20px;
		background: transparent;
		border: 2px solid #e6af2e;
		font-size: 20px;

		a {
			color: #e6af2e;
		}

		&:hover {
			background-color: #e6af2e;

			a {
				color: #191716;
			}
		}
	}
`;

// export const ServicesContainer = styled(motion.section)``;
// export const ServicesContainer = styled(motion.section)``;
