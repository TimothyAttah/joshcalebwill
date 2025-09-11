import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import pix1 from '../../../assets/Picture4.png';


export const SecondServiceContainer = styled.div`
  /* padding-top: 100px; */
`;

export const SecondServiceWrapper = styled.div`

  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 20px;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const SecondServiceContentsBox = styled.div`
	max-width: 600px;
	width: 100%;

  small {
    color: var(--main-color) !important;

  }

  h2 {
    color: var(--color2) !important;
  }

	@media screen and (max-width: 520px) {
		text-align: center;
	}
`;
export const SecondServiceImgsContainer = styled.div`
	display: flex;
	gap: 20px;

	@media screen and (max-width: 520px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const SecondServiceImgBox = styled.div`
	max-width: 450px;
	width: 100%;
	overflow: hidden;
	border-radius: 10px;

	/* .img-1 {
		background-image: url(${pix1});
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 100px;
	}

	.piece1 {
		background-position: 0 0px !important;
	}
	.piece2 {
		background-position: 0 -100px;
	}
	.piece3 {
		background-position: 0 -200px;
	}
	.piece4 {
		background-position: 0 -300px;
	}
	.piece5 {
		background-position: 0 -400px;
	} */

	p {
		background-color: var(--color2);
		color: #fff;
		padding: 10px;
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	}

	/* @media screen and (max-width: 520px) {
		div {
			width: 100%;
			height: 100%;
		}
	} */
`;
export const SecondServiceGalleyContainer = styled.div``;
export const SecondServiceGalleyImgWrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-around;
	align-items: center;
	padding: 20px 0;

	${(props) =>
		props.primary &&
		css`
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			padding: 20px 0;
		`}

	@media screen and (max-width: 980px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const ImgBox = styled.div`
	width: 100%;
	height: 400px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const SecondServiceGalleyDetailWrapper = styled.div`
	max-width: 500px;
	width: 100%;

	@media screen and (max-width: 980px) {
		margin: auto;
    text-align: center;
	}
`;



export const SecondServiceGalleyImgContainer = styled.div`
	display: flex;
	gap: 10px;
	div {
		max-width: 450px;
		width: 100%;
		height: 600px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	@media screen and (max-width: 520px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
// export const SecondServiceGalleyContainer = styled.div``;

