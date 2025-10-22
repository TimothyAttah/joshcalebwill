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

	p {
		color: #000;
	}

	h4 {
		font-size: 1.8rem !important;
		line-height: 2.4rem;
		margin-bottom: 16px;
		letter-spacing: normal;
		color: #0b2d71;
		color: var(--main-color-o);
	}

	h1 {
		font-size: 4.8rem !important;
		font-size: 3.6rem !important;

		line-height: 5.2rem;
		line-height: 4rem;

		letter-spacing: -0.01em;
		margin-bottom: 16px;
		color: var(--main-color-o);
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
				color: var(--main-color-o);
				text-transform: none;
			}

			p {
				font-size: 1.5rem !important;
				line-height: 2.5rem;
				color: #000;
			}
		`}

	@media screen and (max-width: 520px) {
		max-width: 100%;

		h4,
		p, h2, h1 {
			text-align: center !important;
		}
	}
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
		color: var(--main-color-o);
		text-align: center;
	}

	@media screen and (max-width: 520px) {
		max-width: 100%;

		h1,
		p {
			text-align: center !important;
		}
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
	gap: 20px;

	${(props) =>
		props.primary &&
		css`
			flex-direction: row-reverse;
		`}

	@media screen and (max-width: 900px) {
		flex-direction: column;
	}

	@media screen and (max-width: 520px) {
		padding: 20px;
		text-align: center !important;
	}
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

	@media screen and (max-width: 520px) {
		max-width: 100%;
	}
`;

export const LubricantsOptionsInfo = styled.div`
	max-width: 500px;
	width: 100%;

	h4 {
		font-size: 22px;
		color: var(--main-color-o);
		padding-bottom: 10px;
	}

	p {
		font-size: 18px;
		color: #000;
	}

	@media screen and (max-width: 520px) {
		max-width: 100%;

		h4,
		p {
			text-align: center !important;
		}
	}
`;


export const LubricantsInfo = styled.div`
	h2{
		font-size: 22px;
		color: var(--main-color-o);
		padding-bottom: 10px;
	}

	p {
		font-size: 18px;
		color: #000;
		padding-bottom: 10px;
	}
	@media screen and (max-width: 520px) {
		max-width: 100%;

		h2,
		p, small {
			text-align: center !important;
			display: block;
		}
	}
`;
