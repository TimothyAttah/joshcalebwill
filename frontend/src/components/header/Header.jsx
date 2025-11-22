import DesktopNav from '../nav/desktopNav/DesktopNav';

import logo from '../../assets/logo.jpeg';
import * as Styles from './HeaderStyles';
import MobileSidebar from '../sidebar/mobileSidebar/MobileSidebar';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Chatbot from '../chatBot/NewChatbot';
import Cookies from '../Cookies';

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
	const [openCookie, setOpenCookie] = useState(true);

	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 85) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	const location = useLocation()

let market = location.pathname;


	window.addEventListener('scroll', changeBackground);

	useEffect(() => {
		const executeCodes = () => {
			setOpenCookie(true);
		};

		window.addEventListener('load', executeCodes);

		if (document.cookie.includes('joshcalebwill')) {
			setOpenCookie(false);
			return;
		}
	}, []);

	const handleDeclineCookie = () => {
		setOpenCookie(false);
	};

	const handleAcceptCookie = () => {
		//set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
		// document.cookie = 'cookieBy= codinglab; max-age=' + 60 * 60 * 24 * 30;
		document.cookie = 'cookieBy= joshcalebwill; max-age=' + 60 * 60 * 24;

		setOpenCookie(false);
	};

	return (
		<>
			<Styles.Header className={navbar || market === '/market' ? 'activeHeader ' : ''}>
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
						openCookie={openCookie}
						setOpenCookie={setOpenCookie}
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
				<Chatbot />
			</Styles.Header>
			<Cookies
				openCookie={openCookie}
				setOpenCookie={setOpenCookie}
				handleAcceptCookie={handleAcceptCookie}
				handleDeclineCookie={handleDeclineCookie}
			/>
		</>
	);
};

export default Header;
