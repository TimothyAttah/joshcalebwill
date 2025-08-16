import * as Styles from './HeaderStyles';
import logo from '../../assets/logo.png';
import Navbar from '../nav/Navbar';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { FadeInAlways } from '../fadeIn/FadeInAlways';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';

const Header = () => {
	const location = useLocation();

	const [openBG, setOpenBG] = useState(false);

	useEffect(() => {
		const handleBg = () => {
			if (location.pathname !== '/') {
				setOpenBG(true);
			} else {
				setOpenBG(false);
			}
		};

		handleBg();
	})

	const [openSidebar, setOpenSidebar] = useState(false);
	return (
		<>
			<Styles.HeaderContainer activeBG={openBG}>
				<Styles.HeaderWrapper>
					<FadeInAlways delay={0.1} direction='down'>
						<Styles.HeaderLogo>
							<Link to='/'>
								<img src={logo} alt='' />
							</Link>
						</Styles.HeaderLogo>
					</FadeInAlways>

					<FadeInAlways delay={0.3} direction='down'>
						<Navbar />
					</FadeInAlways>

					<FadeInAlways delay={0.5} direction='down'>
						<Styles.HeaderMenu>
							<Link>Market Place</Link>
							<FaBars onClick={() => setOpenSidebar(!openSidebar)} />
							{/* <Hamburger
								size='25'
								rounded
								toggled={openSidebar}
								toggle={() => setOpenSidebar(!openSidebar)}
							/> */}
						</Styles.HeaderMenu>
					</FadeInAlways>
				</Styles.HeaderWrapper>
			</Styles.HeaderContainer>
			<AnimatePresence>
				{openSidebar && <Sidebar close={() => setOpenSidebar(false)} />}
			</AnimatePresence>
		</>
	);
};

export default Header;
