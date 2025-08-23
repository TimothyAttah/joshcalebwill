import styled from "styled-components";

export const QualityPolicyContainer = styled.div`
  width: 100%;
  padding-top: 150px;
  background: linear-gradient(var(--brown), var(--crimson));
  color: #fff;

`;
export const QualityPolicy = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 450px) {
    max-width: 100%;
    padding: 10px;
  }

`;

export const QualityPolicyTitle = styled.div`
	text-align: center;
	h1 {
		font-size: 50px;
		padding-bottom: 5px;
	}
	p {
		font-size: 20px;
		line-height: 28px;
		padding: 10px 0;
		span {
			font-weight: bold;
			/* color: var(--color-medium-blue); */
		}
	}

	@media screen and (max-width: 450px) {
		h1 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
	}
`;
export const QualityPolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const QualityPolicyItemBox = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	padding: 20px 0;

	@media screen and (max-width: 450px) {
		flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
	}
`;
export const QualityPolicyNumber = styled.div`
	width: 80px;
	height: 80px;
	background: var(--color-medium-blue);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 40px;
`;

export const QualityPolicyItemContent = styled.div`
  max-width: 600px;
  width: 100%;

  h4 {
    padding-bottom: 10px;
    font-size: 22px;
  }

  p {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const QualityPolicyDesc = styled.div`
  margin-top: 30px;
  text-align: center;
	p {
		font-size: 18px;
		line-height: 25px;
	}
`;



