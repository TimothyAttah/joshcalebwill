import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './SidebarStyles';
import { FaChevronDown } from 'react-icons/fa';

const SidebarItems = ({
	onClick,
	itemName,
	itemContent,
	isActive,
	navPath,
	item,
	close
}) => {
	return (
		<div>
			<Styles.Header onClick={onClick}>
				{item.navSubmenu ? (
					<>
						<Link to={navPath}>
							{itemName}
							{itemContent && (
								<Styles.HeaderIcon isActive={isActive}>
									<FaChevronDown />
								</Styles.HeaderIcon>
							)}
						</Link>
						{/* <Link>Market Place</Link> */}
					</>
				) : (
					<>
						<Link to={navPath}>
							{itemName}
							{itemContent && (
								<Styles.HeaderIcon isActive={isActive}>
									<FaChevronDown />
								</Styles.HeaderIcon>
							)}
						</Link>
					</>
				)}
			</Styles.Header>
			<ul>
				{itemContent &&
					itemContent.map((data, i) => (
						<Styles.Content key={i} itemName={itemName} isActive={isActive}>
							<Styles.Inner id={itemName}>
								<Link to={data.navPath} onClick={close}>
									{data.navTitle}
								</Link>
							</Styles.Inner>
						</Styles.Content>
					))}
			</ul>
		</div>
	);
};

export default SidebarItems;
