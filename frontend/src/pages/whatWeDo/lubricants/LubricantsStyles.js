import styled, { css } from 'styled-components'


export const LubricantsContainer = styled.div`
	padding-top: 100px;
	width: 100%;
	background-color: #f4f4f4;
`;

export const LubricantsTitle = styled.div`
	max-width: 700px;
	width: 100%;
	margin: 50px auto;
	text-align: center;

	h4 {
		font-size: 1.8rem !important;
		line-height: 2.4rem;
		margin-bottom: 16px;
		letter-spacing: normal;
		color: #0b2d71;
		color: var(--main-color);
	}

	h1 {
		font-size: 4.8rem !important;
		font-size: 3.6rem !important;

		line-height: 5.2rem;
		line-height: 4rem;

		letter-spacing: -0.01em;
		margin-bottom: 16px;
		color: var(--main-color);
	}

	${(props) =>
		props.primary &&
		css`
			h2 {
				font-size: 4.8rem !important;
				font-size: 3.6rem !important;
				line-height: 5.2rem;
				line-height: 4rem;
				letter-spacing: -0.01em;
				margin-bottom: 16px;
				color: var(--main-color);
        text-transform: none;
			}

			p {
				font-size: 1.5rem !important;
				line-height: 2.5rem;
			}
		`}
`;
export const LubricantsTitleImg = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: auto;

  img {
    width: 100%;
    border-radius: 50px;
  }
`;
export const LubricantsIntroSection = styled.div`
	h1 {
		font-size: 4.8rem !important;
		font-size: 3.6rem !important;

		line-height: 5.2rem;
		line-height: 4rem;

		letter-spacing: -0.01em;
		margin-bottom: 16px;
		color: var(--main-color);
    text-align: center;
	}
`;
export const LubricantsIntroSectionTitle = styled.div`

`;
export const LubricantsGallery = styled.div``;
export const LubricantsOptionsWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const LubricantsOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0;

  ${props => props.primary && css`
    flex-direction: row-reverse;
  `}
`;

export const LubricantsOptionsImg = styled.div`
  max-width: 600px;
  height: 500px;
  width: 100%;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const LubricantsOptionsInfo = styled.div`
	max-width: 500px;
	width: 100%;

  h4 {
    font-size: 22px;
  }

  p {
    font-size: 18px;
  }
`;


// export const LubricantsTitle = styled.div``;
