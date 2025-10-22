import styled from "styled-components";

export const HealthPolicyContainer = styled.div`
	width: 100%;
	background: var(--main-color-p);
	color: #fff;
	padding: 50px;

	@media screen and (max-width: 520px) {
		padding: 20px;
	}
`;
export const HealthPolicy = styled.div``;
export const HealthPolicyTitle = styled.div`
  /* max-width: 1000px; */
  width: 100%;
  margin: auto;
  display: flex;
  /* padding: 20px 0; */

  img {
    width: 500px;
  }
`;

export const TitleBox = styled.div`
	width: 100%;
	/* padding: 20px; */
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		padding-bottom: 10px;
		color: #fff;
		color: var(--main-color-g);

		letter-spacing: 0;
	}

	@media screen and (max-width: 520px) {
		p, h1 {
			text-align: center !important;
		}
	}
`;
export const HealthPolicyItemWrapper = styled.div`
  /* max-width: 1000px; */
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 30px;
`;
export const HealthPolicyItem = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
  position: relative;
	svg {
		color: var(--main-color-g);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    left: 0;
	}
	p {
    max-width: 1000px !important;
		line-height: 1.3;
    padding-left: 30px;
	}

  @media screen and (max-width: 520px){
    p {
      text-align: center !important;
    }
  }
`;

export const HealthPolicyDesc = styled.div`
	/* max-width: 800px; */
	width: 100%;
	margin: 0px auto;
	/* margin-top: 30px; */
	padding: 50px 0;
	text-align: center;
	p {
		font-size: 18px;
		line-height: 25px;
	}

	@media screen and (max-width: 520px) {
		p {
			text-align: center !important;
		}
	}
`;
