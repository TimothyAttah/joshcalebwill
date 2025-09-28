import { Twirl as Hamburger } from 'hamburger-react';
import * as Styles from './HeaderSidebarStyles';
import { useCallback, useState, useEffect } from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Overlay from '../Overlay';
import pix1 from '../../assets/ai3.jpg';
import pix2 from '../../assets/ai5.jpg';
import pix3 from '../../assets/ai6.jpg';

import logo from '../../assets/logo.jpeg';
import useEmblaCarousel from 'embla-carousel-react';
// import './embla.css';
import Autoplay from 'embla-carousel-autoplay';

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

	const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 60000 }),
	]);

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);

	const scrollTo = useCallback(
		(index) => embla && embla.scrollTo(index),
		[embla],
	);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setSelectedIndex(embla.selectedScrollSnap());
	}, [embla, setSelectedIndex]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		setScrollSnaps(embla.scrollSnapList());
		embla.on('select', onSelect);
	}, [embla, setScrollSnaps, onSelect]);
	return (
		<>
			{isOpen && <Overlay onClick={() => setIsOpen(false)} />}
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
					<div className='embla' ref={viewportRef}>
						<div className='embla__container'>
							<Styles.ImgBox className='embla__slide'>
								<img src={pix1} alt='' loading='lazy' />
							</Styles.ImgBox>
							<Styles.ImgBox className='embla__slide'>
								<img src={pix2} alt='' loading='lazy' />
							</Styles.ImgBox>
							<Styles.ImgBox className='embla__slide'>
								<img src={pix3} alt='' loading='lazy' />
							</Styles.ImgBox>
						</div>
					</div>

					<Styles.InfoWrapper>
						<Styles.InfoList>
							<h4>📍 Head Office:</h4>
							<p>
								Plot 20B Close United Estate <br /> Alagbole, Ogun State
							</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>📞 Phone:</h4>
							<p>+2347077077529</p>
							<p>+2349071209050</p>
						</Styles.InfoList>
						<Styles.InfoList>
							<h4>📧 Email:</h4>
							{/* <p>joshcalebwillpetroleumlimited@gmail.com</p> */}
							<p>info@joshcalebwill.com</p>
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
								<FaFacebook />
							</Link>
						</Styles.InfoSocialLink>
						<Styles.InfoSocialLink>
							<Link>
								<FaInstagram />
							</Link>
						</Styles.InfoSocialLink>
						<Styles.InfoSocialLink>
							<Link>
								<FaLinkedin />
							</Link>
						</Styles.InfoSocialLink>
						<Styles.InfoSocialLink>
							<Link
								to='https://wa.me/2347077077529?text=Hello,%20welcome%20to%20Joshcalebwill'
								target='_blank'>
								<FaWhatsapp />
							</Link>
						</Styles.InfoSocialLink>
					</Styles.InfoSocialLinksWrapper>
				</Styles.HeaderSidebarNavWrapper>
			</Styles.HeaderSidebarContainer>
		</>
	);
};

export default HeaderSidebar;
