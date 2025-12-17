import styled from "styled-components";

export const PlaceOrderContainer = styled.div`
  max-width: 950px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  gap: 50px;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const Box = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`

export const PlaceOrderShippingContainer = styled.div`
	max-width: 600px;
	width: 100%;
`;
export const PlaceOrderItems = styled.div`

`;

export const PlaceOrderSummaryContainer = styled.div`
	max-width: 350px;
	width: 100%;
	padding: 20px;
	border: 1px solid #ccc;

  button {
    width: 100%;
    height: 50px;
    background-color: var(--main-color-o);
    margin-top: 50px;
    font-size: 20px;
  }
`;

export const PlaceOrderSummaryCardBox = styled.div`
	width: 100%;
	border-bottom: 1px solid #ccc;
  padding: 10px 0;

  div {
    display: flex;
   justify-content: space-between;
  }
`;
