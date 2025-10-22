import { Twirl as Hamburger } from 'hamburger-react';
import * as Styles from './MobileSidebarStyles';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Overlay from '../../Overlay';
import { FadeInAlways } from '../../fadeIn/FadeInAlways';
import {
	mobileNavWithSubmenuData,
	navWithoutSubmenuData,
} from '../../../utils/navData';
import { scrollToTop } from '../../header/Header';

const showAnimation = {
	hidden: {
		opacity: 0,
		x: 100,
		transition: {
			duration: 1.25,
			type: 'tween',
			delay: 0.2,
			ease: [0.25, 0.25, 0.25, 0.75],
		},
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1.25,
			type: 'tween',
			delay: 0.2,
			ease: [0.25, 0.25, 0.25, 0.75],
		},
	},
};

const MobileSidebar = ({ showMobileSidebar, setShowMobileSidebar }) => {
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

		setShowMobileSidebar(false);
		scrollToTop();
	};

	return (
		<>
			{/* {showMobileSidebar && (
				<Overlay onClick={() => setShowMobileSidebar(false)} />
			)} */}
			<Styles.MobileSidebar
				variants={showAnimation}
				initial='hidden'
				animate='show'
				exit='hidden'
			>
				<Styles.MobileSidebarContainer>
					<Styles.MobileSidebarList>
						{mobileNavWithSubmenuData.map((nav, i) => {
							const hasSubMenu = nav.subMenu.length > 0;
							const isClicked = clicked === i;
							return (
								<FadeInAlways key={i} delay={0.2 * i + 0.2} direction='down'>
									<Styles.MobileSidebarListItem>
										{/* <Link
											to={nav.navPath}
											onClick={() => setShowMobileSidebar(false)}
										>
											{nav.navTitle} {hasSubMenu && <ChevronDown />}
										</Link> */}
										<Link
											onClick={() => setClicked(isClicked ? null : i)}
											to={nav.navPath}
										>
											{nav.navTitle} {hasSubMenu && <ChevronDown />}
										</Link>

										{hasSubMenu && (
											<Styles.MobileSubMenuListWrapper
												initial='exit'
												animate={isClicked ? 'enter' : 'exit'}
												variants={subMenuDrawer}
											>
												{nav.subMenu?.map((nav, i) => (
													<FadeInAlways
														key={i}
														delay={0.1 * i + 0.1}
														direction='down'
													>
														<Styles.MobileSubMenuList>
															<Link
																to={nav.navPath}
																onClick={() => closeSidebar(i, isClicked)}
															>
																<span>{nav.navTitle}</span>
															</Link>
														</Styles.MobileSubMenuList>
													</FadeInAlways>
												))}
											</Styles.MobileSubMenuListWrapper>
										)}
									</Styles.MobileSidebarListItem>
								</FadeInAlways>
							);
						})}
					</Styles.MobileSidebarList>
					<Styles.MobileSidebarList>
						{navWithoutSubmenuData.map((nav, i) => {
							return (
								<FadeInAlways key={i} delay={0.2 * i + 0.2} direction='down'>
									<Styles.MobileSidebarListItem>
										<Link
											to={nav.navPath}
											onClick={() => setShowMobileSidebar(false)}
										>
											{nav.navTitle}
										</Link>
									</Styles.MobileSidebarListItem>
								</FadeInAlways>
							);
						})}
					</Styles.MobileSidebarList>
				</Styles.MobileSidebarContainer>
			</Styles.MobileSidebar>
		</>
	);
};

export default MobileSidebar;
