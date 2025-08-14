import styled, { css } from 'styled-components';

export const LeadersContainer = styled.div`
  /* padding: 100px; */
	h1 {
		text-align: center;
		font-size: 40px;
		padding-bottom: 30px;
	}
`;

export const LeadersListItemWrapper = styled.div`
  padding: 50px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 50px;
`;
export const LeadersListItem = styled.div`
	width: 280px;
	padding: 20px 0;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
	position: relative;
	cursor: pointer;
	position: relative;

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
`;

export const LeadersListName = styled.h4`
	text-align: center;
	padding: 0 10px;
	color: ${(props) => props.leaderColor};
`;
export const LeadersListImg = styled.div`
	width: 100%;
	height: 300px;
	padding-top: 10px;
	img {
		width: 100%;
		height: 100%;
	}
`;
export const LeadersListInfo = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: green;
	background-color: ${(props) => props.leaderColor};
	color: #fff;
	position: absolute;
	bottom: 0;

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
`;

export const LeaderModelContainer = styled.div`
	position: absolute;
  max-width: 700px;
	width: 100%;
	background-color: ${(props) => props.leaderColor};
	padding: 50px 30px;
	z-index: 99;
  text-align: center;
  border-radius: 20px;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);

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
	@media screen and (max-width: 570px) {
		flex-direction: column;
		width: 100%;
	}
`;
export const LeaderModelImg = styled.div`
	width: 300px;

	img {
		width: 100%;
	}

	@media screen and (max-width: 570px) {
		width: 250px;
	}
`;
export const LeaderModelInfo = styled.div`
	width: 500px;
	color: #fff;

	h2 {
		text-align: center;
		padding-bottom: 10px;
		padding-top: 20px;
	}

	h4 {
		text-transform: uppercase;
		text-align: center;
	}

	p {
		font-size: 16px;
		line-height: 24px;
		margin-top: 20px;
	}

	@media screen and (max-width: 570px) {
		width: 100%;

		p {
			text-align: center;
		}
	}
`;
