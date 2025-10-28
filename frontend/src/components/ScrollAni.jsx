import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
	motion,
	useInView,
	useAnimation,
	useScroll,
	useTransform,
} from 'framer-motion';
import TextAnimate from './textAnimate/TextAnimate';

const ScrollContainer = styled(motion.div)`
	/* background-color: var(--main-color-o); */
	background: var(--main-color);
	width: 100%;
	/* height: 80vh; */
	/* padding-top: 100px; */
	position: relative;
	overflow: hidden !important;

	h1 {
		color: #fff;
		font-size: 8rem !important;
		padding: 50px 0;
	}

	h4 {
		color: #fff;
		font-size: 2rem !important;
		padding-bottom: 150px;
		padding-top: 50px;
		text-align: center !important;
	}

	@media screen and (max-width: 900px) {
		h1 {
			font-size: 6rem !important;
		}
	}

	@media screen and (max-width: 450px) {
		h1 {
			font-size: 3rem !important;
		}

		.textTeam,
		.textSafety,
		.textInno {
			display: none;
		}
	}
`;

const Box = styled(motion.div)`
	background-color: green;
	width: 200px;
	height: 200px;
`;

const Box1 = styled(motion.div)`
	background-color: blue;
	width: 200px;
	height: 200px;
`;

const Box2 = styled(motion.div)`
	background-color: ghostwhite;
	width: 200px;
	height: 200px;
`;

const ScrollAni = () => {
	const [item1, setItem1] = useState(0);

	// const currentScrollX = window.scrollY;
	// console.log('Current window horizontal scroll position:', currentScrollX);

	// const item1Ref = useRef(null);

	// useEffect(() => {
	// 	// let scrollPos = window.scrollY;

	// 	// console.log(scrollPos);
	// 	// setItem1(scrollPos);

	// 	// const container = document.querySelector('.my-scrollable-element'); // Select your element
	// 	// const elementScrollX = container.scrollY;
	// 	// console.log('Element horizontal scroll position:', elementScrollX);

	// 	// let container2 = document.querySelector('.container');
	// 	// // container2.scrollTop;
	// 	// // container2.scrollLeft;

	// 	// container2 = window.pageYOffset;

	// 	// console.log(container2);

	// 	// // console.log(window.scrollY + '2px');

	// 	// const scrollValuefromTop = window.pageYOffset;

	// 	// console.log(scrollValuefromTop);

	// 	// const box = document.querySelector('.conBox');

	// 	// box.addEventListener('scroll', scrollDown);

	// 	// function scrollDown(e) {
	// 	// 	let x = e.clientX - 100;

	// 	// 	console.log(x);
	// 	// }

	// 	// const title = document.querySelector('.sticky-title');

	// 	// const titleTop = title.offsetTop; // find the top position of title block
	// 	// relative to the window top

	// 	// window.addEventListener('scroll', () => {
	// 	// 	console.log('hi', titleTop);
	// 	// 	setItem1(title.scrollY >= titleTop); // when window.scrollY is greater than top
	// 	// 	// the top of the title block the scroll
	// 	// 	// state is set to True
	// 	// });

	// 	// var div = document.getElementById('myDiv');

	// 	// div.addEventListener('scroll', () => {
	// 	// 	document.getElementById('pos').innerHTML = div;
	// 	// });
	// });

	const ref = useRef(null);
	const isInView = useInView(ref, {
		amount: 'all',
	});

	const refBox1 = useRef(null);
	const boxIsInView = useInView(refBox1, {
		amount: 'all',
	});
	useEffect(() => {
		console.log(`The element ${isInView ? 'is' : 'is not'} in view`);
		console.log(`The element box 1 ${boxIsInView ? 'is' : 'is not'} in view`);
	});

	// const { scrollYProgress } = useScroll();

	// useMotionValueEvent(scrollYProgress, 'change', (latest) => {
	// 	console.log(latest);
	// });

	const targetRef = useRef(null);

	// const { scrollYProgress } = useScroll({
	// 	target: targetRef
	// });

	const { scrollY } = useScroll();
	// const rotate = useTransform(scrollYProgress, [0,1], ["0deg", "180deg"])
	// const x1 = useTransform(scrollY, [-4000, 500], [-5000, 500]);
	const x1 = useTransform(scrollY, [0, 1000], [-2000, 2000]);

	// const x2 = useTransform(scrollY, [5000, 200], [-5000, 500]);

	const x2 = useTransform(scrollY, [2000, 500], [-7000, 1800]);

	// const x2 = useTransform(scrollY, [0, 200], [1000, 200]);

	const x3 = useTransform(scrollY, [0, 1800], [-1800, 2500]);

	const x4 = useTransform(scrollY, [20000, 500], [-27000, 2000]);

	const x5 = useTransform(scrollY, [0, 2800], [-3000, 3000]);

	const x6 = useTransform(scrollY, [25000, 500], [-29000, 2200]);

	const x7 = useTransform(scrollY, [0, 3800], [-4000, 3000]);



	const y1 = useTransform(scrollY, [0, 3000], [100, -1500]);

	const text1 = useRef(null);
	const text1IsInView = useInView(text1, { once: false });
	const controls = useAnimation();

	useEffect(() => {
		if (text1IsInView) {
			controls.start({
				x: 1000,
				transition: { duration: 2 },
			});
		}
	}, [text1IsInView, controls]);

	return (
		<>
			<ScrollContainer>
				<h4>Who we are</h4>
				{/* <motion.h1 style={{ x: x1, transition: 'all' }}>Execellence</motion.h1>
				<motion.h1 style={{ x: x2, transition: 'all' }}>Professional</motion.h1> */}

				{/* <motion.div ref={text1} initial={{ x: 0 }} animate={controls}>
					<h1> Professionalism</h1>
				</motion.div> */}

				<motion.h1 style={{ x: x1, transition: 'all' }}>
					Professionalism
				</motion.h1>

				<motion.h1 style={{ x: x2, transition: 'all' }}>integrity</motion.h1>

				<motion.h1 style={{ x: x3, transition: 'all' }}>quality</motion.h1>

				<motion.h1 style={{ x: x4, transition: 'all' }} className='textSafety'>
					safety
				</motion.h1>

				<motion.h1 style={{ x: x5, transition: 'all' }}>
					service excellence
				</motion.h1>

				<motion.h1 style={{ x: x6, transition: 'all' }} className='textTeam'>
					team work
				</motion.h1>

				<motion.h1 style={{ x: x7, transition: 'all' }} className='textInno'>innovators</motion.h1>

				<TextAnimate />
				{/* <Box1 style={{ y: y1 }}></Box1> */}

				{/* <Box2
					className='conBox'
					animate={{
						x: isInView ? '100%' : '0%',
						transition: {
							duration: 2.25,
							type: 'tween',
							delay: 0.2,
							ease: [0.25, 0.25, 0.25, 0.75],
						},
					}}
				></Box2> */}
			</ScrollContainer>
		</>
	);
};

export default ScrollAni;
