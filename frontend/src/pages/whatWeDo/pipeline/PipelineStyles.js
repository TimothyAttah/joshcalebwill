import styled, { css } from 'styled-components';
import pix from '../../../assets/pipe1.jpeg';
import pix1 from '../../../assets/pipe2.jpg';

import pix5 from '../../../assets/pipe6.jpg';

export const PipeContainer = styled.div``;
export const PipeHeroSection = styled.div`
	background: url(${pix1});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 100%;
	padding-top: 40.2%;
	position: relative;
	color: #fff;

	div {
		max-width: 900px;
		width: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	h1 {
		font-size: 40px;
		padding-bottom: 10px;
	}

	h4 {
		font-size: 18px;
	}

	${(props) =>
		props.primary &&
		css`
			background: url(${pix5});
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			width: 100%;
			padding-top: 40.2%;
			position: relative;
			color: #fff;
		`}

	@media screen and (max-width: 960px) {
		padding-top: 60.2%;

		div {
			max-width: 600px;
			width: 100%;
			position: absolute;
			left: 50%;
			top: 70%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
	}

	@media screen and (max-width: 660px) {
		padding-top: 80.2%;

		h1 {
			font-size: 25px;
			padding-bottom: 10px;
		}

		h4 {
			font-size: 15px;
		}

		div {
			max-width: 400px;
			width: 100%;
			position: absolute;
			left: 50%;
			top: 70%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
	}

	@media screen and (max-width: 460px) {
		padding-top: 90.2%;

		h1 {
			font-size: 20px;
			padding-bottom: 10px;
		}

		h4 {
			font-size: 12px;
		}

		div {
			max-width: 300px;
			width: 100%;
			position: absolute;
			left: 50%;
			top: 70%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
	}

	@media screen and (max-width: 360px) {
		padding-top: 99.2%;

		h1 {
			font-size: 15px;
			padding-bottom: 10px;
		}

		h4 {
			font-size: 10px;
		}

		div {
			max-width: 300px;
			width: 100%;
			position: absolute;
			left: 50%;
			top: 70%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
	}
`;
export const PipeIntroSection = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	${(props) =>
		props.primary &&
		css`
			flex-direction: row-reverse;
		`}

    @media screen and (max-width: 780px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;

export const PipeIntroSectionText = styled.div`
	width: 60%;
	height: 100%;
	color: #333;
	padding: 50px;
	/* background-color: #f7f7f7; */
	margin: auto;
	p {
		font-size: 20px;
		line-height: 30px;
		padding: 10px 0;
	}

	h4 {
		color: crimson;
		font-size: 28px;
		padding-bottom: 10px;
	}

	ul {
		padding: 30px 0;
		display: flex;
		flex-direction: column;
		gap: 20px;

		li span {
			font-weight: bold;
		}
	}

	div {
		display: flex;
		/* flex-wrap: wrap; */
		gap: 10px;

		img {
			width: 300px;
		}
	}

	@media screen and (max-width: 780px) {
	width: 100%;
  text-align: center;

  h4 {
    text-align: center;
  }
	}
`;

export const PipeIntroSectionImg = styled.div`
	width: 40%;
	img {
		width: 100%;
	}

	@media screen and (max-width: 780px) {
		width: 100%;


	}
`;

export const PipeTechWrapper = styled.div`
	width: 80%;
	margin: auto;
	text-align: center;
	padding-top: 80px;

	p {
		font-size: 20px;
		line-height: 30px;
		padding: 10px 0;
	}

	h4 {
		color: crimson;
		font-size: 28px;
		padding-bottom: 10px;
	}

	ul {
		padding: 30px 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	img {
		width: 100%;
	}
`;

export const PipeInfoBox = styled.div`
	width: 80%;
	margin: auto;
	text-align: center;
	padding: 100px 0;

	p {
		font-size: 20px;
		line-height: 30px;
		padding: 10px 0;

		span {
			font-weight: bold;
		}
	}

	h2 {
		color: crimson;
		font-size: 40px;
		padding-bottom: 10px;
	}

	@media screen and (max-width: 780px) {
		width: 100%;

		padding: 20px 10px;

		h2 {
			color: crimson;
			font-size: 30px;
			padding-bottom: 10px;
		}
	}
`;

export const PipeServiceContainer = styled.div`
	width: 80%;
	margin: 0 auto;

	h2 {
		color: crimson;
		text-align: center;
		font-size: 30px;
	}
`;
export const PipeServiceWrapper = styled.div`
	padding-top: 30px;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 50px;
`;

export const PipeServiceList = styled.div`
	width: 400px;
	/* transition: 0.3s ease-in-out all; */
	overflow: hidden;
	transition: scale 1s ease-in-out;

	&:hover {
		scale: 1.12;
	}
`;
export const PipeServiceListInfo = styled.div`
	text-align: center;
	h4 {
		text-transform: capitalize;
		padding-bottom: 10px;
	}
`;
export const PipeServiceListImg = styled.div`
	width: 100%;
	height: 250px;
	img {
		width: 100%;
		height: 100%;
	}
`;

export const PipeMatters = styled.div``;
