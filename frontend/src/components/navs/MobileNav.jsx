import { Twirl as Hamburger } from 'hamburger-react';
import * as Styles from './MobileNavStyles';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Overlay from '../Overlay';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

const MobileNav = ({ menus, scrollToTop }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [clicked, setClicked] = useState(null);

	const toggleSidebar = () => {
		setIsOpen((prev) => !prev);
		setClicked(null);
	};

	const subMenuDrawer = {
		enter: {
			height: 'auto',
			overflow: 'hidden',
		},
		exit: {
			height: 0,
			overflow: 'hidden',
		},
	};

	const closeSidebar = (i, isClicked) => {
		setClicked(isClicked ? null : i);
		// menus.map((menu) => {
		// 	if (!menu.subMenu) {
		// 		setIsOpen(false);
		// 	}
		// });
		scrollToTop();
	};

	return (
		<>
			{isOpen && <Overlay onClick={() => setIsOpen(false)} />}

			<Styles.MobileNavContainer>
				<>
					<Styles.MobileMenuButton>
						<Hamburger
							size='25'
							rounded
							toggled={isOpen}
							toggle={toggleSidebar}
						/>
					</Styles.MobileMenuButton>
				</>

				<Styles.MobileNavWrapper
					initial={{ x: '-120vw' }}
					animate={{ x: isOpen ? '0%' : '-120vw' }}>
					<ul>
						<li>
							<Link to='/who-we-are' onClick={() => setIsOpen(false)}>
								Who we are
							</Link>
						</li>
						{menus?.map(({ name, path, subMenu }, i) => {
							const hasSubMenu = subMenu?.length > 0;
							const isClicked = clicked === i;

							return (
								<FadeInAlways key={i} delay={0.2 * i + 0.2} direction='down'>
									<Styles.MobileSubMenuListItem clicked={isClicked}>
										{/* <Link onClick={() => setClicked(isClicked ? null : i)}>
											{name} {hasSubMenu && <ChevronDown />}
										</Link> */}
										<Link onClick={() => closeSidebar(i, isClicked)} to={path}>
											{name} {hasSubMenu && <ChevronDown />}
										</Link>
										{hasSubMenu && (
											<Styles.MobileSubMenuListWrapper
												initial='exit'
												animate={isClicked ? 'enter' : 'exit'}
												variants={subMenuDrawer}>
												{subMenu?.map(({ name, icon: Icon, path }, i) => (
													<FadeInAlways
														key={i}
														delay={0.1 * i + 0.1}
														direction='down'>
														<Styles.MobileSubMenuList>
															<Link to={path} onClick={() => setIsOpen(false)}>
																<span>
																	<Icon />
																</span>
																<span>{name}</span>
															</Link>
														</Styles.MobileSubMenuList>
													</FadeInAlways>
												))}
											</Styles.MobileSubMenuListWrapper>
										)}
									</Styles.MobileSubMenuListItem>
								</FadeInAlways>
							);
						})}
						<li>
							<Link to='/contact' onClick={() => setIsOpen(false)}>
								contact
							</Link>
						</li>
					</ul>
				</Styles.MobileNavWrapper>
			</Styles.MobileNavContainer>
		</>
	);
};

export default MobileNav;
