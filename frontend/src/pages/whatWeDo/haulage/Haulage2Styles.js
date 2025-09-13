import styled, { css } from 'styled-components';

export const HaulageContainer = styled.div``;
export const HaulageHeroContainer = styled.div`
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
export const HaulageHeroOverlay = styled.div`
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

export const HaulageIntroSection = styled.div`
	/* max-width: 1000px; */
	width: 100%;
	/* margin: 0px auto; */
	/* margin-top: 90px; */
	padding: 100px;
	text-align: center;
  background-color: #ccc;

  small {
    color: var(--main-color);
    padding-bottom: 10px;
    display: block;
    font-size: 14px;
  }

	h4 {
		color: var(--color2);
		font-size: 28px;
		padding-bottom: 10px;
    letter-spacing: 0;
    line-height:40px;
	}

	p {
		font-size: 22px;
		color: #463636;
	}

	@media screen and (max-width: 570px) {
		text-align: center;
    padding: 20px;



		h4 {
			font-size: 22px;
		}

		p {
			font-size: 18px;
		}
	}
`;

export const HaulageIntroGalleryContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	gap: 20px;
	flex-wrap: wrap;

	div {
		max-width: 400px;
		width: 100%;
		height: 300px;

		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: all 0.5s ease-in-out;

			&:hover {
				scale: 1.1;
			}
		}
	}
`;

export const HaulageServicesList = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const HaulageService = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: end;
	padding: 20px;

	h2 {
		max-width: 300px;
		width: 100%;
		text-align: right;
	}

	p {
		max-width: 500px;
		width: 100%;
		text-align: right;
	}

	${(props) =>
		props.primary &&
		css`
			align-items: start;

			h2 {
				text-align: left;
			}

			p {
				max-width: 500px;
				text-align: left;
			}
		`}

	@media screen and (max-width: 420px) {
		text-align: center;
    align-items: center;

		h2,
		p {
			text-align: center;
		}

		${(props) =>
			props.primary &&
			css`
				align-items: center;

				h2 {
					text-align: center;
				}

				p {

					text-align: center;
				}
			`}
	}
`;