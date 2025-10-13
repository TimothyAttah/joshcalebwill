// import { Menus } from '../../utils/navItem';
import { FadeInCommon } from '../fadeIn/FadeInCommon';
import DesktopNavItem from './DesktopNavItem';
import * as Styles from './DesktopNavStyles';

const DesktopNav = ({ scrollToTop }) => {
	return (
		<Styles.NavContainer>
			{/* {Menus.map((menu, i) => (
				<FadeInCommon key={i} delay={(0.1 * i) + 1} direction='down'>
					<DesktopNavItem menu={menu} scrollToTop={scrollToTop}/>
				</FadeInCommon>
			))} */}
		</Styles.NavContainer>
	);
};

export default DesktopNav;
