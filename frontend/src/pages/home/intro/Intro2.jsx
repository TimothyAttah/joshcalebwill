import React, { useEffect, useRef } from 'react';
import * as Styles from './Intro2Styles';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';

const Intro2 = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.text1',
			{
				x: 3000,
				opacity: 0,
			},
			{
				x: -100,
				opacity: 1,
				duration: 2,
				delay: 1,
				scrollTrigger: {
					trigger: '.text-wrap',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 2,
				},
			},
		);

		gsap.fromTo(
			'.text2',
			{
				x: -3000,
				opacity: 0,
			},
			{
				x: 100,
				opacity: 1,
				duration: 2,
				delay: 3,
				scrollTrigger: {
					trigger: '.text-wrap',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 2,
				},
			},
		);
		gsap.fromTo(
			'.text3',
			{
				x: 3000,
				opacity: 0,
			},
			{
				x: -100,
				opacity: 1,
				duration: 5,
				delay: 10,
				scrollTrigger: {
					trigger: '.text-wrap',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 2,
				},
			},
		);

		gsap.fromTo(
			'.title',
			{
				// y: 0,
				opacity: 0,
				zoom: 0,
			},
			{
				// y: 100,
				zoom: 1.2,
				opacity: 1,
				ease: 'power2.inOut',
				duration: 5,
				delay: 10,
				scrollTrigger: {
					trigger: '.title',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 2,
				},
			},
		);
	});

	return (
		<Styles.IntroContainer>
			<Styles.IntroContainer>
				<Styles.ContentTitle>
					<FadeInAlways delay={0.2} direction='down'>
						<small>Welcome to Joshcalebwill Petroluem Limited</small>
					</FadeInAlways>
					{/* <Styles.TextWrap className='text-wrap'>
						<Styles.Text1 className='text1'>critical thinkers</Styles.Text1>
						<Styles.Text2 className='text2'>collaborators</Styles.Text2>
						<Styles.Text3 className='text3'>innovators</Styles.Text3>
					</Styles.TextWrap> */}
					<FadeInAlways delay={0.4} direction='down'>
						<h2>
							We are a global integrated energy company that produces and
							markets energies
						</h2>
					</FadeInAlways>
					<FadeInAlways delay={0.6} direction='down'>
						<p>
							We provide the energy the world needs: ever more affordable, more
							sustainable, more reliable and accessible to as many people as
							possible.
						</p>
					</FadeInAlways>
				</Styles.ContentTitle>
			</Styles.IntroContainer>
		</Styles.IntroContainer>
	);
};

export default Intro2;
