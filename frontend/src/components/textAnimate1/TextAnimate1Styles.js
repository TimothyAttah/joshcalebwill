import styled from "styled-components";

export const Container = styled.div``;

export const TextWrapper = styled.div``;

export const MainP = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333;
`;
export const Main = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #6b0847ff;
  position: relative;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 22vw;
  }

  #top-h {
    bottom: 50%;
  }

  #bottom-h {
    top: 0% !important;
  }
`;

export const Top = styled.div`
  position: absolute;
  top: 0%;
	width: 100%;
	height: 50vh;
  background-color: #fff;
  overflow: hidden !important;
`;

export const Center = styled.div`
	width: 100%;
	height: 50vh;
	background-color: #000;
`;

export const Bottom = styled.div`
	position: absolute;
	bottom: 0%;
	width: 100%;
	height: 50vh;
	background-color: #1f29dcff;
	background-color: #fff;
	overflow: hidden;
`;
