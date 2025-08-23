import styled from 'styled-components';

export const HaulageServiceContainer = styled.div`
	padding-top: 100px;
`;

export const HaulageServiceTitle = styled.div`
	text-align: center;
	max-width: 500px;
	width: 100%;
	margin: auto;

	h1 {
		font-size: 50px;
		padding-bottom: 5px;
	}

	p {
		font-size: 20px;
		line-height: 1.5;
	}
`;
export const HaulageServiceListsWrapper = styled.div`
	width: 100%;
	padding: 50px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 50px;
`;
export const HaulageServiceList = styled.div`
	max-width: 500px;
	width: 100%;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	padding: 20px;
	background: linear-gradient(var(--brown), var(--color-medium-blue));
  background: var(--color-medium-blue);
  color: #fff;

	h2 {
		font-size: 30px;
		text-align: center;
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
