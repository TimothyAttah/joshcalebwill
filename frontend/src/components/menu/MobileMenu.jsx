import { useState } from 'react';
import { X, Menu, ChevronDown } from 'lucide-react';
import * as Styles from './MobileMenuStyles';

const MobileMenu = ({ menus }) => {
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
	return (
		<Styles.MobileMenuContainer>
			<Styles.MobileMenuButton onClick={toggleSidebar}>
				{isOpen ? <X /> : <Menu />}
			</Styles.MobileMenuButton>
      <Styles.MobileSubMenuContainer
        initial={ { x: '-100%' } }
        animate={{x: isOpen ? '0%': '-100%'}}
      >
				<ul>
					{menus?.map(({ name, subMenu }, i) => {
						const hasSubMenu = subMenu?.length > 0;
						const isClicked = clicked === i;
						return (
							<Styles.MobileSubMenuListItem key={i} clicked={isClicked}>
								<span onClick={() => setClicked(isClicked ? null : i)}>
									{name} {hasSubMenu && <ChevronDown />}
                </span>

                {
                  hasSubMenu && (
                    <Styles.MobileSubMenuListWrapper
                      initial='exit'
                      animate={ isClicked ? 'enter' : 'exit' }
                      variants={subMenuDrawer}
                    >
                      { subMenu?.map(({ name, icon: Icon },i) => (
                        <Styles.MobileSubMenuList key={i}>
                          <Icon />
                          <span>{name}</span>
                        </Styles.MobileSubMenuList>
                      ))}
                    </Styles.MobileSubMenuListWrapper>
                  )
                }
							</Styles.MobileSubMenuListItem>
						);
					})}
				</ul>
			</Styles.MobileSubMenuContainer>
		</Styles.MobileMenuContainer>
	);
};

export default MobileMenu;
