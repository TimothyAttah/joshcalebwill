import { Twirl as Hamburger } from 'hamburger-react';
import * as Styles from './HeaderSidebarStyles';
import { useState } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Overlay from '../Overlay';
import pix from '../../assets/ai1.jpg';
import logo from '../../assets/logo.jpeg';

const HeaderSidebar = () => {
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
    <>
      {isOpen && <Overlay onClick={()=> setIsOpen(false)}/>}
			<Styles.HeaderSidebarContainer>
				<Styles.HeaderSidebarMenuButton>
					<Hamburger
						size='25'
						rounded
						toggled={isOpen}
						toggle={toggleSidebar}
					/>
				</Styles.HeaderSidebarMenuButton>
				<Styles.HeaderSidebarNavWrapper
					initial={{ x: '-150vw' }}
					animate={{
						x: isOpen ? '0%' : '-150vw',
					}}>
					<Styles.SidebarLogo>
						<Link>
							<img src={logo} alt='' />
							<h4>
								Joshcalebwill <br /> petroleum limited
							</h4>
						</Link>
					</Styles.SidebarLogo>
					<Styles.ImgBox>
						<img src={pix} alt='' loading='lazy' />
					</Styles.ImgBox>

					<Styles.InfoWrapper>
						<Styles.InfoList>
							<h4>📍 Head Office:</h4>
							<p>
								Plot 20B Close United Estate <br /> Alagbole, Ogun State
							</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>📞 Phone:</h4>
							<p>+2348023169986</p>
							<p>+2348162073680</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>📧 Email:</h4>
							<p>[Insert phone number here]</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>🕒 Office Hours:</h4>
							<p>Monday – Friday: 9:00 AM – 5:00 PM</p>
							<p>Saturday: 10:00 AM – 2:00 PM</p>
						</Styles.InfoList>
					</Styles.InfoWrapper>
					<Styles.InfoSocialLinksWrapper>
						<Styles.InfoSocialLink>
							<Link>
								<Facebook />
							</Link>
						</Styles.InfoSocialLink>
						<Styles.InfoSocialLink>
							<Link>
								<Twitter />
							</Link>
						</Styles.InfoSocialLink>
						<Styles.InfoSocialLink>
							<Link>
								<Instagram />
							</Link>
						</Styles.InfoSocialLink>
					</Styles.InfoSocialLinksWrapper>
				</Styles.HeaderSidebarNavWrapper>
			</Styles.HeaderSidebarContainer>
		</>
	);
};

export default HeaderSidebar;
