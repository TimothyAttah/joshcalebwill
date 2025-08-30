import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import pix from '../../../assets/healthService8.jpg'

export const ServicesMainContainer = styled.section`
  min-height: 100vh;
  background: url(${pix});
  background-attachment: fixed;
  background-color: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px 0 80px 0;
`;

export const ServicesOverlay = styled.div`
	height: 100%;
	width: 100%;
	background-color: red;
`

export const ServicesTitle = styled.div`
  margin: 40px 0;
`;
export const ServicesTitleText = styled.div`
  text-align: center;
  font-size: 40px;
  color: #e0e2db;
  color: var(--brown);
  font-style: italic;
  text-transform: uppercase;
`;
export const ServicesTitleUnderline = styled.div`
  width: 200px;
  border: 3px solid #e6af2e;
  margin: 0 auto;
`;



export const ServicesContainer = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  color:#e0e2db;

  @media screen and (min-width: 776px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

  }

`;
export const ServicesItem = styled.article`
	overflow: hidden;
	position: relative;
	padding: 60px;
  border: 1px solid #fff;

	svg {
		font-size: 60px;
		margin-bottom: 30px;
		color: #e6af2e;
	}

	&:hover {
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
			background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
		`}

	${(props) =>
		props.white &&
		css`
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
  transition: transform 2s
`;
export const BackText = styled.div`
	position: absolute;
	bottom: -15em;
	width: 75%;
	margin: 0 auto;
	height: 100%;
	transition: bottom 2s;
	padding: 30px;

	h1 {
		margin-bottom: 20px;
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
        color:#191716;

      }
		}
	}
`;

// export const ServicesContainer = styled(motion.section)``;
// export const ServicesContainer = styled(motion.section)``;
