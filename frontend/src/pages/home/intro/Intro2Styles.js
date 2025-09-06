import styled from 'styled-components';
import bg from '../../../assets/bg.jpg';

export const IntroContainer = styled.div`
	/* height: 100vh; */
	width: 100%;
	background: url(${bg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	/* background-attachment: fixed; */
	position: relative;
  padding: 20px 0;
`;

export const ContentTitle = styled.div`
	max-width: 900px;
	margin: 0px auto;
	padding-top: 100px;
	text-align: center;
	small {
		font-size: 18px !important;
		color: #fff;
	}

	h2 {
		font-size: 60px !important;
		font-weight: 900!important;

		color:#fff;
	}

	p {
		font-size: 24px !important;
		padding-top: 10px;
		color:#fff;
	}

	@media screen and (max-width: 790px) {
		padding: 20px !important;

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
