import styled from 'styled-components';

export const SliderContainer = styled.div`
	position: relative;
	height: 71vh;
	width: 100%;
	background: rgb(255, 149, 0);
	padding-top: 50px;
`;
export const SliderWrapper = styled.div`
	width: 100%;
	position: absolute;
	top: 90px;
	left: 0px;
	z-index: 0;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	transform: translate3d(0px, 0px, 0px);
	visibility: inherit;
	opacity: 1;
`;
export const SliderLists = styled.div`
	width: 80%;
	display: flex;
  margin: auto;
  justify-content: space-around;
  padding-top: 50px;
`;
export const SliderListItem = styled.div``;
export const SliderListItemContents = styled.div`
	width: 500px;
`;
export const SliderListItemImg = styled.div`
	width: 500px;

	img {
		width: 100%;
	}
`;
