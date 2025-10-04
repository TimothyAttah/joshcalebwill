import styled, {css} from 'styled-components';
import {motion} from 'framer-motion'

export const HeaderSidebarContainer = styled.div`
	.embla {
		overflow: hidden;
		position: relative;
		height: 300px;
		/* height: 100vh; */
	}
`;
export const HeaderSidebarMenuButton = styled(motion.div)`
	z-index: 9999999;
	/* position: relative; */
	position: absolute;
	right: 30px;
	top: -5px;
	background-color: rgb(129 59 1);
	/* background: inherit; */
  /* background-color: #fff; */
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
export const HeaderSidebarNavWrapper = styled(motion.div)`
	position: fixed;
	/* position: absolute; */

	right: 0;
	top: 0;
	overflow-y: auto;
	height: 100vh;
	max-width: 400px;
	width: 100%;
	background-color: var(--brown);
	background-color: #fff;
	color: #fff;
	color: #000;
	padding-top: 120px;
	z-index: 999999;
	padding: 20px;
	padding-top: 150px;
	box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const SidebarLogo = styled.div`
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		position: absolute;
		left: 20px;
		top: 20px;

		h4 {
			font-size: 14px;
			color: rgb(129 59 1);
		}
	}

	img {
		width: 40px;
	}
`;

export const ImgBox = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`

export const InfoList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 14px;
	padding: 5px 0;

	span {
		color: var(--brown);
	}

	h4 {
		display: flex;
		align-items: center;
		gap: 5px;
		color: rgb(129 59 1);
	}
`;


export const InfoSocialLinksWrapper = styled.div`
	display: flex;
  align-items: center;
	gap: 30px;
  margin-top: 20px;
`;

export const InfoSocialLink = styled.div`
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: var(--brown);
		background-color: rgb(129 59 1);
		color: #fff;
		padding: 5px;
	}
`;
