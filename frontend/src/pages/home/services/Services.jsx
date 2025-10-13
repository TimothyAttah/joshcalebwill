import ParticleBackground from '../../../components/particleBackground/ParticleBackground';
import * as Styles from './ServicesStyles';
import wg1 from '../../../assets/wg11.png';
import wg2 from '../../../assets/wg10.png';
import textImg from '../../../assets/text.svg';


import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';
import './services.css';

const Services = () =>
{
	gsap.registerPlugin(ScrollTrigger);
	const lenis = new Lenis();

	useEffect(() =>
	{
		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add((time) =>
		{
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		document.querySelectorAll('.animate-text').forEach((textElement) =>
		{
			textElement.setAttribute('data-text', textElement.textContent.trim());

			ScrollTrigger.create({
				trigger: textElement,
				start: "top 50%",
				end: 'bottom 50%',
				scrub: 1,
				onUpdate: (self) =>
				{
					const clipValue = Math.max(0, 100 - self.progress * 100);
					textElement.style.setProperty("--clip-value", `${ clipValue}%`);
				}
			});
		});

		ScrollTrigger.create({
			trigger: ".services",
			start: "top bottom",
			end: 'top top',
			scrub: 1,
			onUpdate: (self) =>
			{
				const headers = document.querySelectorAll('.services-header');
				gsap.set(headers[0], { x: `${ 100 - self.progress * 100}%` });
				gsap.set(headers[1], { x: `${ -100 + self.progress * 100}%` });
				gsap.set(headers[2], { x: `${ 100 - self.progress * 100}%` });

			}
		});

		ScrollTrigger.create({
			trigger: '.services',
			start: 'top top',
			end: `+=${ window.innerHeight * 2 }`,
			pin: true,
			scrub: 1,
			pinSpacing: false,
			onUpdate: (self) =>
			{
				const headers = document.querySelectorAll('.services-header');

				if (self.progress <= 0.5)
				{
					const yProgress = self.progress / 0.5;
					gsap.set(headers[0], { y: `${ yProgress * 100 }%` });
					gsap.set(headers[2], { y: `${ yProgress * -100 }%` });

				} else
				{
					gsap.set(headers[0], { y: '100%' });
					gsap.set(headers[2], { y: '-100%' });

					const scaleProgress = (self.progress - 0.5) / 0.5;
					const minScale = window.innerWidth <= 1000 ? 0.3 : 0.1;
					const scale = 1 - scaleProgress * (1 - minScale);

					headers.forEach((header) => gsap.set(header, { scale }));
				}
			}
		});
	});

	return (
		<Styles.Services>
			{/* <ParticleBackground id='particles' /> */}

			<section className='hero'>
				<div className='hero-img'>
					<img src={wg1} alt='' />
				</div>
			</section>
			<section className='about'>
				<h1 className='animate-text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit
					quaerat fugiat nam, a sit, aperiam quam laborum sed provident,
					laudantium optio aut soluta nesciunt ea voluptatum consequuntur ipsa
					nobis.
				</h1>
			</section>

			<section className='services'>
				<div className='services-header'>
					<img src={textImg} alt='' />
				</div>
				<div className='services-header'>
					<img src={textImg} alt='' />
				</div>
				<div className='services-header'>
					<img src={textImg} alt='' />
				</div>
			</section>

			<section className='services-copy'>
				<h1 className='animate-text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					sint odit sed iste culpa, tenetur earum vero, incidunt similique
					corporis, ad quis cupiditate provident placeat aperiam? Ad qui
					exercitationem commodi?
				</h1>
			</section>
			<section className='outro'>
				<div className='outro-img'>
					<img src={wg2} alt='' />
				</div>
			</section>
		</Styles.Services>
	);
};

export default Services;
