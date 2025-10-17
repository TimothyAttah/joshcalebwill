import styled, { css } from 'styled-components';

export const Culture = styled.div``;
export const CultureInfo = styled.div`
	background-color: #fff;
	padding: 50px 0;

	p {
		max-width: 700px;
		margin: auto;
		font-size: 22px;
		line-height: 30px;
		color: #000;
		text-align: center !important;
	}
`;
export const CultureOptions = styled.div``;
export const CultureOptionsList = styled.div`
	max-width: 1200px;
	margin: 50px auto;
	width: 100%;
	height: 500px;
	display: flex;
	border-radius: 20px;
	overflow: hidden;

	${(props) =>
		props.second &&
		css`
			flex-direction: row-reverse;
		`}

	@media screen and (max-width: 670px) {
		flex-direction: column;
		max-width: 100%;
		height: 100%;
	}
`;
export const CultureOptionsListImg = styled.div`
	max-width: 600px;
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 670px) {
		max-width: 100%;
	}
`;
export const CultureOptionsListInfo = styled.div`
	max-width: 600px;
	width: 100%;
	height: 100%;
	padding: 70px;

	p {
		color: #fff;
		margin-top: 20px;
	}

	${(props) =>
		props.first &&
		css`
			background-color: var(--base-color-gold);

			h4 {
				color: var(--base-color-gold-neg);
				font-size: 3rem;
			}
		`}

	${(props) =>
		props.second &&
		css`
			background-color: var(--base-color-green);

			h4 {
				color: var(--base-color-green-neg);
				font-size: 3rem;
			}
		`}

		${(props) =>
		props.third &&
		css`
			background-color: var(--color-medium-red);
			h4 {
				color: var(--color-light-red);
				font-size: 3rem;
			}
		`}

		@media screen and (max-width: 900px) {
		padding: 50px;
	}

	@media screen and (max-width: 670px) {
		max-width: 100%;
	}

	@media screen and (max-width: 420px) {
		padding: 20px;
		h4 {
			font-size: 2rem;
			text-align: center !important;
		}

		p {
			font-size: 1.2rem;
			text-align: center !important;
		}
	}
`;

// export const Culture = styled.div``;
// export const Culture = styled.div``;
// export const Culture = styled.div``;
