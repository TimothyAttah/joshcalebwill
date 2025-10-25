import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: var(--main-color-o);
	width: 100%;
`;
export const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 50px;
	padding: 50px;
	flex-wrap: wrap;

	@media screen and (max-width: 420px){
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
	}
`;
export const FooterLists = styled.div`
	width: 300px;

	h4 {
		padding-bottom: 24px;
		color: #fff;
		font-weight: bolder;
		font-size: 22px;
	}

	@media screen and (max-width: 420px) {
		width: 100%;
	}
`;

export const FooterListsItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 15px;

	a {
		text-transform: capitalize !important;
    color: #fff;
		font-size: 15px;

		display: flex;
		align-items: center;
		width: 100%;

		svg {
			font-size: 30px;
		}
	}
`;


export const Josh = styled.small`
	text-align: center !important;
	color: #fff;
	display: block;
	font-size: 18px;
	padding-bottom: 20px;
`;
