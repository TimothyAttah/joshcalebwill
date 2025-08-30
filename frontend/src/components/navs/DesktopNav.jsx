import { Menus } from '../../utils/navItem';
import { FadeInAlways } from '../fadeIn/FadeInAlways';
import DesktopNavItem from './DesktopNavItem';
import * as Styles from './DesktopNavStyles';

const DesktopNav = () => {
	return (
		<Styles.NavContainer>
			{Menus.map((menu, i) => (
				<FadeInAlways key={i} delay={(0.2 * i) + 0.2} direction='down'>
					<DesktopNavItem menu={menu} />
				</FadeInAlways>
			))}
		</Styles.NavContainer>
	);
};

export default DesktopNav;
