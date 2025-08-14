import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--brown);
  width: 100%;
  /* position: absolute;
  bottom: 0;
  left: 0; */
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 50px;
  padding: 50px;
`;
export const FooterLists = styled.div`
	width: 300px;

  h4 {
    padding-bottom: 20px;
  }

`;

export const FooterListsItem = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;

a {
  text-transform: capitalize;
}

`;