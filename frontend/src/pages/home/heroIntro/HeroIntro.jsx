import { useEffect } from 'react';
import './heroIntro.css';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';


const HeroIntro = () =>
{
	gsap.registerPlugin(ScrollTrigger, SplitText);
	const lenis = new Lenis();

	useEffect(() => {
		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		const cardPositions = [
			{ top: '30%', left: '55%' },
			{ top: '20%', left: '25%' },
			{ top: '50%', left: '10%' },
			{ top: '60%', left: '40%' },
			{ top: '30%', left: '30%' },
			{ top: '60%', left: '60%' },
			{ top: '20%', left: '50%' },
			{ top: '60%', left: '10%' },
			{ top: '20%', left: '40%' },
			{ top: '45%', left: '55%' },
		];

		const titlesContainer = document.querySelector('.titles');
		const moveDistance = window.innerWidth * 3;

		const imagesContainer = document.querySelector('.images');

		for (let i = 1; i <= 10; i++) {
			const card = document.createElement('div');
			card.className = `card card-${i}`;

			const img = document.createElement('img');
			img.src = `../../../assets/${i}.png`;
			img.alt = `Image ${i}`;
			card.appendChild(img);

			const position = cardPositions[i - 1];
			card.style.top = position.top;
			card.style.left = position.left;

			imagesContainer.appendChild(card);
		}

		const cards = document.querySelectorAll('.card');
		cards.forEach((card, index) => {
			gsap.set(card, {
				z: -50000,
				scale: 0,
			});
		});

		ScrollTrigger.create({
			trigger: '.sticky',
			start: 'top top',
			end: `+=${window.innerHeight * 5}px`,
			pin: true,
			scrub: 1,
			onUpdate: (self) => {
				const xPosition = -moveDistance * self.progress;
				gsap.set(titlesContainer, {
					x: xPosition,
				});

				const velocity = self.velocity;
				const normalizedVelocity = velocity / Math.abs(velocity) || 0;
				const maxOffset = 30;
				const currentSpeed = Math.min(Math.abs(velocity / 500), maxOffset);

				const isAtEdge = self.progress <= 0 || self.progress >= 1;

				document.querySelectorAll('.title').forEach((titlesContainer, i) => {
					const title1 = titlesContainer.querySelector('.title-1');
					const title2 = titlesContainer.querySelector('.title-2');
					const title3 = titlesContainer.querySelector('.title-3');

					if (isAtEdge) {
						gsap.to([title1, title2], {
							xPercent: -50,
							x: 0,
							duration: 0.5,
							ease: 'power2.out',
							overwrite: true,
						});
					} else {
						const baseOffset = normalizedVelocity * currentSpeed;

						gsap.to(title1, {
							xPercent: -50,
							x: `${baseOffset * 4}px`,
							duration: 0.2,
							ease: 'power1.out',
							overwrite: 'auto',
						});

						gsap.to(title2, {
							xPercent: -50,
							x: `${baseOffset * 2}px`,
							duration: 0.2,
							ease: 'power1.out',
							overwrite: 'auto'
						});
					}
					gsap.to(title3, {
						xPercent: -50,
						x: 0,
					});
				});

				// cards.forEach()
			},
		});
	});

	return (
		<>
			<section className='hero'>
				<h1>(Scroll if you dare)</h1>
			</section>
			<section className='sticky'>
				<div className='titles'>
					<div className='title'>
						<h1 className='title-1'>Showcase Hub</h1>
						<h1 className='title-2'>Showcase Hub</h1>
						<h1 className='title-3'>Showcase Hub</h1>
					</div>

					<div className='title'>
						<h1 className='title-1'>Innovation</h1>
						<h1 className='title-2'>Innovation</h1>
						<h1 className='title-3'>Innovation</h1>
					</div>

					<div className='title'>
						<h1 className='title-1'>Loyal with Grace</h1>
						<h1 className='title-2'>Loyal with Grace</h1>
						<h1 className='title-3'>Loyal with Grace</h1>
					</div>

					<div className='title'>
						<h1 className='title-1'>excellence</h1>
						<h1 className='title-2'>excellence</h1>
						<h1 className='title-3'>excellence</h1>
					</div>
				</div>
				<div className='images'></div>
			</section>
			<section className='outro'>
				<h1>(Thats a wrap)</h1>
			</section>
		</>
	);
};

export default HeroIntro;
