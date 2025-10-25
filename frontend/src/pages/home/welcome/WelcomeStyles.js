import styled from 'styled-components';

export const Welcome = styled.div`
	padding-top: 100px;
`;

export const WelcomeText = styled.div`
	max-width: 800px;
	margin: 100%;
	margin: auto;
	padding: 0 20px;

	small {
		color: var(--base-color-green-neg);
		color: var(--main-color-o);
		display: block;
		padding-bottom: 5px;
		font-size: 18px !important;
		font-weight: bold;
	}

	h4 {
		font-size: 34px !important;
		color: var(--base-color-green-plus);
		color: var(--main-color-o);
		text-transform: normal;
		line-height: 50px;
	}

	p {
		font-size: 18px;
		padding-top: 10px;
	}

	@media screen and (max-width: 560px) {
		padding: 10px;
		small {
			text-align: center !important;
		}

		h4 {
			text-align: center !important;
		}

		p {
			text-align: center !important;
			color: #000;
		}
	}
`;
