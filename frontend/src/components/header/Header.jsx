import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import { ShoppingBag, ShoppingBasket } from 'lucide-react';
import DesktopNav from '../navs/DesktopNav';
import * as Styles from './HeaderStyles';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MobileNav from '../navs/MobileNav';
import { Menus } from '../../utils/navItem';
import HeaderSidebar from './HeaderSidebar';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

const Header = () => {
	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 80) {
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
							<Link to='/'>
								<img src={logo} alt='' />
								<h4>
									Joshcalebwill <br /> petroleum limited
								</h4>
							</Link>
						</Styles.HeaderLogo>
					</FadeInAlways>

					<FadeInAlways delay={0.3} direction='down'>
						<nav>
							<DesktopNav />
						</nav>
					</FadeInAlways>
					<Styles.HeaderMenuWrapper>
						<FadeInAlways delay={0.5} direction='left'>
							<Styles.HeaderMenu>
								<Link to='/market'>
									<ShoppingBasket />
									<h6>Market</h6>
								</Link>
							</Styles.HeaderMenu>
						</FadeInAlways>

						<Styles.HeaderSidebarContainer>
							<FadeInAlways delay={0.7} direction='left'>
								<HeaderSidebar />
							</FadeInAlways>
						</Styles.HeaderSidebarContainer>
					</Styles.HeaderMenuWrapper>

					<AnimatePresence>
						<Styles.HeaderSubmenu>
							<MobileNav menus={Menus} />
						</Styles.HeaderSubmenu>
					</AnimatePresence>
				</Styles.HeaderWrapper>
			</Styles.HeaderContainer>
		</>
	);
};

export default Header;
