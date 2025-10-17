import styled from 'styled-components';
import lead1 from '../../../../assets/lead1.png';
import lead2 from '../../../../assets/lead2.png';

export const Leaders = styled.div``;

export const LeadersHero = styled.div`
	width: 100%;
	height: 100vh;
	background: url(${lead1});
	background-repeat: no-repeat;
	background-size: cover;
`;

export const BlendModeSubTitle = styled.h4`
	font-size: 2rem;
	width: 100%;
	background-color: #fff;
	color: var(--base-color-gold);
	position: absolute;
	bottom: 160px;
	text-align: center !important;
	/* padding: 20px 0; */
	padding-top: 30px;

	@media screen and (max-width: 900px) {
		font-size: 1.5rem !important;
		bottom: 120px;
	}

	@media screen and (max-width: 735px) {
		font-size: 1.5rem !important;
		bottom: 236px;
	}

	@media screen and (max-width: 590px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 80px;
	}

	@media screen and (max-width: 490px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 162px;
	}

	@media screen and (max-width: 390px) {
		font-size: 1.2rem !important;
		bottom: 115px;
		/* padding: 30px 0; */
	}

	@media screen and (max-width: 367px) {
		font-size: 1.2rem !important;
		bottom: 173px;
		/* padding: 30px 0; */
	}
`;

export const BlendModeTitle = styled.h1`
	font-size: 8rem;
	width: 100%;
	background-color: #fff;
	color: #000;
	position: absolute;
	bottom: -2px;
	text-align: center !important;
	/* padding: 20px 0; */
	mix-blend-mode: screen;
	letter-spacing: -5px;
	padding-top: 10px;

	@media screen and (max-width: 900px) {
		font-size: 6rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 590px) {
		font-size: 4rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 390px) {
		font-size: 3rem !important;
		letter-spacing: 0;
		padding: 30px 0;
	}
`;

export const CultureInfo = styled.div`
	background-color: #fff;
	padding: 50px 0;

	p {
		max-width: 700px;
		margin: auto;
		font-size: 22px;
		line-height: 30px;
		color: #000;
		text-align: center !important;
	}
`;

export const LeadersContainer = styled.div`
	background-color: var(--base-color-gold);
	color: #fff;
  padding: 50px 0;
`;

export const LeadersInfoContainer = styled.div`
	max-width: 900px;
	width: 100%;
	margin: 0px auto;

	h4 {
		font-size: 22px;
		color: #fff;
		text-align: center !important;
		padding-bottom: 30px;
	}

	h1 {
		font-size: 7rem;
		color: #fff;
		text-align: center !important;
	}

	p {
		/* max-width: 700px; */
		width: 100%;
		margin: 30px auto;
		text-align: center !important;
    font-size: 18px;
	}
`;

export const LeadersLists = styled.div``;
