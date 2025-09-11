import styled from 'styled-components';

export const ServicesContainer = styled.div`
  background-color: #cccccca8;
  width: 100%;
`;
export const ServicesWrapper = styled.div`
	padding: 100px 0;
`;
export const ServicesTitleBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap:20px;
`;
export const ServicesTitle = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  small {
    color: var(--main-color);
    text-transform: capitalize;
    font-weight: bold;
  }

  h2 {
    color: var(--color2);
    font-size: 30px !important;
  }
`;
export const ServicesDesc = styled.div`
  max-width: 1200px;
  width: 100%;

  p {
    font-size: 20px;
  }
`;
export const ServicesListContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 50px;
  justify-content: space-around;

`;
export const ServicesListItems = styled.div`
  width: 350px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
  border-radius: 10px;
  overflow:hidden;
  position: relative;

  &:hover > div {
    top: 0;
  }

  h4 {
    text-transform: capitalize;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ServiceItemImg = styled.div`
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ServiceItemDropdown = styled.div`
	background-color: var(--main-color);
	color: #fff;
	width: 100%;
	height: 100%;
	position: absolute;
	top: -500px;
	/* top: 0; */
	left: 0;
	transition: all 0.5s ease-in-out;
	text-align: center;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  padding: 0 10px;
  opacity: 0.9;

	h2 {
		color: #fff;
		font-size: 20px !important;
	}

  button {
    width: 200px;
    height: 40px;
    background-color: var(--color2);
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    text-transform: capitalize;
  }
`;