import DesktopNav from '../nav/desktopNav/DesktopNav';

import logo from '../../assets/logo.jpeg';
import * as Styles from './NewHeaderStyles';
import { useState } from 'react';

const Header = () =>
{
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
					<img src={logo} alt='' />
					<h6>
						joshcalebwill <br /> <span>petroleum</span> <span>limited</span>
					</h6>
				</Styles.HeaderLogo>

				<DesktopNav />
			</Styles.HeaderContainer>
		</Styles.Header>
	);
};

export default Header;
