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
		font-size: 18px;
		color: #fff;
	}

	h2 {
		font-size: 60px;
		font-weight: bold;
		color: var(--color2);
	}

	p {
		font-size: 24px;
		padding-top: 10px;
		color: var(--color2);
	}

	@media screen and (max-width: 790px) {
		padding: 20px;

		h2 {
			font-size: 40px;
		}

		p {
			font-size: 20px;

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
		color: var(--color2);
		/* text-align: center; */
		font-size: 30px;
		padding-bottom: 30px;
	}

	p {
		color: #fff;
		font-size: 18px;
		padding-top: 20px;
		line-height: 1.4;
	}

	ul {
		padding-top: 20px;

		li {
			padding: 5px 0;
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
