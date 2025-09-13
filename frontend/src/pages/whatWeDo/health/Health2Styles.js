import styled, { css } from 'styled-components';

export const HealthContainer = styled.div``;
export const HealthHeroContainer = styled.div`
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
		font-size: 6rem !important;
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
export const HealthHeroOverlay = styled.div`
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

export const HealthIntroSection = styled.div`
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

export const HealthServiceContainer = styled.div`
  max-width: 1400px;
	width: 100%;
	margin: 90px auto 40px auto;

	h2 {
		color: var(--color2);
		text-align: center;
		font-size: 30px !important;
	}
`;
export const HealthServiceWrapper = styled.div`
	padding-top: 30px;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 20px;
`;

export const HealthServiceList = styled.div`
	max-width: 350px;
  width: 100%;
	overflow: hidden;
  margin-top: 50px;



	@media screen and (max-width: 420px) {
		width: 100%;
	}
`;
export const HealthServiceListInfo = styled.div`
	text-align: center;
	h4 {
		text-transform: capitalize;
		padding-bottom: 10px;
    letter-spacing: 0;
	}
`;
export const HealthServiceListImg = styled.div`
	width: 100%;
	height: 250px;
	transition: scale 1s ease-in-out;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
	}

	&:hover {
		scale: 1.12;
	}
`;

export const HealthReasonWrapper = styled.div`
	width: 100%;
	background-color: #eee;
	padding: 50px;
	margin: auto;

	div {
		max-width: 600px;
		width: 100%;
		margin: auto;

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
        display: flex;
        gap: 10px;
        font-size: 20px;
				span {
					font-weight: bold;
					color: var(--main-color);
				}
			}
		}

		@media screen and (max-width: 720px) {
			h4,
			p {
				text-align: center;
			}
		}
	}
`;