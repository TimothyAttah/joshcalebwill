import styled, { css } from 'styled-components';
import slidePix1 from '../../assets/newSlide1.png';
import slidePix2 from '../../assets/newSlide2.png';
import slidePix3 from '../../assets/newSlide3.png';
import slidePix4 from '../../assets/newSlide4.png';

export const Slide = styled.div`
	width: 100%;
	padding-top: 42%;
	position: relative;
	${(props) =>
		props.slide1 &&
		css`
			background: url(${slidePix1});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}
	${(props) =>
		props.slide2 &&
		css`
			background: url(${slidePix2});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}
    ${(props) =>
		props.slide3 &&
		css`
			background: url(${slidePix3});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}
    ${(props) =>
		props.slide4 &&
		css`
			background: url(${slidePix4});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		`}

	@media screen and (max-width: 1100px) {
		padding-top: 62%;
	}

	@media screen and (max-width: 790px) {
		padding-top: 72%;
	}

	@media screen and (max-width: 570px) {
		padding-top: 82%;
	}

	@media screen and (max-width: 350px) {
		padding-top: 92%;
	}
`;

export const SlideContent = styled.div`
	position: absolute;
	bottom: 100px;
	left: 50%;
	transform: translateX(-50%);
	max-width: 600px;
	width: 100%;
	color: #fff;
	background: #c18500c7;
	padding: 20px;
	border-radius: 10px;
	/* opacity: 0.7; */
	/* backdrop-filter: 60px; */

	h1 {
		font-size: 40px;
		font-weight: bold;
	}

	p {
		font-size: 20px;
		line-height: 1.5;
		padding-top: 15px;
	}

	div a {
		width: 200px;
		height: 50px;
		background-color: #fff;
		color: var(--primary-color);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px 0;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 10px;
	}

	@media screen and (max-width: 790px) {
		h1 {
			font-size: 20px;
		}

		p {
			font-size: 14px;
			line-height: 1.1;
			padding-top: 10px;
		}

		div a {
			width: 120px;
			height: 40px;
			font-size: 12px;
			margin: 20px 0;
		}
	}

	@media screen and (max-width: 570px) {
		bottom: 50px;
		text-align: center;

		div a {

			height: 30px;
			margin: 10px auto;
		}
	}

	@media screen and (max-width: 350px) {
		bottom: 20px;
	}
`;