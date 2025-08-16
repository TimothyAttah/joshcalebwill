import styled from "styled-components";

export const NavbarContainer = styled.div`
  @media screen  and (max-width: 950px){
    display: none;
  }
`;

export const NavbarWrapper = styled.div``;
export const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  position: relative;

  li {
    margin: 0 15px;

    :last-child {
      margin-right: 0;
    }

    a {
      /* color: #42424a; */
      color: #fff;
      padding: 22px 0;
      display: inline-block;
      transition: all ease 0.3s;
      text-transform: capitalize;
      font-weight: bold;
      font-size: 16px;

      &:hover {
        color: #ff8a00;
        /* color: #000; */
      }
    }

    &:hover > ul{
      z-index: 99;
      opacity: 1;
      margin-top: 0;
      /* margin-left: -10px; */
      pointer-events: visible;

    }
  }
`;
export const NavbarLinksSubmenu = styled.ul`
	position: absolute;
	max-width: 500px;
  width: 100%;
	background-color: #fff;
	box-shadow: 0 20px 45px #00000020;
	margin-top: -50px;
  margin-left: -200px;
	opacity: 0;
	z-index: -999;
	transition: all ease 0.5s;
  pointer-events: none;

	li {
		margin: 0;
		width: 100%;

		a {
			padding: 15px 20px;
			display: inline-block;
			width: 100%;
			color: #42424a;
		}
	}
`;
export const NavbarLinksSubmenuItem = styled.li``;
