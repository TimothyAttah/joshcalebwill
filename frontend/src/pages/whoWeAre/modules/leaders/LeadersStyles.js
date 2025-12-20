import styled from 'styled-components';
import lead1 from '../../../../assets/lead4.png';
import lead2 from '../../../../assets/lead5.png';


export const Leaders = styled.div``;

export const LeadersHero = styled.div`
	width: 100%;
	height: 100vh;
	/* padding-top: 42%; */
	background: url(${lead1});
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;

	@media screen and (max-width: 790px) {
		height: 100%;
		padding-top: 82%;
	}

	@media screen and (max-width: 490px) {
		/* padding-top: 52%; */
		height: 50vh;

		background: url(${lead2});
	}
`;

export const BlendModeSubTitle = styled.h4`
	font-size: 2rem;
	width: 100%;
	background-color: #fff;
	color: var(--base-color-gold);
	position: absolute;
	bottom: 200px;
	/* bottom: 481px; */
	text-align: center !important;
	/* padding: 20px 0; */
	padding-top: 30px;

	@media screen and (max-width: 990px) {
		font-size: 1.5rem !important;
		bottom: 120px;
		bottom: 165px;
	}

	@media screen and (max-width: 790px) {
		font-size: 1.5rem !important;
		bottom: 126px;
		display: none;
	}

	@media screen and (max-width: 530px) {
		font-size: 1.5rem !important;
		bottom: 200px;
	}

	@media screen and (max-width: 450px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 111px;
		/* bottom: 104px;
		bottom: 121px; */
		display: none;
	}

	@media screen and (max-width: 390px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 170px;
	}

	@media screen and (max-width: 350px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 107px;
	}

	@media screen and (max-width: 328px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 154px;
	}

	/* @media screen and (max-width: 367px) {
		font-size: 1.2rem !important;
		bottom: 173px;
		bottom: 103px;
	} */
`;

export const BlendModeTitle = styled.h1`
	font-size: 8rem;
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

	@media screen and (max-width: 990px) {
		font-size: 6rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 790px) {
		font-size: 4rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 450px) {
		font-size: 3rem !important;
		letter-spacing: 0;
		padding: 30px 0;
	}

	@media screen and (max-width: 350px) {
		font-size: 2.5rem !important;
		letter-spacing: 0;
		padding: 30px 0;
	}
`;

export const CultureInfo = styled.div`
	background-color: #fff;
	/* padding: 50px 0; */

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
	background-color: var(--base-color-gold-neg);
	background-color: var(--main-color-p);
	color: #fff;
	padding: 50px 0;
	margin-top: 30px;

	svg {
		position: absolute;
		right: 20px;
		top: 20px;
	}
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

	@media screen and (max-width: 790px) {
		h1 {
			font-size: 4rem !important ;
		}
	}

	@media screen and (max-width: 390px) {
		h1 {
			font-size: 3rem !important;
		}
	}
`;

export const LeadersLists = styled.div``;
