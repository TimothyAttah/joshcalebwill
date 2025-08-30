import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuLi = styled.li``;
export const MenuSpan = styled.span`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
	padding: 10px 30px;
	transition: 1s ease all;
	position: relative;

	&:hover {
		background-color: #555;

		svg {
			transform: rotate(-180deg);
		}
	}
`;

export const SubMenu = styled(motion.div)`
	position: absolute;
	top: 4.2rem;
	padding: 15px;
	transform-origin: 50% - 170px;
	border-radius: 10px;
	background: #ccc;
	/* ::backdrop  */

	.subMenuGrid {
	}
`;

export const SubMenuGridBox = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: ${(props) =>
		props.gridCols === 3 ? 3 : props.gridCols === 2 ? 2 : 1};
`;

export const SubMenuContainer = styled.div`
	position: relative;
	cursor: pointer;
`;

export const SubMenuWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	&:hover {
		color: blue;
	}
`;
// export const SubMenuIcon = styled.div``;
// export const SubMenuIcon = styled.div``;

export const SubMenuIcon = styled.div`
	width: 30px;
	padding: 10px;
	background-color: #444;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const SubMenuText = styled.div`
	h6 {
		font-weight: bold;
	}

	p {
		opacity: 0.7;
	}
`;
