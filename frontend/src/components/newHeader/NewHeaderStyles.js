import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	height: 100px;
	/* box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.5); */
	z-index: 99999;
	/* background: var(--base-color-green); */
`;

export const HeaderContainer = styled.div`
	height: 100%;
	display: flex;
	padding: 50px 20px;
	justify-content: space-between;
	align-items: center;

	/* background-color: var(--base-color-green); */
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
		/* text-align: center; */
		color: #fff;
		padding-top: 5px;
	}
`;

// export const Header = styled.div``;
// export const Header = styled.div``;
// export const Header = styled.div``;
// export const Header = styled.div``;
// export const Header = styled.div``;
// export const Header = styled.div``;
