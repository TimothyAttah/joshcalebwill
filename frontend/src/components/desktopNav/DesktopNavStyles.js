import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DesktopNav = styled.nav`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* border: 2px solid yellow; */
`;

export const DesktopNavListWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;
	gap: 20px;
	transition: all 0.5s ease-in-out;
	/* border: 2px solid #fff; */

	.tabBg {
		background-color: var(--base-color-green-neg);
		color: #fff;

		a {
			/* height: 50px; */
			color: #fff;
		}

		svg {
			transform: rotate(180deg);
		}
	}
`;

export const DesktopNavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 50px;

	li a {
		color: #fff;
	}
`;
export const DesktopNavTab = styled.div``;
export const DesktopNavTabButton = styled.button`
	display: flex;
	align-items: center;
	gap: 5px;
	border-radius: 10px;
	padding: 10px;
	background: transparent;
	color: var(--color-light-gray);
	transition: 0.5s ease all;

	/* border: 2px solid #fff; */

	a {
		color: var(--color-light-gray);
		font-weight: 200px;
	}
`;

export const DesktopNavTabContent = styled(motion.div)`
	position: absolute;
	left: 0;
	top: calc(100% + -10px);
	width: 35rem;
	border-radius: 8px;
	border: 1px solid var(--base-color-green-plus);
	background-image: linear-gradient(to bottom, var(--base-color-green-neg));
	padding: 16px;
`;

export const BridgeBox = styled.div`
	position: absolute;
	top: -24px;
	left: 0;
	right: 0;
	height: 24px;
`;
export const Submenu = styled.div`
	overflow: hidden;
`;

export const SubmenuList = styled(motion.div)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
`;

export const SubmenuListItem = styled(motion.div)`
	color: var(--color-light-gray);
	width: 100%;
	/* background-color: var(--base-color-green); */
	padding: 10px;
	border-radius: 5px;

	a {
		color: var(--color-light-gray);
		width: 100%;
		display: block;
	}
`;
export const Nub = styled(motion.span)`
	position: absolute;
	left: 50%;
	top: -5px;
	transform: translateX(-50%);
	transform: translateY(50%);
	height: 16px;
	width: 16px;
	transform: rotate(45deg);
	border-top-left-radius: 4px;
	border-width: 1px;
	background-color: var(--base-color-green-neg);
`;
// export const DesktopNav = styled.div``;
