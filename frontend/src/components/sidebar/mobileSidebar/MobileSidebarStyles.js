import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const MobileSidebar = styled(motion.div)`
	max-width: 500px;
	width: 100%;
	height: 100vh;
	background-color: var(--base-color-gold);
	color: #fff;
	position: absolute;
	right: 0;
	top: 0;
	/* display: none; */

	/* @media screen and (max-width: 950px) {
		display: block;
	} */

	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}


`;

export const MenuBtn = styled.button`
	position: absolute;
	right: 20px;
	top: 20px;
	background-color: transparent;
	color: #fff;

	svg {
		color: #fff;
	}
`;

export const MobileSidebarContainer = styled(motion.div)`
	width: 100%;
	padding: 0 50px;
	padding-top: 100px;
`;
export const MobileSidebarList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  /* gap: 40px; */
`;
export const MobileSidebarListItem = styled(motion.li)`
	height: 100%;
	position: relative;
	/* padding-bottom: 10px; */
	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 5px;
		/* border-radius: 10px; */
		position: relative;
		color: #fff;
		transition: all 1s;
		text-transform: capitalize;
		transition: all 0.3s ease;
		position: relative;

		${(props) =>
			props.clicked &&
			css`
				svg {
					transform: rotate(180deg);
					transition: all 0.3s ease;
				}
			`}

		&:hover {
			background-color: transparent;
			background-color: var(--base-color-gold-plus);
			background-color: rgb(129 59 1);

			cursor: pointer;
			/* border-radius: 10px; */
			svg {
				transform: rotate(180deg);
			}
		}

		/* &::before {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: var(--base-color-gold-neg);
			background-color: red;
			width: 0;
			transition: all 0.8s ease;
			z-index: -1;
			border-radius: 10px;
		}

		&:hover::before {
			width: 100%;
			left: 0;
			right: auto;
			z-index: 1;
		}

		&:hover {
			color: var(--main-color-g);
			color: #fff;
			z-index: 1;
		} */
	}

	/* &:hover {
		> ul {
			display: flex;
			flex-direction: column;
			z-index: 99;
			height: 100%;
		}
	} */
`;

export const MobileSidebarSubMenuList = styled(motion.ul)`
	width: 100%;
	height: 0;
	transition: 0.5s ease all;
	display: flex;
	flex-direction: column;
	/* gap: 10px; */
	background-color: initial;
`;
export const MobileSidebarSubMenuListItem = styled.li`
	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		position: relative;
		color: #fff;
		transition: all 1s;
		text-transform: capitalize;
		position: relative;

		${(props) =>
			props.clicked &&
			css`
				svg {
					transform: rotate(180deg);
					transition: all 0.3s ease;
				}
			`}

		&:hover {
			background-color: var(-main-color-o);
			background-color: rgb(129 59 1);

			cursor: pointer;
			border-radius: 10px;
			svg {
				transform: rotate(180deg);
			}
		}

		/* &::before {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: var(--base-color-gold-neg);
			background-color: red;
			width: 0;
			transition: all 0.8s ease;
			z-index: -1;
			border-radius: 10px;
		} */

		/* &:hover::before {
			width: 100%;
			left: 0;
			right: auto;
		} */

		/* &:hover {
			color: var(--main-color-g);
		} */
	}
`;

export const MobileSubMenuListWrapper = styled(motion.ul)`
	padding: 0;
`;
export const MobileSubMenuList = styled(motion.li)`
	/* background-color: var(--base-color-gold-plus); */
	/* background-color: #444; */
	/* padding: 10px; */
	background-color: var(--main-color-g);
	background-color: rgb(129 59 1);

	a {
		display: flex;
		/* align-items: center; */
		justify-content: flex-start;
		padding: 15px 5px;
		gap: 10px;
		font-size: 16px;
		transition: all 0.3s;

		/* span:first-child {
			display: block;
			width: 25px;
			height: 25px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			color: #000;
			border-radius: 10px;
			transition: all 0.3s;

			svg {
				width: 15px;
				height: 15px;
			}
		} */

		/* svg {
			transform: rotate(0deg) !important;
			font-size: 20px;
		} */

		&:hover {
			background-color: #444;
			background-color: rgb(129 59 1);
			padding-left: 20px;

			span:first-child {
				background-color: var(--brown);
				color: #fff;
			}
		}
	}
`;
// export const MobileSidebar = styled(motion.div)``;
// export const MobileSidebar = styled(motion.div)``;
// export const MobileSidebar = styled(motion.div)``;
