import * as Styles from './DesktopNavStyles';
import {
	desktopNavWithSubmenuData,
	desktopNavWithoutSubmenuData,
} from '../../../utils/navData';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const DesktopNav = () => {
	const [selected, setSelected] = useState();
	const [dir, setDir] = useState('l' | 'r');

	const handleSelected = (val) => {
		if (typeof selected === 'number' && typeof val === 'number') {
			setDir(selected > val ? 'r' : 'l');
		} else {
			setDir(null);
		}

		setSelected(val);
	};

	//

	return (
		<>
			<Styles.DesktopNav>
				<Styles.DesktopNavListWrapper onMouseLeave={() => handleSelected(null)}>
					{desktopNavWithSubmenuData.map((nav, i) => (
						<Tab
							key={nav.id}
							selected={selected}
							handleSelected={handleSelected}
							tab={nav.id}
						>
							<NavLink>{nav.navTitle}</NavLink>
						</Tab>
					))}
					<AnimatePresence>
						{selected && <Content dir={dir} selected={selected} />}
					</AnimatePresence>
				</Styles.DesktopNavListWrapper>

				<Styles.DesktopNavList>
					{desktopNavWithoutSubmenuData.map((nav, i) => (
						<li key={i}>
							<NavLink>{nav.navTitle}</NavLink>
						</li>
					))}
				</Styles.DesktopNavList>
			</Styles.DesktopNav>
		</>
	);
};

export default DesktopNav;

export const Tab = ({ children, selected, handleSelected, tab }) => {
	return (
		<Styles.DesktopNavTabButton
			id={`shift-tab-${tab}`}
			onMouseEnter={() => handleSelected(tab)}
			onClick={() => handleSelected(tab)}
			className={selected === tab ? 'tabBg' : ''}
		>
			<span>{children}</span>
			<FiChevronDown />
		</Styles.DesktopNavTabButton>
	);
};

export const Content = ({ selected, dir }) => {
	return (
		<Styles.DesktopNavTabContent
			id='overlay-content'
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 8 }}
		>
			<Bridge />
			<Nub selected={selected} />

			{desktopNavWithSubmenuData.map((nav) => (
				<Styles.Submenu key={nav.id}>
					{selected === nav.id && (
						<Styles.SubmenuList
							initial={{
								opacity: 0,
								x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
							}}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.25, ease: 'easeInOut' }}
						>
							{nav.subMenu.map((nav, i) => (
								<Styles.SubmenuListItem key={i}>
									<NavLink>{nav.navTitle}</NavLink>
								</Styles.SubmenuListItem>
							))}
						</Styles.SubmenuList>
					)}
				</Styles.Submenu>
			))}
		</Styles.DesktopNavTabContent>
	);
};

const Nub = ({ selected }) => {
	const [left, setLeft] = useState(0);

	useEffect(() => {
		moveNub();
	}, [selected]);

	const moveNub = () => {
		if (selected) {
			const hoveredTab = document.getElementById(`shift-tab-${selected}`);
			const overlayContent = document.getElementById('overlay-content');

			if (!hoveredTab || !overlayContent) return;

			const tabRect = hoveredTab.getBoundingClientRect();
			const { left: contentLeft } = overlayContent.getBoundingClientRect();

			const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

			setLeft(tabCenter);
		}
	};
	return (
		<Styles.Nub
			animate={{ left }}
			transition={{ duration: 0.25, ease: 'easeInOut' }}
			style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)' }}
		/>
	);
};

const Bridge = () => {
	return <Styles.BridgeBox />;
};
