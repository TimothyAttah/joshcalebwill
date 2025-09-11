import styled from "styled-components";
import { motion } from "framer-motion";

export const NavContainer = styled.nav`
	display: flex;
	align-items: center;
	gap: 0px;
	z-index: 999999;

	@media screen and (max-width: 995px) {
		display: none;
	}
`;

export const NavMenuWrapper = styled(motion.ul)`
	position: relative;
	z-index: 999999;
`;
export const NavMenuList = styled(motion.li)`
	height: 40px;
	position: relative;
	transition: all 1s;
	z-index: 999999;

	a {
		display: flex;
		/* gap: 5px; */
		height: 100%;
		font-size: 18px;
	}

	&::after {
		content: '';
		width: 0%;
		height: 5px;
		background: var(--color2);
		position: absolute;
		bottom: 0;
		left: 0px;
		border-radius: 5px;
		transition: all 1s;
	}

	&:hover {
		svg {
			transform: rotate(180deg);
		}

		&::after {
			width: 100%;
		}
	}
`;
// export const NavMenuLink = styled(motion.ul)``;
export const NavSubMenu = styled(motion.div)``;
export const NavSubMenuWrapper = styled(motion.div)``;
export const NavSubMenuList = styled(motion.div)`
	a {
		display: flex;
		align-items: center;
		gap: 5px;
		cursor: pointer;
		padding: 10px 20px;
		transition: 1s ease all;
	  position: relative;
	}
`;

export const SubMenu = styled(motion.div)`
	position: absolute !important;
	top: 4rem;
	left: -200px;
	padding: 15px;
	transform-origin: 50% - 170px;
	border-radius: 10px;
	background: var(--color2) !important;
	min-width: 600px !important;
	width: 100%;
	/* height: 600px; */
	padding-top: 50px;
	z-index: 999999;

	/* @media screen and (max-width: 970px) {
		min-width: auto;
		left: -300px;
	} */
`;

export const SubMenuGridBox = styled.div`
	gap: 20px;
		display: flex;
		flex-wrap: wrap;

`;

export const SubMenuContainer = styled.div`
	position: relative;
	cursor: pointer;
`;


export const SubMenuWrapper = styled.div`
	display: flex;
	width: 250px;

	a {
		display: flex;
		gap: 5px;
		width: 100%;
		color: green;
		transition: all 1s;
	}

	&:hover {
		div:first-child {
		background-color: #fff;
		}

		svg {
			color: #000;
		}
	}
`;


export const SubMenuIcon = styled.div`
	width: 32px;
	height: 32px;
	padding: 5px;
	background-color: var(--color2);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 1s;

	svg {
		font-size: 50px;
		color: #fff;
		transform: rotate(0deg) !important;
	}


`;
export const SubMenuText = styled.div`
	h4 {
		font-weight: 200;
		color: green;
		color: #fff;
		text-transform: capitalize;
		/* padding-bottom: 5px; */
		transition: all 1s;
		font-size: 16px;
		letter-spacing: 0;
	}

	p {
		opacity: 0.7;
		color: #fff;
		font-size: 14px;
		transition: all 1s;
	}
`;