import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	height: 110px;
	z-index: 999;
`;

export const HeaderContainer = styled.div`
	height: 100%;
	display: flex;
	padding: 50px 20px;
	justify-content: space-between;
	align-items: center;

`;
export const HeaderLogo = styled.div`
  width: 250px;
	display: flex;
	flex-direction: column;
	align-items: right;
	justify-content: left;
	/* margin-right: 50px; */

  img {
    width: 50px;
  }

 h6 {
	color: #fff;
	padding-top: 5px;
	font-size: 12px;
	line-height: 1;

 }
`;
