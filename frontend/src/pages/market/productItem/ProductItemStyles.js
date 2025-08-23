import styled from "styled-components";

export const ProductItemContainer = styled.div`
  display: flex;
  gap: 50px;
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 50px;
`;
export const ProductItemImg = styled.div`
  width: 300px;

  img {
    width: 100%;
  }
`;
export const ProductItemInfo = styled.div`
  width: 350px;

  div {
    margin: 15px 0;

    p {
      font-size: 18px;
      line-height: 22px;
    }

    button {
      display: block;
      width: 100%;
      background-color: var(--brown);
      color: #fff;
      padding: 10px;
      margin-top: 20px;
    }
  }
`;
