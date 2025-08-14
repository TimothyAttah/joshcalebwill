import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
	width: 100%;
	/* height: 80px; */
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${(props) => (props.activeBG ? '#ff8a00;' : 'transparent')};
	z-index: 999;
	/* background-color: orange; */
`;

export const HeaderWrapper = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 50px;
`;
export const HeaderLogo = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100px;
	img {
		width: 100%;
	}

	h4 {
		text-transform: uppercase;
		font-size: 20px;
	}

	@media screen and (max-width: 420px) {
		width: 50px;
	}
`;
export const HeaderMenu = styled(motion.div)`
	display: flex;
	gap: 20px;
	align-items: center;

	a {
		color: #fff;
	}

	@media screen and (max-width: 420px) {
		a {
			display: none;
		}
	}
`;
