import styled from "styled-components";
import { motion } from "framer-motion";

export const SidebarContainer = styled(motion.div)`
	position: absolute;
	top: 0;
	right: 0;
	width: 350px;
	height: 100vh;
	background-color: var(--brown);
	/* background-color: gold; */
	z-index: 999;

	@media screen and (max-width: 420px) {
		width: 100%;
	}
`;
export const SidebarWrapper = styled(motion.div)`
  padding: 20px 20px;
  width: 100%;
	margin-top: 50px;


`;
export const SidebarLinks = styled(motion.ul)`
	display: flex;
	flex-direction: column;


`;
export const SidebarLinksItem = styled(motion.li)`
	width: 100%;

	a {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		padding: 22px 0;
		transition: all ease 0.3s;
		text-transform: capitalize;
		font-weight: bold;
		font-size: 16px;

		&:hover {
			color: #ff8a00;
		}
	}
`;


export const Inner = styled(motion.div)`
	position: absolute;
	padding: 1rem;
	color: #c3c1cb;
`;

export const Header = styled(motion.button)`
	width: 100%;
	height: 5rem;
	padding: 0 1rem;
	font-size: 1rem;
	text-align: left;
	background: #212025;
	background-color: crimson;
	background-color: var(--brown);

	color: inherit;
	cursor: pointer;
	/* margin-bottom: 10px; */
	/* border-bottom: 2px solid #fff; */

	a {
		width: 100%;
		/* height: 100%; */
		display: flex;
		justify-content: space-between;
		text-transform: capitalize;
		color: #fff;
	}
`;

export const HeaderIcon = styled(motion.span)`
	svg {
		transform: rotate(${(props) => (props.isActive ? -180 : 0)}deg);
		transition: all 0.2s;
	}
`;

export const Content = styled(motion.div)`
	position: relative;
	overflow: hidden;
	height: ${(props) => {
		const inner = document.getElementById(props.itemName);
		return `${props.isActive && inner ? inner.clientHeight : 0}px`;
	}};
	transition: height 0.35s;
	background-color: #0000;
	color: #fff;
	text-transform: capitalize;

	a {
		display: block;
		width: 100%;
		color: #fff;
		border-bottom: 1px solid #fff;
		margin: 10px;
		font-size: 12px;
	}
`;

export const CloseSidebar = styled.div`
	position: absolute;
	right: 20px;
	top: 20px;
	color: #fff;
	cursor: pointer;
	font-size: 20px;
`;

export const OneLinkBox = styled.div`
	width: 100%;
	z-index: 999;
	display: flex;
	flex-direction: column;
	/* gap: 50px; */
	a {
		color: #fff;
		width: 100%;
		/* height: 5rem; */
		padding: 0 1rem;
		font-size: 1rem;
		text-align: left;
		padding: 30px 16px;
	}
`;
