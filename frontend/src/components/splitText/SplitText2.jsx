import React, { useEffect, useRef } from 'react';
import * as Styles from './SplitText2Styles';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { FadeInAlways } from '../../components/fadeIn/FadeInAlways';
import TextAnimate from '../../components/textAnimate/TextAnimate';

const SplitText2 = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.text1',
			{
				x: 5000,
				opacity: 0,
			},
			{
				x: -1500,
				opacity: 1,
				duration: 1000,
				delay: 1,
				scrollTrigger: {
					trigger: '.text1',
					start: 1,
					toggleActions: 'none restart restart none',
					scrub: 10,
				},
			},
		);

		gsap.fromTo(
			'.text2',
			{
				x: -5000,
				opacity: 0,
			},
			{
				x: 1500,
				opacity: 1,
				duration: 1000,
				delay: 1,
				scrollTrigger: {
					trigger: '.text2',
					start: 1,
					toggleActions: 'none restart restart none',
					scrub: 10,
				},
			},
		);

		gsap.fromTo(
			'.text3',
			{
				x: 5000,
				opacity: 0,
			},
			{
				x: -1500,
				opacity: 1,
				duration: 15000,
				delay: 10,
				scrollTrigger: {
					trigger: '.text3',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 2,
				},
			},
		);

		gsap.fromTo(
			'.text4',
			{
				x: -5000,
				opacity: 0,
			},
			{
				x: 1500,
				opacity: 1,
				duration: 20000,
				delay: 10,
				scrollTrigger: {
					trigger: '.text4',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 2,
				},
			},
		);

		gsap.fromTo(
			'.text5',
			{
				x: 5000,
				opacity: 0,
			},
			{
				x: -900,
				opacity: 1,
				duration: 2000,
				delay: 1,
				scrollTrigger: {
					trigger: '.text5',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 1,
				},
			},
		);

		gsap.fromTo(
			'.text6',
			{
				x: -5000,
				opacity: 0,
			},
			{
				x: 1500,
				opacity: 1,
				duration: 2000,
				delay: 1,
				scrollTrigger: {
					trigger: '.text6',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 1,
				},
			},
		);

		gsap.fromTo(
			'.text7',
			{
				x: 5000,
				opacity: 0,
			},
			{
				x: -900,
				opacity: 1,
				duration: 2000,
				delay: 10,
				scrollTrigger: {
					trigger: '.text7',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 1,
				},
			},
		);

		gsap.fromTo(
			'.splitPix1',
			{
				y: 1000,
				opacity: 0,
			},
			{
				y: -900,
				opacity: 1,
				duration: 2000,
				delay: 10,
				scrollTrigger: {
					trigger: '.splitPix1',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 1,
				},
			},
		);

		gsap.fromTo(
			'.splitPix2',
			{
				y: 1000,
				opacity: 0,
			},
			{
				y: -900,
				opacity: 1,
				duration: 2000,
				delay: 10,
				scrollTrigger: {
					trigger: '.splitPix2',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 1,
				},
			},
		);

		gsap.fromTo(
			'.splitPix3',
			{
				y: 1500,
				opacity: 0,
			},
			{
				y: -1000,
				opacity: 1,
				duration: 2000,
				delay: 10,
				scrollTrigger: {
					trigger: '.splitPix3',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 1,
				},
			},
		);

		gsap.fromTo(
			'.splitPix4',
			{
				y: 1500,
				opacity: 0,
			},
			{
				y: -1000,
				opacity: 1,
				duration: 2000,
				delay: 10,
				scrollTrigger: {
					trigger: '.splitPix4',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 1,
				},
			},
		);

		gsap.fromTo(
			'.splitPix5',
			{
				y: 900,
				opacity: 0,
			},
			{
				y: -1000,
				opacity: 1,
				duration: 2000,
				delay: 10,
				scrollTrigger: {
					trigger: '.splitPix5',
					start: 0,
					toggleActions: 'restart none restart none',
					scrub: 1,
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
		<>
			<Styles.IntroContainer>
				<Styles.ContentTitle>
					<FadeInAlways delay={0.2} direction='down'>
						<small>Who we are</small>
					</FadeInAlways>
					<Styles.TextWrap className='text-wrap'>
						<Styles.Text1 className='text1'>Professionalism</Styles.Text1>
						<Styles.Text2 className='text2'>integrity</Styles.Text2>
						{/* <img
							src={pix1}
							alt=''
							className='splitPix1'
							width='300'
							style={{ marginLeft: '20px' }}
						/> */}
						<Styles.Text3 className='text3'>quality</Styles.Text3>
						<Styles.Text2 className='text4'>safety</Styles.Text2>

						<Styles.Text1 className='text5'>service excellence</Styles.Text1>
						<Styles.Text2 className='text6'>team work</Styles.Text2>

						<Styles.Text2 className='text7'>innovators</Styles.Text2>

					</Styles.TextWrap>

					<TextAnimate />
				</Styles.ContentTitle>
			</Styles.IntroContainer>
		</>
	);
};

export default SplitText2;
