import { footerData } from './footerData';
import { Link } from 'react-router-dom';
import * as Styles from './FooterStyles';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

const Footer = () => {
	return (
		<Styles.FooterContainer>
			<Styles.FooterWrapper>
				{footerData.map((data, i) => (
					<FadeInAlways key={i} delay={0.1 * i + 1} direction='up'>
						<Styles.FooterLists>
							<h4>{data.footerTitle}</h4>
							<Styles.FooterListsItem>
								{data.navSubmenu.map((item, i) => (
									<FadeInAlways key={i} delay={0.1 * i + 1} direction='left'>
										{item.target && item.target ? (
											<Link to={item.navPath} target='_blank'>
												{item.navTitle}
												{item.navIcon && <item.navIcon />}
											</Link>
										) : (
											<Link to={item.navPath}>
												{item.navTitle}
												{item.navIcon && <item.navIcon />}
											</Link>
										)}
									</FadeInAlways>
								))}
							</Styles.FooterListsItem>
						</Styles.FooterLists>
					</FadeInAlways>
				))}
			</Styles.FooterWrapper>
			{/* <Styles.Josh>joshcalebwill &copy; 2025</Styles.Josh> */}
		</Styles.FooterContainer>
	);
};

export default Footer;
