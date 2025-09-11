import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: var(--color2);
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
		align-items: center;
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
	gap: 15px;

	a {
		text-transform: capitalize !important;
    color: #fff;
		font-size: 15px;

		display: flex;
		align-items: center;

		svg {
			font-size: 30px;
		}
	}
`;
