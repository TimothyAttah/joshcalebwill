import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding-top: 100px;
`

export const MarketHeader = styled.div`
  background: var(--brown);
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
`;

export const MarketHeaderNav = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  a {
    display: flex;
    gap:5px;
    align-items: center;
    font-weight: bold;
  }
`;

export const MarketProductsContainer = styled.div`

  padding: 50px 100px;

  h1 {
    padding-bottom: 20px;
  }
`;

export const MarketProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;


export const ProductsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	gap: 50px;
	max-width: 1200px;
	margin: auto;
`;

export const ProductItem = styled.div`
	width: 300px;
	margin: 20px 0;

	img {
		width: 100%;
	}
`;

export const Title = styled.h1`
	padding-top: 50px;
	@media screen and (max-width: 520px) {
		text-align: center;
	}
`;
