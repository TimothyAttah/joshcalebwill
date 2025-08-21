import styled from 'styled-components';

export const HomeServicesContainer = styled.div`
	padding-top: 20px !important;
	padding-bottom: 60px !important;
	/* background-color: #f2f5f7 !important; */
	background-position: center !important;
	background-repeat: no-repeat !important;
	background-size: contain !important;
`;

export const HomeServicesWrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	padding: 50px;

	@media screen and (max-width: 920px) {
		width: 100%;
	}

	@media screen and (max-width: 450px) {
		padding: 50px 10px;
	}
`;

export const HomeServicesInfo = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	width: 100%;
	text-align: center;

	@media screen and (max-width: 920px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const HomeServicesInfoTitle = styled.div`
	/* width: 400px; */

	h4 {
		font-size: 18px;
		color: #e85c00;
	}

	h2 {
		font-size: 100px;
		color: #fff;
		color: #e85c00;

		padding-top: 10px;
	}

	@media screen and (max-width: 920px) {
		width: 100%;
		text-align: center;
	}

	@media screen and (max-width: 420px) {
		h2 {
			font-size: 50px;

		}
	}
`;
export const HomeServicesInfoDesc = styled.div`
	max-width: 800px;
	width: 100%;
	margin: auto;
	padding-top: 20px;

	p {
		font-size: 15px;
		line-height: 25px;
	}

	@media screen and (max-width: 920px) {
		width: 100%;
		text-align: center;
	}
`;

export const HomeServicesImgWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	gap: 20px;
	padding: 50px 0;
	flex-wrap: wrap;
	align-items: center;
	margin: auto;

	@media screen and (max-width: 920px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const HomeServicesImgBox = styled.div`
	width: 300px;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 50px;
		font-weight: normal;
		background: #121626;
		background-color: var(--brown);
		color: #ffffff;
	}

	@media screen and (max-width: 450px) {
		width: 100%;
	}
`;
export const HomeServicesImg = styled.div`
	width: 100%;
	height: 250px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
// export const HomeServicesImgWrapper = styled.div``;
