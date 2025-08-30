import styled from "styled-components";
import { motion } from "framer-motion";

export const Slider = styled(motion.div)`
	height: 75vh;
	width: 100%;
	position: relative;
	overflow: hidden;
	transition: 0.5s;
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
	height: 100%;
	width: 100%;
	overflow: hidden;
	position: relative;

`;



export const Slide1 = styled(motion.div)`
	width: 100%;
	height: 100%;
	/* position: absolute;
	top: 0;
	left: 0; */
	background: var(--brown);
	@media screen and (max-width: 920px) {
		height: auto;
		/* padding: 20px 0; */
	}
`;

export const Slide2 = styled(motion.div)`
	width: 100%;
	height: 100%;
  /* position: absolute;
  top: 0;
  left: 0; */
	background: var(--color-medium-blue);
	@media screen and (max-width: 920px) {
		height: auto;
		/* padding: 20px 0; */
	}
`;

export const Slide3 = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: #000;
	/* position: absolute;
	top: 0;
	left: 0; */
	color: var(--brown);
	@media screen and (max-width: 920px) {
		height: auto;
		/* padding: 20px 0; */
	}
`;

export const Slide4 = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: var(--brown);
	/* position: absolute;
	top: 0;
	left: 0; */
	@media screen and (max-width: 920px) {
		height: auto;
		/* padding: 20px 0; */
	}
`;

export const Slide5 = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: var(--brown);
	/* position: absolute;
	top: 0;
	left: 0; */

	@media screen and (max-width: 920px) {
		height: auto;
		/* padding: 20px 0; */
	}
`;

export const SlideItem = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  padding: 20px;

  @media screen and (max-width: 920px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SlideItemInfo = styled(motion.div)`
	max-width: 500px;
	width: 100%;
	color: #fff;

	h2 {
		font-size: 50px;
		padding-bottom: 5px;
	}

	h4 {
		font-size: 30px;
	}

	p {
		font-size: 20px;
		line-height: 1.3;
		padding: 10px 0;
	}

	a {
		width: 200px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 18px;
		text-transform: capitalize;
		margin: 20px 0;
		border: 2px solid #fff;
	}

	@media screen and (max-width: 1120px) {
		h2 {
			font-size: 40px;
		}

		h4 {
			font-size: 26px;
		}

		p {
			font-size: 18px;
			line-height: 1.3;
			padding: 10px 0;
		}
	}

	@media screen and (max-width: 920px) {
		max-width: 700px;
		h2 {
			font-size: 30px;
		}

		h4 {
			font-size: 22px;
		}

		p {
			font-size: 16px;
			line-height: 1.1;
			padding: 10px 0;
		}
	}

	@media screen and (max-width: 450px) {
		text-align: center;

		h2 {
			font-size: 25px;
		}

		h4 {
			font-size: 20px;
		}

		p {
			font-size: 14px;
			line-height: 1.1;
			padding: 10px 0;
		}

		a {
			margin: 20px auto;
		}
	}
`;
export const SlideItemImg = styled(motion.div)`
	max-width: 700px;
	width: 100%;

  img {
    width: 100%;
  }
`;
