import { Link } from 'react-router-dom';
import * as Styles from './DesktopNavStyles';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';


const DesktopNavItem = ({ menu }) => {
  const hasSubMenu = menu?.subMenu?.length > 0;
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
  return (
		<Styles.NavMenuWrapper
			onHoverStart={toggleHoverMenu}
			onHoverEnd={toggleHoverMenu}>
			<Styles.NavMenuList>
				<Link to={menu.path}>
					{menu.name} {hasSubMenu && <ChevronDown />}
				</Link>
				{hasSubMenu && (
					<Styles.SubMenu
						initial='exit'
						animate={isHover ? 'enter' : 'exit'}
						variants={subMenuAnimate}
						>
						<Styles.SubMenuGridBox gridCols={menu.gridCols}>
							{menu.subMenu?.map((subMenu, i) => (
								<div key={i}>
									<Styles.SubMenuWrapper>
										<Link to={subMenu.path}>
											<Styles.SubMenuIcon>
												{subMenu?.icon && <subMenu.icon />}
											</Styles.SubMenuIcon>
											<Styles.SubMenuText>
												<h4>{subMenu?.name}</h4>
												<p>{subMenu?.desc}</p>
											</Styles.SubMenuText>
										</Link>
									</Styles.SubMenuWrapper>
								</div>
							))}
						</Styles.SubMenuGridBox>
					</Styles.SubMenu>
				)}
			</Styles.NavMenuList>
		</Styles.NavMenuWrapper>
	);
}

export default DesktopNavItem