import React from 'react';
import NavLinks from './NavLinks';
import * as Styles from './NavbarStyles'

const Navbar = () => {
	return (
		<Styles.NavbarContainer>
			<NavLinks />
		</Styles.NavbarContainer>
	);
};

export default Navbar;
