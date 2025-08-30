import styled from "styled-components";
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
	background: transparent;
	/* height: 80px; */
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
	/* border: 2px solid red; */
	background: var(--brown);
	color: #fff;

	a {
		color: #fff;
	}
`;
export const HeaderWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const HeaderLogo = styled(motion.div)`
	a {
		display: flex;
    flex-direction: column;
		align-items: center;
    justify-content: center;
    text-align: center;

    h4 {
      font-size: 14px;
    }
	}

	img {
		width: 40px;
	}
`;

export const HeaderMenuWrapper = styled.div`
	position: relative;
	width: 200px;
	/* height: 100%; */
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
	/* height: 70px; */
	margin-top: -16px;
	padding-right: 50px;

	a {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 25px;

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

