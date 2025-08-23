import React, { useEffect, useState, useRef } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import * as Styles from './NewSliderStyles';
import {
	motion,
	useAnimation,
	useInView,
	AnimatePresence,
} from 'framer-motion';
import styled from 'styled-components';
import importPix from '../../assets/import1.jpg';
import pix2 from '../../assets/oil1.jpg';

import { FadeInAlways } from '../fadeIn/FadeInAlways';

const CarouselWrapper = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: var(--brown);
	color: #fff;
	padding: 50px;
	/* background-image: url(${pix2});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	padding-top: 42%; */

	@media screen and (max-width: 920px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;

const CarouselInfo = styled(motion.div)`
	width: 500px;

	h2 {
		font-size: 30px;
	}

	p {
		font-size: 20px;
		line-height: 30px;
	}

	@media screen and (max-width: 920px) {
		width: 100%;

		text-align: center;
		font-size: 20px;
	}
`;

const CarouselImg = styled(motion.div)`
	width: 900px;
	img {
		width: 100%;
	}

	@media screen and (max-width: 920px) {
		width: 100%;
	}
`;

const NewSlider = () => {
	const [showImg, setShowImg] = useState(true);
	useEffect(() => {
		const slides = document.querySelector('.slider-items')?.children;
		const prev = document.querySelector('.prev');
		const next = document.querySelector('.next');
		const totalSlides = slides?.length;
		let index = 0;
		const duration = 15000;

		prev.onclick = function () {
			slide('prev');
		};

		next.onclick = function () {
			slide('next');
		};

		const slide = (direction) => {
			progress();
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

		// function slideInfo() {
		// 	document.querySelector('.number').innerHTML =
		// 		index + 1 + '/' + totalSlides;
		// 	document.querySelector('.inner').style.width = (index + 1) * width + '%';
		// }

		function progress() {
			document.querySelector('.progress').innerHTML = '';

			let div = document.createElement('div');
			div.style.height = '5px';
			div.style.width = '0px';
			div.style.position = 'absolute';
			div.style.left = '0';
			div.style.top = '0';
			div.style.backgroundColor = '#fff';
			div.style.zIndex = '22px';
			div.id = 'progress';
			div.style.animation = 'progress ' + duration / 1000 + 's linear';
			document.querySelector('.progress').appendChild(div);
		}

		function autoSlide() {
			slide('next');
		}

		let timer = setInterval(autoSlide, duration);

		// slideInfo();
		progress();
	}, []);

	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [isInView, controls]);

	useEffect(() => {
		setTimeout(() => {
			setShowImg(false);
		}, 9000);
	}, [setShowImg]);

	return (
		<Styles.SliderContainer>
			<Styles.Slider className='slider'>
				<Styles.SliderItems className='slider-items'>
					<Styles.Item className='item active'>
						{/* <Styles.Img className='img' slider='slider1'></Styles.Img>
						<Styles.Caption className='caption'>
							<Styles.Text className='text'>
								<h1>Headline Goes Here</h1>
								<p>Some dummy text goes here...</p>
							</Styles.Text>
						</Styles.Caption> */}
						<CarouselWrapper>
							<CarouselInfo
								initial={{ x: '-1000px', opacity: 0 }}
								animate={{ x: '0px', opacity: 1 }}
								transition={{
									speed: 0.2,
									type: 'spring',
									stiffness: 5,
								}}>
								<FadeInAlways direction='right' delay={0.1}>
									<h2>Powering Energy with Precision</h2>
								</FadeInAlways>
								<FadeInAlways direction='right' delay={0.3}>
									<p>
										At Joshcalebwill, we deliver reliable oil & gas rig
										solutions built on safety, innovation, and efficiency. From
										rig construction to maintenance, our expertise keeps energy
										flowing sustainably.
									</p>
								</FadeInAlways>
							</CarouselInfo>
							<CarouselImg
								ref={ref}
								initial={{ x: '1000px', opacity: 0 }}
								animate={{ x: '0px', opacity: 1 }}
								transition={{
									speed: 0.2,
									type: 'spring',
									stiffness: 5,
								}}>
								<>
									{/* <motion.img
										src={pix1}
										alt=''
										exit={{ y: '1000px', opacity: 0, scale: 0 }}
										transition={{
											speed: 0.5,
											type: 'spring',
											stiffness: 5,
											duration: 10,
										}}
									/> */}
									<AnimatePresence>
										{showImg && (
											<motion.img
												src={pix2}
												alt=''
												exit={{ y: '1000px', opacity: 0, scale: 0 }}
												transition={{
													speed: 0.5,
													type: 'spring',
													stiffness: 5,
													duration: 10,
												}}
											/>
										)}
									</AnimatePresence>
								</>
							</CarouselImg>
						</CarouselWrapper>
					</Styles.Item>
					<Styles.Item className='item'>
						<Styles.Img className='img' slider='slider2'>
							<img src={importPix} alt='' />
						</Styles.Img>
						<Styles.Caption className='caption'>
							<Styles.Text className='text'>
								<h1>Headline Goes Here</h1>
								<p>Some dummy text goes here...</p>
							</Styles.Text>
						</Styles.Caption>
					</Styles.Item>
					<Styles.Item className='item'>
						<Styles.Img className='img' slider='slider3'></Styles.Img>
						<Styles.Caption className='caption'>
							<Styles.Text className='text'>
								<h1>Headline Goes Here</h1>
								<p>Some dummy text goes here...</p>
							</Styles.Text>
						</Styles.Caption>
					</Styles.Item>
					<Styles.Item className='item'>
						<Styles.Img className='img' slider='slider4'></Styles.Img>
						<Styles.Caption className='caption'>
							<Styles.Text className='text'>
								<h1>Headline Goes Here</h1>
								<p>Some dummy text goes here...</p>
							</Styles.Text>
						</Styles.Caption>
					</Styles.Item>
					{/* <Styles.Item className='item'>
            <Styles.Img className='img' slider='slider5'></Styles.Img>
            <Styles.Caption className='caption'>
              <Styles.Text className='text'>
                <h1>Headline Goes Here</h1>
                <p>Some dummy text goes here...</p>
              </Styles.Text>
            </Styles.Caption>
          </Styles.Item> */}
				</Styles.SliderItems>
				<Styles.Controls>
					<div className='prev'>
						<FaArrowAltCircleLeft />
					</div>
					<div className='next'>
						<FaArrowAltCircleRight />
					</div>
				</Styles.Controls>

				{/* <Styles.SlideInfo className='slide-info'>
					<div className='meter'>
						<div className='inner'></div>
					</div>
					<div className='number'></div>
				</Styles.SlideInfo> */}

				<Styles.Progress className='progress'></Styles.Progress>
			</Styles.Slider>
		</Styles.SliderContainer>
	);
};

export default NewSlider;
