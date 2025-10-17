import './textSlider.css';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';

const TextSlider = () => {
	gsap.registerPlugin(ScrollTrigger);
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

		const titlesContainer = document.querySelector('.titles2');
		const moveDistance = window.innerWidth * 3;

		const imagesContainer = document.querySelector('.images');
		for (let i = 1; i <= 10; i++) {
			const card = document.createElement('div');
			card.className = `card card-${i}`;

			const img = document.createElement('img');
			img.scr = `../../../assets/wg${i}.png`;
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
			trigger: '.sticky2',
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

				document
					.querySelectorAll('.title2')
					.forEach((titlesContainer, index) => {
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
								overwrite: 'auto',
							});
						}

						gsap.to(title3, {
							xPercent: -50,
							x: 0,
						});
          });

        cards.forEach((card, index) =>
        {
          const staggerOffset = index * 0.075;
          const scaledProgress = (self.progress - staggerOffset) * 3;
          const individualProgress = Math.max(0, Math.min(1, scaledProgress));
          const targetZ = index === cards.length - 1 ? 1500 : 2000;
          const newZ = -50000 + (targetZ + 50000) * individualProgress;
          const scaleProgress = Math.min(1, individualProgress * 10);
          const scale = Math.max(0, Math.min(1, scaleProgress));

          gsap.set(card, {
            z: newZ,
            scale:scale
          })
        })
			},
		});
	});
	return (
		<>
			<section className=' hero-section hero2'>
				<h1>Scroll if you dare</h1>
			</section>
			<section className='sticky-section sticky2'>
				<div className='titles2'>
					<div className='title2'>
						<h1 className='title-1'>Showcase Hub</h1>
						<h1 className='title-2'>Showcase Hub</h1>
						<h1 className='title-3'>Showcase Hub</h1>
					</div>
					<div className='title2'>
						<h1 className='title-1'>Experience</h1>
						<h1 className='title-2'>Experience</h1>
						<h1 className='title-3'>Experience</h1>
					</div>
					<div className='title2'>
						<h1 className='title-1'>Intergrity</h1>
						<h1 className='title-2'>Intergrity</h1>
						<h1 className='title-3'>Intergrity</h1>
					</div>
					<div className='title2'>
						<h1 className='title-1'>Professionalism</h1>
						<h1 className='title-2'>Professionalism</h1>
						<h1 className='title-3'>Professionalism</h1>
					</div>
				</div>
				<div className='images'></div>
			</section>
			<section className='outro-section outro2'>
				<h1>Thats a wrap</h1>
			</section>
		</>
	);
};

export default TextSlider;
