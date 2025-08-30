import { ChevronDown } from 'lucide-react';
import * as Styles from './DesktopMenuStyles';
import { useState } from 'react';
import { motion } from 'framer-motion';

const DesktopMenu = ({ menu }) => {
	const [isHover, setIsHover] = useState(false);

	const toggleHoverMenu = () => {
		setIsHover((prev) => !prev);
	};

	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			trasition: {
				duration: 0.5,
			},
			display: 'block',
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			trasition: {
				duration: 0.5,
			},
			display: 'none',
		},
	};
	const hasSubMenu = menu?.subMenu?.length > 0;
	return (
		<motion.li onHoverStart={toggleHoverMenu} onHoverEnd={toggleHoverMenu}>
			<Styles.MenuSpan>
				{menu.name} {hasSubMenu && <ChevronDown />}
			</Styles.MenuSpan>
			{hasSubMenu && (
				<Styles.SubMenu
					initial='exit'
					animate={isHover ? 'enter' : 'exit'}
					variants={subMenuAnimate}>
					<Styles.SubMenuGridBox gridCols={menu.gridCols}>
						{menu.subMenu?.map((subMenu, i) => (
							<div key={i}>
								<Styles.SubMenuWrapper>
									<Styles.SubMenuIcon>
										{subMenu?.icon && <subMenu.icon />}
									</Styles.SubMenuIcon>
									<Styles.SubMenuText>
										<h6>{subMenu?.name}</h6>
										<p>{subMenu?.desc}</p>
									</Styles.SubMenuText>
								</Styles.SubMenuWrapper>
							</div>
						))}
					</Styles.SubMenuGridBox>
				</Styles.SubMenu>
			)}
		</motion.li>
	);
};

export default DesktopMenu;
