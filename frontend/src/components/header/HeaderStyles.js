import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
	width: 100%;
	/* height: 80px; */
	position: absolute;
	top: 0;
	left: 0;
	color: ${(props) => (props.activeBG ? '#fff' : 'transparent')};
	color: var(--brown);
	background-color: ${(props) =>
		props.activeBG ? 'var(--brown)' : 'transparent'};
	z-index: 999;
	background-color: transparent;
`;

export const HeaderWrapper = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 50px;
`;
export const HeaderLogo = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	/* flex-direction: column; */
	/* margin-top: 50px; */

	/* width: 80px; */
	img {
		width: 50px;
	}

	a {
		width: 100%;
		display: flex;
		/* flex-direction: column; */
		align-items: center;
		justify-content: center;
		color: var(--brown);
		font-weight: bold;
	}

	h1 {
		text-transform: uppercase;
		font-size: 14px;
		color: #fff;
		/* color: gold; */
		/* border: 2px solid #fff; */
		text-align: center;
		padding: 5px;
		color: var(--brown);
	}

	h4 {
		text-transform: uppercase;
		font-size: 20px;
	}

	@media screen and (max-width: 520px) {
		width: 50px;
	}
`;
export const HeaderMenu = styled(motion.div)`
	display: flex;
	gap: 20px;
	align-items: center;

	a {
		color: #fff;
		color: var(--brown);
		font-weight: bold;
	}

	svg {
		color: #fff;
		color: var(--brown);
		font-size: 27px;
		cursor: pointer;
	}

	@media screen and (max-width: 950px) {
		a {
			display: none;
		}
	}
`;
