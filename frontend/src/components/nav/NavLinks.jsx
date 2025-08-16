import { navData } from './navData';
import { Link } from 'react-router-dom';
import * as Styles from './NavbarStyles';

const NavLinks = () => {
	return (
		<>
			<Styles.NavbarLinks>
				{navData.map((nav, i) => (
					<li key={i}>
						<Link to={nav.navPath}>{nav.navTitle}</Link>
						<Styles.NavbarLinksSubmenu>
							{nav.navSubmenu &&
								nav.navSubmenu.map((data, i) => (
									<li key={i}>
										<Link to={data.navPath}>{data.navTitle}</Link>
									</li>
								))}
						</Styles.NavbarLinksSubmenu>
					</li>
				))}
			</Styles.NavbarLinks>
		</>
	);
};

export default NavLinks;
