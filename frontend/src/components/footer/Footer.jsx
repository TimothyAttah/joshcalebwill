import { footerData } from './footerData';
import { Link } from 'react-router-dom';
import * as Styles from './FooterStyles';

const Footer = () => {
	return (
		<Styles.FooterContainer>
			<Styles.FooterWrapper>
				{footerData.map((data, i) => (
					<Styles.FooterLists>
						<h4>{data.footerTitle}</h4>
						<Styles.FooterListsItem key={i}>
							{data.navSubmenu.map((item, i) => (
								<Link to={item.navPath}>{item.navTitle}</Link>
							))}
						</Styles.FooterListsItem>
					</Styles.FooterLists>
				))}
			</Styles.FooterWrapper>
		</Styles.FooterContainer>
	);
};

export default Footer;
