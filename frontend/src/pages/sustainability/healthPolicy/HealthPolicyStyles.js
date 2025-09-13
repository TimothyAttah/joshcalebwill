import styled from "styled-components";

export const HealthPolicyContainer = styled.div`
  width: 100%;
  background: var(--color4);
  color: #fff;
  padding-top: 150px;
`;
export const HealthPolicy = styled.div``;
export const HealthPolicyTitle = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: flex;
  padding: 20px 0;

  img {
    width: 500px;
  }
`;

export const TitleBox = styled.div`
	width: 100%;
	background-color: var(--color2);
	padding: 20px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		padding-bottom: 10px;
    color: #fff;
    letter-spacing: 0;
	}
`;
export const HealthPolicyItemWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 30px;
`;
export const HealthPolicyItem = styled.div`
  display: flex;
  gap: 10px;
  svg {
    color: var(--brown);
  }
  p {
    max-width: 700px;
    line-height: 1.3;

  }
`;

export const HealthPolicyDesc = styled.div`
  max-width: 800px;
  width: 100%;
  margin:0px auto;
	/* margin-top: 30px; */
  padding: 50px 0;
	text-align: center;
	p {
		font-size: 18px;
		line-height: 25px;
	}
`;

