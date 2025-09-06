import styled from 'styled-components';
import bgPix from '../../../assets/newSlide3.png';
import bgColor from '../../../assets/bg.jpg'

export const HaulageServiceHero = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	padding-top: 42%;
	background: url(${bgPix});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;

	@media screen and (max-width: 750px) {
		padding-top: 62%;
	}

	@media screen and (max-width: 450px) {
		padding-top: 82%;
	}
`;


export const HaulageServiceContainer = styled.div`
	/* padding-top: 100px; */
`;

export const HaulageServiceTitle = styled.div`
	text-align: center;
	max-width: 500px;
	width: 100%;
	margin: auto;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: #fff;

	h1 {
		font-size: 50px !important;
		padding-bottom: 5px;
		color: #fff;
	}

	p {
		font-size: 20px;
		line-height: 1.5;
		color: #fff;
	}

	@media screen and (max-width: 450px) {
		h1 {
			font-size: 26px !important;

		}

		p {
			font-size: 18px;
			line-height: 1.5;
		}
	}
`;
export const HaulageServiceListsWrapper = styled.div`
	width: 100%;
	padding: 50px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 50px;
	background: url(${bgColor});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
`;
export const HaulageServiceList = styled.div`
	max-width: 500px;
	width: 100%;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	padding: 20px;
	background: linear-gradient(var(--brown), var(--color-medium-blue));
  background: var(--color2);
  color: #fff;
	border-radius: 10px;

	h2 {
		font-size: 30px !important;
		text-align: center;
		color: #fff;
	}

	h4 {
		font-size: 22px;
		padding: 10px 0;
		text-align: center;
	}

	p {
		font-size: 17px;
		line-height: 1.4;
	}
`;
