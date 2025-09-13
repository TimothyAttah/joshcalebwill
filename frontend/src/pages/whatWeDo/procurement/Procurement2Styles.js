import styled, { css } from 'styled-components';

export const ProcurementContainer = styled.div``;
export const ProcurementHeroContainer = styled.div`
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
		text-align: center;
		font-size: 4rem !important;
		border-radius: 20px;
		padding: 20px;
	}


	@media screen and (max-width: 770px) {
		h1 {
			font-size: 4rem !important;
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
export const ProcurementHeroOverlay = styled.div`
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

export const ProcurementIntroSection = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 0px auto;
	margin-top: 90px;
	padding: 10px;
	text-align: center;

	h4,
	h3 {
		color: var(--color2);
		font-size: 28px;
		padding-bottom: 10px;
	}

	h3 {
		display: none;
	}

	p {
		font-size: 22px;
		color: #463636;
	}

	@media screen and (max-width: 570px) {
		text-align: center;

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

export const ProcurementListWrapper = styled.div`
	max-width: 1400px;
	width: 100%;
	margin: 50px auto;
`;
export const ProcurementListItem = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
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
export const ProcurementListItemImgBox = styled.div`
	max-width: 600px;
	width: 100%;

	img {
		width: 100%;
	}
	@media screen and (max-width: 420px) {
		max-width: 100%;
	}
`;

export const ProcurementListItemImg = styled.div`
	width: 100%;
	height: 350px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const ProcurementListItemContent = styled.div`
	max-width: 700px;
	width: 100%;

	h4 {
		color: var(--color2);
		font-size: 28px;
		padding-bottom: 10px;
		letter-spacing: 0;
	}

	p {
		font-size: 22px;
		color: #463636;
	}

	ul {
		padding: 0;
		li {
			padding: 5px 0;
			span {
				font-weight: bold;
			}
		}
	}

	@media screen and (max-width: 900px) {
		h4,
		p {
			text-align: center;
		}
	}

	@media screen and (max-width: 420px) {
		max-width: 100%;
	}
`;


export const ProcurementReasonWrapper = styled.div`
	width: 100%;
	background-color: #ddd;
	padding: 50px;
	margin: auto;
  text-align: center;

	h4 {
		color: var(--color2);
		font-size: 28px;
		padding-bottom: 10px;
		letter-spacing: 0;
		text-align: center;
	}

	p {
		font-size: 22px;
		color: #463636;
	}

	ul {
		max-width: 700px;
		width: 100%;
		margin: auto;
		padding: 0;
		li {
			padding: 5px 0;
			font-weight: bold;
			display: flex;
			gap: 10px;
      justify-content: center;
      align-items: center;

			span {
				font-weight: bold;
				color: var(--main-color);
			}
		}
	}

	div {
		max-width: 700px;
		width: 100%;
		margin: auto;
		padding: 0;
		margin-top: 50px;
		/* text-align: center; */

		h1 {
			color: var(--main-color);
		}

    button a {
      width: 200px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color2);
      color: #fff;
    }
	}

	@media screen and (max-width: 720px) {
		h4,
		p,
		div {
			text-align: center;
		}
	}
`;