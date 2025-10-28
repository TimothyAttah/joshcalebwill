import DesktopNav from '../nav/desktopNav/DesktopNav';

import logo from '../../assets/logo.jpeg';
import * as Styles from './HeaderStyles';
import MobileSidebar from '../sidebar/mobileSidebar/MobileSidebar';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};

const Header = () => {
	// const [showSidebar, setShowSidebar] = useState(false);
	const [showMobileSidebar, setShowMobileSidebar] = useState(false);

	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 85) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);

	return (
		<Styles.Header className={navbar ? 'activeHeader' : ''}>
			<Styles.HeaderContainer>
				<Styles.HeaderLogo>
					<Link to='/' onClick={scrollToTop}>
						<img src={logo} alt='' />
						<h6>
							joshcalebwill <br /> <span>petroleum</span> <span>limited</span>
						</h6>
					</Link>
				</Styles.HeaderLogo>

				<DesktopNav
					showMobileSidebar={showMobileSidebar}
					setShowMobileSidebar={setShowMobileSidebar}
				/>
			</Styles.HeaderContainer>
			<AnimatePresence>
				{showMobileSidebar && (
					<MobileSidebar
						showMobileSidebar={showMobileSidebar}
						setShowMobileSidebar={setShowMobileSidebar}
					/>
				)}
			</AnimatePresence>
		</Styles.Header>
	);
};

export default Header;
