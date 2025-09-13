import styled, { css } from 'styled-components';

export const SustainabilityContainer = styled.div``;
export const SustainabilityHeroContainer = styled.div`
	width: 100%;
	height: 100vh;

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
		/* backdrop-filter: blur(40px) opacity(1);
		-webkit-backdrop-filter: blur(10px) opacity(1); */
		text-align: center;
		font-size: 8rem !important;
		border-radius: 20px;
		padding: 20px;
	}

	@media screen and (max-width: 1020px) {
		h1 {
			font-size: 6rem !important;
		}
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

export const SustainabilityHeroOverlay = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);
	/* background: #05050540; */
	z-index: 9;
	overflow: hidden !important;
`;

export const SustainabilityIntroSection = styled.div`
	/* max-width: 1000px; */
	width: 100%;
	margin: 0px auto;
	/* margin-top: 90px; */
	padding: 100px;
	text-align: center;
	background-color: #ddd;

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
		padding: 100px 20px;

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
export const SustainabilityContentsContainer = styled.div``;
export const SustainabilityFirstSection = styled.div`
	display: flex;
	align-items: center;
	gap: 100px;
	max-width: 1400px;
	width: 100%;
	margin: 50px auto;
	padding: 20px;

	@media screen and (max-width: 990px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;
export const SustainabilityFirstSectionLeft = styled.div`
	max-width: 600px;
	width: 100%;

	p {
		font-size: 3rem;

		span {
			color: var(--color2);
		}
	}

	div {
		max-width: 600px;
		width: 100%;

		img {
			width: 100%;
		}
	}

	@media screen and (max-width: 570px) {
		text-align: center;

		p {
			font-size: 2.5rem;
		}
	}

	@media screen and (max-width: 370px) {
		p {
			font-size: 1.8rem;
		}
	}
`;
export const SustainabilityFirstSectionRight = styled.div`
	max-width: 800px;
	width: 100%;

	p {
		font-size: 2rem;
		padding-bottom: 10px;
	}

	@media screen and (max-width: 990px) {
		text-align: center;
	}

	@media screen and (max-width: 570px) {
		p {
			font-size: 1.3rem;
		}
	}
`;

export const SustainabilitySecondSection = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 50px auto;
`;

export const SustainabilitySecondSectionDesc = styled.div`
	width: 90%;
	padding: 50px;

	margin: auto 10px;
	position: relative;

	::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 2px;
		background-color: var(--color1);
	}

	::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		height: 50%;
		width: 2px;
		background-color: var(--color1);
	}

	p {
		font-size: 2rem;
		color: var(--color1);
		font-weight: bold;
	}

	@media screen and (max-width: 570px) {
		p {
			font-size: 1.5rem;
			text-align: center;
		}
	}
`;

export const SustainabilitySecondSectionLists = styled.div`
	width: 100%;
  display: flex;
  gap: 50px;

  @media screen and (max-width: 770px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SustainabilitySecondSectionListItem = styled.div`
	max-width: 300px;
	width: 100%;

p {
  background-color: #ccc;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
`;

export const SustainabilitySecondSectionListItemImg = styled.div`
	width: 100%;
	height: 250px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const SustainabilityThirdSection = styled.div`
	max-width: 1400px;
	width: 100%;
	margin: 50px auto;
`;

export const SustainabilityThirdSectionList = styled.div`
	width: 100%;
	display: flex;
	gap: 100px;
	align-items: center;
	border-top: 2px solid #000;
	border-bottom: 2px solid #000;


	${(props) =>
		props.primary &&
		css`
			flex-direction: row-reverse;
			border-top: none;
		`}

  @media screen and (max-width: 750px) {
    padding: 20px;
    flex-direction: column;
    gap: 20px;
  }
`;

export const SustainabilityThirdSectionImg = styled.div`
	max-width: 500px;
	width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SustainabilityThirdSectionDesc = styled.div`
	max-width: 700px;
	width: 100%;
  padding: 0 10px;
	p {
		font-size: 20px;
	}

	@media screen and (max-width: 550px) {
		p {
      font-size: 14px;
    }
	}
`;
export const SustainabilityFourthSection = styled.div`
	max-width: 1300px;
	width: 100%;
	margin: 50px auto;

	@media screen and (max-width: 900px) {
		text-align: center;
	}
`;

export const SustainabilityFourthLists = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;

	@media screen and (max-width: 900px) {
		flex-direction: column;
    justify-content: center;
    align-items: center;
	}
`;

export const SustainabilityFourthListItem = styled.div`
	max-width: 600px;
	width: 100%;
	background-color: var(--main-color);
	color: #fff;
	padding: 80px;

	span {
		display: block;
		width: 100%;
		height: 2px;
		background-color: #fff;
		margin-bottom: 80px;
	}

	p {
		font-size: 20px;
	}

	button {
		display: block;
		width: 200px;
		height: 50px;
		color: #fff;
		background-color: var(--color2);
		margin-top: 20px;
	}

	@media screen and (max-width: 550px) {
		padding: 20px;
    padding-top: 50px;

		p {
			font-size: 15px;
		}
	}
`;
// export const SustainabilityContainer = styled.div``;
export const SustainabilityListWrapper = styled.div`
	max-width: 1400px;
	width: 100%;
	margin: 50px auto;
`;
export const SustainabilityListItem = styled.div`
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
export const SustainabilityListItemImgBox = styled.div`
	max-width: 600px;
	width: 100%;

	img {
		width: 100%;
	}
	@media screen and (max-width: 420px) {
		max-width: 100%;
	}
`;

export const SustainabilityListItemImg = styled.div`
	width: 100%;
	height: 350px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const SustainabilityListItemContent = styled.div`
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
