import styled from 'styled-components';
import lead2 from '../../assets/lead2.png';


export const WhoWeAre = styled.div``;

export const WhoWeAreHero = styled.div`
	width: 100%;
	height: 100vh;
	background: url(${lead2});
	background-repeat: no-repeat;
	background-size: cover;
	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		transition: 0.5s ease all;
	}
`;


export const BlendModeTitle = styled.h1`
	font-size: 10rem;
	width: 100%;
	background-color: #fff;
	color: #000;
	position: absolute;
	bottom: 0px;
	text-align: center !important;
	/* padding: 50px 0; */
	mix-blend-mode: screen;
	letter-spacing: -5px;
	/* padding-top: 10px; */
  padding-bottom: 50px;

	@media screen and (max-width: 900px) {
		font-size: 8rem !important;
		letter-spacing: 0;
	}

	/* @media screen and (max-width: 590px) {
		font-size: 4rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 390px) {
		font-size: 3rem !important;
		letter-spacing: 0;
		padding: 30px 0;
	} */
`;

export const CultureInfo = styled.div`
	background-color: #fff;
	padding: 0px 0;

	p {
		max-width: 700px;
		margin: auto;
		font-size: 22px;
		line-height: 30px;
		color: #000;
		text-align: center !important;
	}
`;

export const WhoWeAreContainer = styled.div`
	/* background-color: var(--color-light-red);
	background-color: gold;
	background-color: goldenrod;
	background-color: orange;
	background: #f07537;
	background: linear-gradient(
		184deg,
		rgba(240, 117, 55, 1) 20%,
		rgba(252, 176, 69, 1) 78%
	); */

	/* background: #f07537;
	background: linear-gradient(
		180deg,
		rgba(240, 117, 55, 1) 49%,
		rgba(69, 154, 252, 1) 77%
	); */
	background-color: rgba(69, 154, 252, 1);
	background-color: #b76e79;
	padding: 20px 0;
	margin-top: 20px;
`;

export const WhoWeAreInfoContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 100px auto;

	h1 {
		font-size: 8rem;
		color: #fff;
		text-align: center !important;
		line-height: 1;
		max-width: 900px;
		margin: auto;
		padding-bottom: 30px;
	}

	p {
		font-size: 1.2rem;
		color: #fff;
		/* text-align: center !important; */
		padding-bottom: 10px;
	}

	@media screen and (max-width: 570px) {
		padding: 10px;
		h1 {
			font-size: 4rem;
		}

		p {
			font-size: 1rem;
			text-align: center !important;
		}
	}
`;

export const WhoWeAreGallerryContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 50px auto;
	z-index: 999999 !important;
`;

export const WhoWeAreGallerryPixWrapper = styled.div`
	width: 100%;
	position: relative;
	height: 100%;
	padding: 45px 0;
	display: grid;
	grid-template-columns: auto auto auto auto;
	grid-gap: 2vh;
	grid-auto-flow: dense;

	.pix {
		position: relative;
		height: 100%;
		width: 100%;
		/* width: 350px;
		height: 350px; */
		overflow: hidden !important;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.9);
		border-radius: 20px;

		&:hover {
			img {
				filter: brightness(1) grayscale(0);
			}
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			/* filter: brightness(0.5) grayscale(100); */
			transition: 0.3s ease-in all;
		}

		&:nth-child(2n + 3) {
			grid-row-start: span 2;
		}

		&:nth-child(4n + 5) {
			grid-column-start: span 1;
			grid-row-start: span 2;
		}

		&:nth-child(6n + 7) {
			grid-column-start: span 2;
			grid-row-start: span 2;
		}

		/*

		&:nth-child(4n + 5) {
			grid-column-start: span 2;
			grid-row-start: span 2;
		}

		&:nth-child(6n + 7) {
			grid-row-start: span 1;
		}

		&:nth-child(8n + 9) {
			grid-column-start: span 1;
			grid-row-start: span 1;
		} */
	}

	.pix1 {
		grid-column-start: span 1;
		grid-row-start: span 2;
		/* width: 600px;
    height: 600px; */
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: auto auto;

		/* .pix1 {
      width: 300px;
      height: 300px;
    } */
	}

	@media screen and (max-width: 430px) {
		/* grid-template-columns: auto; */
		display: block;
		padding: 20px;

		.pix {
			margin: 20px 0;
		}
	}
`;

export const WhoWeAreValuesContainer = styled.div`
  margin-top: 50px;
`;

export const WhoWeAreValuesPic = styled.div`
	max-width: 400px;
	width: 100%;
	margin: auto;
	animation: rotate 20s linear infinite;
	overflow: hidden !important;

	img {
		width: 100%;
		transition: 0.5s ease all;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const WhoWeAreValuesBox = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding-top: 50px;
	gap: 20px;

	.box {
		background-color: red;
	}
`;

export const WhoWeAreValuesItem = styled.div`
	max-width: 500px;
	width: 100%;
	border-radius: 10px;
	border: 1px solid #ccc;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5) !important;
	overflow: hidden !important;

	h4 {
		color: var(--color1);
		font-size: 22px;
		/* color: #1d6731; */
		font-size: 30px;
		font-weight: 700;
		line-height: 1.4;
		margin-bottom: 39px;
		padding: 10px 60px 0px 50px;
	}

	p {
		background-color: rgba(0, 64, 16, 0.07);
		/* display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: flex-end; */
		padding: 45px 60px 45px 50px;
		font-size: 18px;
	}

	ul {
		padding: 0;
		background-color: rgba(0, 64, 16, 0.07);
		padding-top: 20px;

		div {
			height: 50px;
			padding: 0px 60px 0px 30px;
			display: flex;
			flex-direction: column;
			justify-content: center;

			li {
				display: flex;
				align-items: center;
				gap: 20px;
				color: #000 !important;
				text-transform: capitalize;
			}

			&:nth-child(1) svg {
				color: var(--color-light-blue);
			}
			&:nth-child(2) svg {
				color: crimson;
			}
			&:nth-child(3) svg {
				color: var(--base-color-gold);
			}
			&:nth-child(4) svg {
				color: green;
			}
			&:nth-child(5) svg {
				color: var(--color-light-blue);
			}
			&:nth-child(6) svg {
				color: var(--base-color-gold-neg);
			}
		}
	}

	@media screen and (max-width: 570px) {
		text-align: center;
		p {
			padding: 10px;
			font-size: 18px;
		}

		ul {
			div {
				height: 50px;
				padding: 10px;
			}
		}
	}
`;

export const WhoWeAreValueImg = styled.div`
	width: 100%;
	height: 300px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
