import styled, { css } from 'styled-components';

export const LeaderHeroContainer = styled.div`
	width: 100%;
	/* height: 50vh; */
	background: var(--color2);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;

	h1 {
		font-size: 80px !important;
		color: #fff;
	}

	@media screen and (max-width: 790px) {
		/* height: 30vh; */

		text-align: center;
		h1 {
			font-size: 40px !important;
			color: #fff;
		}
	}

	@media screen and (max-width: 320px) {
		h1 {
			font-size: 30px !important;
		}
	}
`;

export const LeadersContainer = styled.div`
	/* padding: 100px; */
	/* padding-top: 150px; */
	h1 {
		text-align: center;
		font-size: 40px;
		padding-bottom: 30px;
	}
`;

export const LeaderTitle = styled.div`
	max-width: 1000px;
	width: 100%;
	/* padding: 50px; */
	margin: auto;
	text-align: center;

	p {
		font-size: 20px;
		text-align: center !important;
	}

	h4 {
		font-size: 30px;
		text-align: center !important;
		color: #fff;
		padding: 30px 0;
	}

	@media screen and (max-width: 790px) {
		p {
			font-size: 18px;
			text-align: center;
		}

		h4 {
			font-size: 25px;
			color: var(--color1);
		}
	}

	@media screen and (max-width: 450px) {
		padding: 20px 5px;
	}
`;
export const LeadersListItemWrapper = styled.div`
	padding: 50px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 80px;

	@media screen and (max-width: 550px) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0px;
	}
`;
export const LeadersListItem = styled.div`
	width: 250px;
	/* padding: 20px 0; */
	/* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5); */
	position: relative;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: all 0.5s ease-in-out;
	overflow: hidden;

	/* h4 {
		text-align: center;
		padding: 0 10px;
	}

	${(props) =>
		props.color === 'green' &&
		css`
			h4 {
				color: green;
			}
		`};
	${(props) =>
		props.color === 'crimson' &&
		css`
			h4 {
				color: crimson;
			}
		`};

	${(props) =>
		props.color === 'blue' &&
		css`
			h4 {
				color: var(--color-medium-blue);
			}
		`};
	${(props) =>
		props.color === 'brown' &&
		css`
			h4 {
				color: var(--brown);
			}
		`};
	${(props) =>
		props.color === 'darkBlue' &&
		css`
			h4 {
				color: var(--color-dark-blue);
			}
		`}; */

	@media screen and (max-width: 300px) {
		width: 100%;


	}
`;

export const LeadersListName = styled.h4`
	text-align: center;
	padding: 10px 10px;

	/* height: 40px; */
	/* color: ${(props) => props.leaderColor}; */
	/* background-color: ${(props) => props.leaderColor}; */
	font-size: 15px;

	@media screen and (max-width: 350px){
		text-align: center !important;
	}
`;
export const LeadersListImg = styled.div`
	width: 100%;
	height: 250px;
	background-color: #555;
	overflow: hidden;
	border-radius: 50%;
	transition: all 0.5s ease-in-out;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transition: all 0.5s ease-in-out;

		&:hover {
			transform: scale(1.1);
		}
	}
`;
export const LeadersListInfo = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 10px;
	/* background-color: green; */
	/* background-color: ${(props) => props.leaderColor}; */
	color: #fff;
	padding: 10px;

	h4 {
		color: #fff;
		font-size: 14px;
	}

	p {
	}
	/* position: absolute; */
	/* bottom: 0; */

	/* ${(props) =>
		props.color === 'green' &&
		css`
			background-color: green;
		`};
	${(props) =>
		props.color === 'crimson' &&
		css`
			background-color: crimson;
		`};

	${(props) =>
		props.color === 'blue' &&
		css`
			background-color: var(--color-medium-blue);
		`};
	${(props) =>
		props.color === 'brown' &&
		css`
			background-color: var(--brown);
		`};
	${(props) =>
		props.color === 'darkBlue' &&
		css`
			background-color: var(--color-dark-blue);
		`}; */

	@media screen and (max-width: 350px) {
		h4, p {
			text-align: center !important;
		}
	}
`;

export const LeaderModelContainer = styled.div`
	position: fixed;
	max-width: 1500px;
	width: 100%;
	height: 100vh;
	background-color: ${(props) => props.leaderColor};
	padding: 50px 30px;
	z-index: 999;
	text-align: center;
	border-radius: 20px;
	top: 20px;
	left: 50%;
	transform: translateX(-50%);
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}

	svg {
		position: absolute;
		top: 10px;
		right: 20px;
		font-size: 30px;
		color: #fff;
		cursor: pointer;
	}
`;
export const LeaderModelWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	width: 100%;
	@media screen and (max-width: 900px) {
		flex-direction: column;
		width: 100%;
	}
`;
export const LeaderModelImg = styled.div`
	width: 350px;
	background-color: #555;
	padding-top: 20px;

	img {
		width: 100%;
	}

	@media screen and (max-width: 420px) {
		/* width: 250px; */
		width: 100%;
	}
`;
export const LeaderModelInfo = styled.div`
	max-width: 900px;
	width: 100%;
	color: #fff;
	border-left: 2px solid #fff;
	padding-left: 20px;

	h2 {
		text-align: center;
		padding-bottom: 10px;
		padding-top: 20px;
		color: #fff;
		font-size: 40px !important;
	}

	h4 {
		text-transform: uppercase;
		text-align: center;
		color: #fff;
		font-size: 30px !important;
	}

	p {
		font-size: 22px !important;
		line-height: 35px;
		margin-top: 50px;
	}

	@media screen and (max-width: 900px) {
		width: 100%;
		border-left: none;

		p {
			text-align: center;
		}
	}

	@media screen and (max-width: 420px) {
		padding-left: 0;
		h2 {

			font-size: 22px !important;
		}

		h4 {
			text-transform: uppercase;
			text-align: center;
			color: #fff;
			font-size: 20px !important;
		}

		p {
			font-size: 16px !important;
			line-height: 25px;
			margin-top: 50px;
		}
	}
`;

export const TeamModal = styled.div`
	position: relative;
`;

export const CloseBtn = styled.div`
	position: absolute;
	right: 20px;
	top: 20px;
	cursor: pointer;

	svg {
		color: var(--main-color-p);
		font-size: 25px;
	}
`;
export const TeamModalImg = styled.div`
	max-width: 500px;
	width: 100%;
	height: 400px;
	margin: 50px auto;

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 420px) {
		max-width: 100%;
		height: 300px;
		/* height: 100%; */
	}
`;
export const TeamModalInfo = styled.div`
	h1 {
		text-align: center !important;
		padding-bottom: 10px;
		color: var(--main-color-p);
		font-weight: bold;
	}
	h4 {
		text-align: center !important;
		padding-bottom: 10px;
		color: var(--main-color-p);
	}

	p {
		font-size: 22px;
		color: #000;
		padding-bottom: 10px;
	}

	@media screen and (max-width: 420px) {
		p {
			font-size: 14px;
		}
	}
`;
