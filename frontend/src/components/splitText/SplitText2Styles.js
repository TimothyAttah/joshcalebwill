import styled from 'styled-components';

export const IntroContainer = styled.div`
	/* height: 100vh; */
	width: 100%;

	/* background: var(--primary-color);
	background: rgb(9, 255, 0); */
	/* background: #fff; */
	background: var(--main-color-p);
	/* background-position: center;
	background-repeat: no-repeat;
	background-size: cover; */
	/* background-attachment: fixed; */
	position: relative;
	padding: 20px 0;
	overflow: hidden !important;
`;

export const ContentTitle = styled.div`
	max-width: 1500px;
	/* border: 3px solid red; */
	width: 100%;
	margin: 0px auto;
	padding-top: 100px;
	/* text-align: center; */
	overflow: hidden !important;
	small {
		font-size: 24px !important;
		color: #fff;
		text-align: center !important;
		display: block;
		/* color: var(--color2); */
		text-transform: lowercase;
	}

	h2 {
		font-size: 60px !important;
		font-weight: 900 !important;
		text-transform: lowercase;

		color: #fff;
		/* color: var(--color-medium-blue); */
	}

	/* p {
		font-size: 24px !important;
		padding-top: 10px;
		color: #fff;
		color: var(--color2);
	} */

	@media screen and (max-width: 790px) {
		padding: 20px !important;

		text-align: center !important;

		h2 {
			font-size: 40px !important;
		}

		p {
			font-size: 20px !important;
		}
	}
`;

export const IntroContentWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	margin-top: 90px;
	flex-wrap: wrap;
	gap: 50px;
`;

export const IntroContent = styled.div`
	max-width: 350px;
	width: 100%;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	padding: 10px;

	h4 {
		color: #fff;
		/* text-align: center; */
		font-size: 30px !important;
		padding-bottom: 30px;
	}

	p {
		color: #fff;
		font-size: 18px !important;
		padding-top: 20px;
		line-height: 1.4;
	}

	ul {
		margin: 0;
		padding: 0;
		padding-top: 20px !important;

		li {
			padding: 5px 0 !important;
			color: #fff;
		}
	}

	div {
		width: 100%;
		height: 180px;
		img {
			width: 100%;
			height: 100%;
		}
	}
`;

export const TextWrap = styled.div`
	/* padding: 50px 0; */

	.text1,
	.text2,
	.text3,
	.text4,
	.text5,
	.text6,
	.text7 {
		color: #ffff;
	}

	@media screen and (max-width: 420px) {
		h1 {
			font-size: 3rem !important;
		}
	}
`;

export const Text1 = styled.h1`
	font-size: 6rem !important;
	color: var(--primary-color);

	color: #cdcdcd;
	/* position: absolute;
	left: 0; */
	margin: 20px 0;

	font-size: 7.6rem !important;
	line-height: 10rem;
	letter-spacing: -0.02em;
	@media screen and (max-width: 420px) {
		h1 {
			font-size: 3rem !important;
		}
	}
`;

export const Text2 = styled.h1`
	font-size: 6rem !important;
	color: var(--color2);
	color: #c6b6b6;
	/* position: absolute;
	right: 0; */
	/* margin-bottom: 20px; */
	margin: 20px 0;

	font-size: 7.6rem !important;
	line-height: 10rem;
	letter-spacing: -0.02em;

	@media screen and (max-width: 420px) {
		h1 {
			font-size: 3rem !important;
		}
	}
`;

export const Text3 = styled.h1`
	font-size: 6rem !important;
	color: var(--color3);
	color: #808080;
	/* position: absolute;
	left: 50px; */
	/* margin-bottom: 20px; */
	font-size: 7.6rem !important;
	line-height: 10rem;
	letter-spacing: -0.02em;
	margin: 20px 0;

	@media screen and (max-width: 420px) {
		h1 {
			font-size: 3rem !important ;
		}
	}
`;

export const ImgSplitWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 750px) {
		flex-direction: column;
		gap: 50px;
	}
`;
