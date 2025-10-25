import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DesktopNav = styled.nav`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* border: 2px solid yellow; */

	@media screen and (max-width: 950px) {
		justify-content: end;
	}
`;

export const DesktopNavListWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;
	gap: 20px;
	transition: all 0.5s ease-in-out;

	.tabBg {
		/* background-color: var(--base-color-gold-neg);
		background-color: red; */
		color: #fff;
		/* border: 1px solid var(--base-color-gold-neg); */

		a {
			/* height: 50px; */
			color: #fff;
		}

		svg {
			transform: rotate(180deg);
		}
	}

	@media screen and (max-width: 950px) {
		display: none;
	}
`;

export const DesktopNavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 50px;

	li a {
		color: #fff;

		/* border: 1px solid var(--base-color-gold-neg); */
		position: relative;
		padding: 12px 40px;
		transition: all 0.8s ease;
		border-radius: 10px;
		background-color: var(--main-color-g);
		font-weight: bold !important;

		&::before {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: var(--base-color-gold-neg);
			width: 0;
			transition: all 0.8s ease;
			z-index: -1;
			border-radius: 10px;
		}

		&:hover::before {
			width: 100%;
			left: 0;
			right: auto;
		}

		&:hover {
			color: var(--main-color-g);
			font-weight: bold !important;

			background-color: transparent;
		}
	}

	@media screen and (max-width: 950px) {
		display: none;
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
	/* border: 1px solid var(--base-color-gold-neg); */
	position: relative;
	background-color: var(--main-color-g);

	a {
		color: var(--color-light-gray);
		font-weight: 200px;
		font-weight: bold !important;
	}

	&::before {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: var(--base-color-gold-neg);
		width: 0;
		transition: all 0.8s ease;
		z-index: -1;
		border-radius: 10px;
	}

	&:hover::before {
		width: 100%;
		left: 0;
		right: auto;
	}

	&:hover {
		background-color: transparent;
		a {
			color: var(--main-color-g);
			font-weight: bold !important;
		}
	}
`;

export const DesktopNavTabContent = styled(motion.div)`
	position: absolute;
	left: 0;
	top: calc(100% + -10px);
	width: 35rem;
	border-radius: 8px;
	border: 1px solid var(--base-color-gold-plus);
	/* background-image: linear-gradient(to bottom, var(--base-color-gold-neg)); */
	background-color: var(--base-color-gold-neg);

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
	background-color: var(--base-color-gold-neg);
`;
// export const DesktopNav = styled.div``;
export const MenuBtn = styled.button`
	background-color: transparent;
	color: #fff;
	z-index: 9999;

	svg {
		color: #fff;
	}
`;
