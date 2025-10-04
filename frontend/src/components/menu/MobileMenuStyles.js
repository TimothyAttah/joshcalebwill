import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const MobileMenuContainer = styled(motion.div)``;
export const MobileMenuButton = styled(motion.button)`
  z-index: 99999;
  position: relative;
`;
export const MobileSubMenuContainer = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 16px;
  overflow-y: auto;
  height: 100vh;
  background-color: #18181a;
  color:#fff;
  padding: 15px;

  ul {
    padding: 0;
    margin: 0;
    li {
      padding: 0;
      margin: 0;
    }
  }
`;

export const MobileSubMenuListItem = styled(motion.li)`

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    position: relative;

    ${props => props.clicked && css`
        svg {
          transform: rotate(180deg);
        }
      `}

    &:hover {
      background-color: #ccc;
      cursor: pointer;
    }

  }
`;

export const MobileSubMenuListWrapper = styled(motion.ul)`
	padding: 0;
`;
export const MobileSubMenuList = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover {
    background-color: #444;
  }
`;


// export const MobileMenuContainer = styled(motion.div)``;
