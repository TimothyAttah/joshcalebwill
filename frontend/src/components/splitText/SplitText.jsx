import './splitText.css';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';
import TextAnimate from '../textAnimate/TextAnimate';

const TextSpliting = () => {
	gsap.registerPlugin(ScrollTrigger, SplitText);
	const lenis = new Lenis();

	useEffect(() => {
		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		const titleHeadings = gsap.utils.toArray('.title h1');
		const splits = [];

		titleHeadings.forEach((heading) => {
			const split = SplitText.create(heading, {
				type: 'chars',
				charsClass: 'char',
			});
			splits.push(split);

			split.chars.forEach((char, i) => {
				const charInitialY = i % 1 === 0 ? -150 : 150;
				gsap.set(char, { y: charInitialY });
			});
		});

		const titles = gsap.utils.toArray('.title');

		titles.forEach((title, index) => {
			const titleContainer = title.querySelector('.title-container');
			const titleContainerInitialX =
				index === 1 || index === 3 || index === 5 ? -100 : 100;
			const split = splits[index];
			const charCount = split.chars.length;

			ScrollTrigger.create({
				trigger: title,
				start: 'top bottom',
				end: 'top 35%',
				scrub: 1,
				onUpdate: (self) => {
					const titleContainerX =
						titleContainerInitialX - self.progress * titleContainerInitialX;

					gsap.set(titleContainer, { x: `${titleContainerX}%` });

					split.chars.forEach((char, i) => {
						let charStaggerIndex;
						if (index === 1) {
							charStaggerIndex = charCount - 1 - i;
						} else {
							charStaggerIndex = i;
						}

						const charStartDelay = 0.1;
						const charTimelineSpan = 1 - charStartDelay;
						const staggerFactor = Math.min(0.75, charTimelineSpan * 0.75);
						const delay =
							charStartDelay + (charStaggerIndex / charCount) * staggerFactor;

						const duration =
							charTimelineSpan - (staggerFactor * (charCount - 1)) / charCount;

						const start = delay;

						let charProgress = 0;
						if (self.progress >= start) {
							charProgress = Math.min(1, (self.progress - start) / duration);
						}

						const charInitialY = i % 4 === 0 ? -90 : 90;
						const charY = charInitialY - charProgress * charInitialY;
						gsap.set(char, { y: charY });
					});
				},
			});
		});
	});

	return (
		<div className='section-container'>
			<section className='intro'>
				<h6>who we are</h6>
			</section>
			<section className='animated-titles'>
				<div className='title'>
					<div className='title-container'>
						<h1 className='text1'>Professionalism</h1>
					</div>
				</div>

				<div className='title'>
					<div className='title-container'>
						<h1 className='text2'>integrity</h1>
					</div>
				</div>

				<div className='title'>
					<div className='title-container'>
						<h1 className='text3'>quality</h1>
					</div>
				</div>

				<div className='title'>
					<div className='title-container'>
						<h1 className='text4'>safety</h1>
					</div>
				</div>

				<div className='title'>
					<div className='title-container'>
						<h1 className='text5'>service excellence</h1>
					</div>
				</div>

				<div className='title'>
					<div className='title-container'>
						<h1 className='text6'>team work</h1>
					</div>
				</div>

				<div className='title'>
					<div className='title-container'>
						<h1 className='text7'>innovators</h1>
					</div>
				</div>
			</section>
			<section className='outro'>
				{/* <h1>End of motion</h1> */ }
				<TextAnimate />
			</section>
		</div>
	);
};

export default TextSpliting;
