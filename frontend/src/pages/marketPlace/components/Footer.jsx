import { RiMapPin2Fill, RiMailFill, RiPhoneFill } from 'react-icons/ri';
import instagram1 from '../../../assets/who8.png';
import instagram2 from '../../../assets/who10.png';
import instagram3 from '../../../assets/who11.png';
import instagram4 from '../../../assets/who12.png';
import instagram5 from '../../../assets/who13.png';
import instagram6 from '../../../assets/who9.png';

const Footer = () => {
	return (
		<>
			<footer className='section__container footer__container'>
				<div className='footer__col'>
					<h4>CONTACT INFO</h4>
					<p>
						<span>
							<RiMapPin2Fill />
						</span>
						123, Ojodu Berger, Lagos, Nigeria
					</p>
					<p>
						<span>
							<RiMailFill />
						</span>
						info@joshcalebwill.com
					</p>
					<p>
						<span>
							<RiPhoneFill />
						</span>
						 +2347077077529
					</p>
				</div>

				<div className='footer__col'>
					<h4>COMPANY</h4>
					<a href='/'>Home</a>
					<a href='/'>About Us</a>
					<a href='/'>Work With Us</a>
					<a href='/'>Our Blogs</a>
					<a href='/'>Terms & Conditions</a>
				</div>

				<div className='footer__col'>
					<h4>USEFUL LINK</h4>
					<a href='/'>Help</a>
					<a href='/'>Track your order</a>
					<a href='/'>Men</a>
					<a href='/'>Women</a>
					<a href='/'>Dresses</a>
				</div>

				<div className='footer__col'>
					<h4>INSTAGRAM</h4>
					<div className='instagram__grid'>
						<img src={instagram1} alt='' />
						<img src={instagram2} alt='' />
						<img src={instagram3} alt='' />
						<img src={instagram4} alt='' />
						<img src={instagram5} alt='' />
						<img src={instagram6} alt='' />
					</div>
				</div>
			</footer>
			<div className='footer__bar'>
				Copyright &copy; 2025 by Joshcalebwill. All rights reserved.
			</div>
		</>
	);
};

export default Footer;
