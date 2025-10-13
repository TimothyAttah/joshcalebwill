import styled from "styled-components";

export const Welcome = styled.div`

padding-top: 100px;
`;


export const WelcomeText = styled.div`
	max-width: 800px;
	margin: 100%;
	margin: auto;

	small {
		color: var(--base-color-green-neg);
		display: block;
		padding-bottom: 5px;
	}

	h4 {
		font-size: 34px;
		color: var(--base-color-green-plus);
    text-transform: uppercase;
    line-height: 50px;
	}

  p {
    font-size: 18px;
    padding-top: 10px;
  }
`;
