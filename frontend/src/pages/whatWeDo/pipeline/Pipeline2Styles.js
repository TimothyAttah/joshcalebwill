import styled, { css } from 'styled-components';

export const PipelineContainer = styled.div``;
export const PipelineHeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden !important;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h1 {
		position: absolute !important;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 1000px;
		width: 100%;
		color: #fff;
		z-index: 99;
		backdrop-filter: blur(40px) opacity(1);
		-webkit-backdrop-filter: blur(10px) opacity(1);
		text-align: center !important;
		font-size: 4rem !important;
		border-radius: 20px;
		padding: 20px;
	}

	@media screen and (max-width: 900px) {
		h1 {
			font-size: 4rem !important;
			top: 0;
			left: 50%;
			transform: translate(-50%, 50%);
			bottom: -40%;
		}
	}

	@media screen and (max-width: 550px) {
		h1 {
			font-size: 3rem !important;
		}
	}

	@media screen and (max-width: 430px) {
		h1 {
			font-size: 2rem !important;
		}
	}

	@media screen and (max-width: 310px) {
		h1 {
			font-size: 1.5rem !important;
		}
	}
`;
export const PipelineHeroOverlay = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	/* background: rgba(0, 0, 0, 0.7); */
	background: #05050540;
	z-index: 9;
	overflow: hidden !important;
`;

export const PipelineIntroSection = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 0px auto;
	/* margin-top: 90px; */
	/* padding: 100px; */
	text-align: center;
	/* background-color: #ddd; */
	padding: 50px 20px;

	h4,
	h3 {
		color: #000;
		font-size: 28px !important;
		padding-bottom: 10px;
	}

	h3 {
		display: none;
	}

	p {
		font-size: 22px;
		color: #463636;
		color: #000;
	}

	@media screen and (max-width: 570px) {
		text-align: center;
		/* padding: 100px 20px; */

		h4 {
			display: none;
		}

		h3 {
			font-size: 22px;
			display: block;
		}

		p {
			font-size: 18px;
		}
	}
`;

export const PipelineListWrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 50px auto;
`;
export const PipelineListItem = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 50px 10px;

	${(props) =>
		props.primary &&
		css`
			flex-direction: row-reverse;
		`}

	@media screen and (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;
export const PipelineListItemImgBox = styled.div`
	max-width: 600px;
	width: 100%;

	img {
		width: 100%;
	}
	@media screen and (max-width: 520px) {
		max-width: 100%;
	}
`;

export const PipelineListItemImg = styled.div`
	width: 100%;
	height: 350px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const PipelineListItemContent = styled.div`
	max-width: 600px;
	width: 100%;

	h4 {
		color: var(--main-color-o);
		font-size: 28px;
		padding-bottom: 10px;
		letter-spacing: 0;
	}

	p {
		font-size: 22px;
		color: #463636;
		color: #000;
	}

	ul {
		padding: 0;
		li {
			padding: 5px 0;
			color: #000;

			span {
				font-weight: bold;
			}
		}
	}

	@media screen and (max-width: 900px) {
	}

	@media screen and (max-width: 520px) {
		max-width: 100%;
		h4,
		p {
			text-align: center !important;
		}
	}
`;

export const PipelineItemContainer = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 50px auto;

	h2 {
		color: var(--main-color-o);
		font-size: 32px !important;
		padding-bottom: 20px;
		text-align: center !important;
	}
`;

export const PipelineItemImg = styled.div`
	/* max-width: 500px; */
	width: 100%;
	/* height: 300px; */
	margin: auto;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const PipelineItemContent = styled.div`
	max-width: 900px;
	width: 100%;
	margin: 20px auto;
	padding: 10px;
	color: #000;

	p {
		font-size: 22px;
		text-align: center;
	}

	@media screen and (max-width: 520px){
		p {
			text-align: center !important;
		}
	}


`;

export const PipelineReasonWrapper = styled.div`
	width: 100%;
	background-color: var(--main-color-p);
	padding: 50px;
	margin: auto;

	h4 {
		color: #fff;
		font-size: 28px;
		padding-bottom: 10px;
		letter-spacing: 0;
		text-align: center;
	}

	p {
		font-size: 22px;
		color: #463636;
		color: #fff;
	}

	ul {
		max-width: 700px;
		width: 100%;
		margin: 0px auto;
		padding: 20px 0 !important;
		li {
			padding: 5px 0;
			font-weight: bold;
			display: flex;
			gap: 10px;
			color: #fff;

			span {
				font-weight: bold;
				color: var(--main-color-g);
			}
		}
	}

	div {
		max-width: 700px;
		width: 100%;
		/* margin: auto; */
		padding: 0;
		margin-top: 10px;
		/* text-align: center; */

		h1,
		h2 {
			color: var(--main-color);
			color: #fff;
			padding-bottom: 10px;
		}
	}

	@media screen and (max-width: 720px) {
		h4,
		p,
		div {
			text-align: center;
		}
	}

	@media screen and (max-width: 520px) {
		padding: 20px;
		h4,
		h2,
		h1,
		p,
		div {
			text-align: center !important;
		}
	}
`;
