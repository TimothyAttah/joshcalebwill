import { useEffect } from 'react';
import * as Styles from './TextAnimate1Styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

const TextAnimat1 = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#main',
				markers: false,
				start: '50% 50%',
				end: '100% 50%',
				scrub: 2,
				pin: true,
			},
		});

		tl.to(
			'#top',
			{
				top: '-50%',
			},
			'a',
		)
			.to(
				'#bottom',
				{
					bottom: '-50%',
				},
				'a',
			)
			.to(
				'#top-h',
				{
					top: '80%',
				},
				'a',
			)
			.to(
				'#bottom-h',
				{
					bottom: '-80%',
				},
				'a',
			);
	});

	return (
		<>
			<div id='main-p'></div>
			<div id='main'>
				<div id='top'>
					<h1 id='top-h'>GRAVITY</h1>
				</div>
				<div id='center'></div>
				<div id='bottom'>
					<h1 id='bottom-h'>GRAVITY</h1>
				</div>
			</div>
		</>
	);
};

export default TextAnimat1;
