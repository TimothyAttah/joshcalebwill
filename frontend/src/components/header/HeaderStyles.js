import styled from "styled-components";
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
	height: 85px;
	font-size: 1.2rem;
	position: sticky;
	position: fixed;
	/* position: absolute; */
	top: 0;
	z-index: 999;
	background: var(--brown);
	background: transparent;
	color: #fff;
	max-width: 2000px !important;
	width: 100% !important;
	transition: 0.5s ease-in-out all;

	a {
		color: #fff !important;
	}
`;
export const HeaderWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
export const HeaderLogo = styled(motion.div)`
	a {
		display: flex;
    flex-direction: column;
		align-items: center;
    justify-content: center;
    text-align: center;

    h4 {
      font-size: 12px;
			text-transform: lowercase;
			letter-spacing: 0;
			color: #fff;
    }
	}

	img {
		width: 40px;
	}
`;

export const HeaderMenuWrapper = styled.div`
	position: relative;
	width: 200px;
	height: 100%;
	/* border: 2px solid green; */
	/* border: 3px dashed green; */

	@media screen and (max-width: 1120px) {
		width: 150px;
		padding-right: 170px;
	}
`;
export const HeaderMenu = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: 20px;
	height: 100%;
	margin-top: -10px;
	padding-right: 100px;
	/* border: 2px solid red; */

	a {
		display: flex;
		align-items: center !important;
		justify-content: center;
		gap: 10px;
		font-weight: bold;

		h6, svg {
			color: var(--color2);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0;
			margin: 0;
		}
	}

	@media screen and (max-width: 995px) {
		display: none;
	}
`;

export const HeaderSidebarContainer = styled.div`
	position: absolute;
	right: 20px;
	top: -20px;
	z-index: 999999999;
	/* border: 3px dashed green; */

	@media screen and (max-width: 1120px) {
		right: 0px;
	}

	@media screen and (max-width: 995px) {
		display: none;
	}
`;

export const HeaderSubmenu = styled.div`
	display: none;
	@media screen and (max-width: 995px) {
		display: block;
	}
`;
// export const HeaderContainer = styled(motion.div)``;
