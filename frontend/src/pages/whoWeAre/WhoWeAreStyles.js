import styled from "styled-components";

export const WhoWeAreContainer = styled.div``;
export const WhoWeAreHeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;


	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 7rem !important;
		color: var(--color1);
    z-index: 99;

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			height: 10px;
			width: 280px;
      left: 50%;
			background-color: var(--main-color);
      transform: translateX(-50%);
      border-radius: 10px;
		}
	} */

	@media screen and (max-width: 570px) {
	height: 60vh;
	}
`;
export const WhoWeAreHeroOverlay = styled.div`

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

	@media screen and (max-width: 570px) {
		height: 60vh;
	}
`;
export const WhoWeAreTitle = styled.div`
	font-size: 45px;
	font-weight: 700;
	line-height: 1.2;
	margin-bottom: 70px;
	margin-left: auto;
	margin-right: auto;
	max-width: 1093px;
	width: 90%;
	padding-top: 99px;

	@media screen and (max-width: 570px) {
		font-size: 30px;
		text-align: center;
		padding-top: 59px;
	}

	@media screen and (max-width: 370px) {
		font-size: 20px;
	}
`;

export const ContentContent = styled.div`
	position: absolute !important;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 1000px;
	width: 100%;
	color: #fff;
	z-index: 99;

	padding: 48px 40px 40px;
	border-radius: 16px;
	backdrop-filter: blur(40px) opacity(1);
	-webkit-backdrop-filter: blur(10px) opacity(1);

	/* transform: translateX(0); */
	background-color: #0b2d7180;
	background: #00813299;
	/* background: var(--main-color); */
	opacity: 1;
	/* z-index: 3; */
	pointer-events: all;
	transition: transform 0.75s cubic-bezier(0.72, 0.05, 0.35, 1) 0.75s,
		opacity 0.5s cubic-bezier(0.72, 0.05, 0.35, 1) 0.75s;
	/* opacity: 0.7; */
	/* backdrop-filter: 60px; */

	h2 {
		font-weight: bold;
		color: #fff;
		text-align: center;
		font-size: 6.4rem !important;
		line-height: 6.8rem !important;
		letter-spacing: -0.013em !important;
		text-transform: lowercase;
		animation: text 1s ease forwards;
	}

	@media screen and (max-width: 900px) {
		h2 {
			font-size: 4.4rem !important;
			line-height: 4.8rem !important;
			letter-spacing: -0.013em !important;
		}
	}

	@media screen and (max-width: 570px) {
		/* bottom: 50px; */
		text-align: center;

		h2 {
			font-size: 3rem !important;
			line-height: 3.4rem !important;
			letter-spacing: -0.013em !important;
		}

	}
`;



export const WhoWeAreValuesContainer = styled.div``;

export const WhoWeAreValuesPic = styled.div`
	max-width: 400px;
	width: 100%;
	margin: auto;
	animation: rotate 20s linear infinite;

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
				color: var(--crimson);
			}
			&:nth-child(3) svg {
				color: var(--brown);
			}
			&:nth-child(4) svg {
				color: green;
			}
			&:nth-child(5) svg {
				color: var(--color-light-blue);
			}
			&:nth-child(6) svg {
				color: var(--crimson);
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
// export const WhoWeAreContainer = styled.div``;
