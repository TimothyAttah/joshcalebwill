import { useEffect, useRef, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import * as Styles from './CareersSliderStyles';

import {
	AnimatePresence,
	easeInOut,
	motion,
	useAnimation,
	useInView,
} from 'framer-motion';

const LastestSlider = () => {
	useEffect(() => {
		const slides = document.querySelector('.slider-items')?.children;
		const prev = document.querySelector('.prev');
		const next = document.querySelector('.next');
		const totalSlides = slides?.length;
		let index = 0;
		const duration = 5000;

		const slide = (direction) => {
			// progress();
			if (direction === 'next') {
				if (index === totalSlides - 1) {
					index = 0;
				} else {
					index++;
				}
			}

			if (direction === 'prev') {
				if (index === 0) {
					index = totalSlides - 1;
				} else {
					index--;
				}
			}

			clearInterval(timer);
			timer = setInterval(autoSlide, duration);

			for (let i = 0; i < slides?.length; i++) {
				slides[i].classList.remove('active');
			}

			slides[index].classList.add('active');
			// slideInfo();
		};

		let width = 100 / totalSlides;

		// function progress() {
		// 	document.querySelector('.progress').innerHTML = '';

		// 	let div = document.createElement('div');
		// 	div.style.height = '5px';
		// 	div.style.width = '0px';
		// 	div.style.position = 'absolute';
		// 	div.style.left = '0';
		// 	div.style.top = '0';
		// 	div.style.backgroundColor = '#fff';
		// 	div.style.zIndex = '22px';
		// 	div.id = 'progress';
		// 	div.style.animation = 'progress ' + duration / 1000 + 's linear';
		// 	document.querySelector('.progress').appendChild(div);
		// }

		function autoSlide() {
			slide('next');
		}

		let timer = setInterval(autoSlide, duration);

		// progress();
	}, []);

	const firstImg = useRef(null);

	let ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	const controls = useAnimation();
	const [showImg, setShowImg] = useState(true);

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [isInView, controls]);

	useEffect(() => {
		// const interval = setInterval(() => {
		// 	SlideRight(id);
		// }, 3000);

		ref = setInterval(() => {}, 3000);

		return () => clearInterval(ref);
	}, []);

	return (
		<Styles.LastestSliderContainer>
			<Styles.Slider className='slider'>
				<Styles.SliderItems className='slider-items'>
					<Styles.Item className='item active'>
						<Styles.Img className='img' slider='slider1'>
							{/* <img src={pix1} alt='' /> */}
						</Styles.Img>
					</Styles.Item>

					<Styles.Item className='item  '>
						<Styles.Img className='img' slider='slider2'>
							{/* <img src={pix1} alt='' /> */}
						</Styles.Img>
					</Styles.Item>

					<Styles.Item className='item'>
						<Styles.Img className='img' slider='slider3'></Styles.Img>
					</Styles.Item>

					{/* <Styles.Item className='item'>
						<Styles.Img className='img' slider='slider4'></Styles.Img>
					</Styles.Item> */}
				</Styles.SliderItems>
				<Styles.Progress className='progress'></Styles.Progress>
				{/* <Styles.BlendModeSubTitle>who we are</Styles.BlendModeSubTitle> */}
				<Styles.BlendModeTitle>Careers</Styles.BlendModeTitle>
			</Styles.Slider>
		</Styles.LastestSliderContainer>
	);
};

export default LastestSlider;
