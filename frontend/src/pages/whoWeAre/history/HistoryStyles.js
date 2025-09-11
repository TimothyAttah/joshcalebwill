import styled from "styled-components";

export const HistoryContainer = styled.div`
	padding-top: 99px;
	margin-left: auto;
	margin-right: auto;
	max-width: 1093px;
	width: 90%;
  margin-bottom: 50px;
`;

export const HistoryTitleBox = styled.div`
	width: 100%;
	border-bottom: 3px solid var(--color1);

	small {
		color: var(--main-color);
		text-transform: capitalize;
	}

	h2 {
		color: var(--color1);
		font-size: 24px;
		font-weight: 800;
	}
`;

export const HistoryContentContainer = styled.div`
	width: 100%;
	height: 50vh;
	overflow-y: scroll;
	padding: 20px 20px 20px 0px;

	p {
		font-size: 20px;
	}

	@media screen and (max-width: 570px) {
		opacity: 1 !important;

		div {
			div {
				opacity: 1 !important;
				transform: translateX(0) !important;
			}
		}
		p {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;
