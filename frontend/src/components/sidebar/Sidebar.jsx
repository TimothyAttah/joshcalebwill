import * as Styles from './SidebarStyles';
import { navData } from '../nav/navData';
import { useState } from 'react';
import SidebarItems from './SidebarItems';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ close }) => {
	const [active, setActive] = useState();

	const handleClick = (name) => {
		setActive(name === active ? null : name);
	};

	const showAnimation = {
		hidden: {
			opacity: 0,
			x: 100,
			transition: {
				duration: 1.25,
				type: 'tween',
				delay: 0.2,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.25,
				type: 'tween',
				delay: 0.2,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	};
	return (
		<Styles.SidebarContainer
			variants={showAnimation}
			initial='hidden'
			animate='show'
			exit='hidden'>
			<Styles.SidebarWrapper>
				<Styles.CloseSidebar>
					<FaTimes onClick={close} />
				</Styles.CloseSidebar>
				{navData.map((nav, i) => {
					let isActive = active === nav.navTitle;
					return (
						<SidebarItems
							key={i}
							item={nav}
							onClick={() => handleClick(nav.navTitle)}
							itemName={nav.navTitle}
							itemPath={nav.navPath}
							itemContent={nav.navSubmenu}
							isActive={ isActive }
							close={close}
						/>
					);
				})}
			</Styles.SidebarWrapper>
		</Styles.SidebarContainer>
	);
};

export default Sidebar;
