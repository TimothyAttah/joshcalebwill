import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import { ShoppingBag, ShoppingBasket } from 'lucide-react';
import DesktopNav from '../navs/DesktopNav';
import * as Styles from './HeaderStyles';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MobileNav from '../navs/MobileNav';
import { Menus, MenusMobile } from '../../utils/navItem';
import HeaderSidebar from './HeaderSidebar';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
}

const Header = () => {
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
		<>
			<Styles.HeaderContainer className={navbar ? 'activeHeader' : ''}>
				<Styles.HeaderWrapper>
					<FadeInAlways delay={0.1} direction='right'>
						<Styles.HeaderLogo>
							<Link to='/' onClick={scrollToTop}>
								<img src={logo} alt='' />
								<h4>
									Joshcalebwill <br /> petroleum limited
								</h4>
							</Link>
						</Styles.HeaderLogo>
					</FadeInAlways>

					<>
						<nav>
							<DesktopNav scrollToTop={scrollToTop} />
						</nav>
					</>
					<Styles.HeaderMenuWrapper>
						<>
							<Styles.HeaderMenu>
								<Link to='/market' onClick={scrollToTop}>
									<ShoppingBasket />
									<h6>Market</h6>
								</Link>
							</Styles.HeaderMenu>
						</>

						<Styles.HeaderSidebarContainer>
							<>
								<HeaderSidebar />
							</>
						</Styles.HeaderSidebarContainer>
					</Styles.HeaderMenuWrapper>

					<AnimatePresence>
						<Styles.HeaderSubmenu>
							<MobileNav menus={MenusMobile} scrollToTop={scrollToTop} />
						</Styles.HeaderSubmenu>
					</AnimatePresence>
				</Styles.HeaderWrapper>
			</Styles.HeaderContainer>
		</>
	);
};

export default Header;
