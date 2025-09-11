import styled, {css} from 'styled-components';
import {motion} from 'framer-motion'

export const MobileNavContainer = styled.div`

	/* padding: 15px; */
`;
export const MobileMenuButton = styled(motion.div)`
	z-index: 99999;
	position: relative;
	position: absolute;
	right: 20px;
	top: 20px;
	/* background-color: rgb(129 59 1); */
	background: var(--color2) !important;
	color: #fff;
	border-radius: 10px;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	/* color: #000; */
`;
export const MobileNavWrapper = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 0;
	overflow-y: auto;
	height: 100vh;
	max-width: 400px;
	width: 100%;
	background-color: var(--brown);
	color: #fff;
  padding-top: 120px;
  z-index: 999;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MobileSubMenuListItem = styled(motion.li)`
	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		/* border-radius: 10px; */
		position: relative;
		color: #fff;
    transition: all 1s;
    text-transform: capitalize;

		${(props) =>
			props.clicked &&
			css`
				svg {
					transform: rotate(180deg);
				}
			`}

		&:hover {
			background-color: rgb(129 59 1);
			cursor: pointer;
		}
	}
`;

export const MobileSubMenuListWrapper = styled(motion.ul)``;
export const MobileSubMenuList = styled(motion.li)`
	background-color: rgb(129 59 1);
	background-color: #444;
	/* padding: 10px; */

	a {
		display: flex;
		/* align-items: center; */
		justify-content: flex-start;
		padding: 15px;
		gap: 10px;
		font-size: 16px;
		transition: all 0.3s;

		span:first-child {
			display: block;
			width: 35px;
			height: 35px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			color: #000;
			border-radius: 10px;
			transition: all 0.3s;
		}

		svg {
			transform: rotate(0deg) !important;
		}

		&:hover {
			background-color: #444;
			background-color: rgb(129 59 1);

			padding-left: 25px;

			span:first-child {
				background-color: var(--brown);
				color: #fff;
			}
		}
	}
`;
