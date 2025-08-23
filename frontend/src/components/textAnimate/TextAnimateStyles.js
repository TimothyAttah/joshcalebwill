import styled from 'styled-components';

export const TextAnimateContainer = styled.div`
	background-color: var(--brown);
	width: 100%;
	height: 150vh;

	@media screen and (max-width: 720px) {
		height: 120vh;
	}

	@media screen and (max-width: 450px) {
		height: 100vh;
	}

	@media screen and (max-width: 350px) {
		height: 120vh;
	}
`;

export const TextAnimateWrapper = styled.div``;
export const TextAnimateTitle = styled.h4`
	font-size: 30px;
	color: rgba(108, 53, 8, 1);
  text-align: center;
  padding-top: 100px;
`;

export const TextAnimateText = styled.div`
	width: 100%;
	background-color: var(--brown);
	padding-top: 300px;

  @media screen and (max-width: 720px){
    padding-top: 100px;
  }
`;
