import styled from 'styled-components'

export const ShoppingBag = styled.button`
  position: relative;
  svg {
    font-size: 20px;
  }

  sup {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 18px;
    height: 18px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
