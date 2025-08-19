import { useEffect, useRef, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import * as Styles from './LastestSliderStyles';
import { SliderData } from './latestSliderData';
import pix1 from '../../assets/offshore2.jpg';
// import pix1 from '../../assets/chemical1.jpg';

import pix2 from '../../assets/maintain2.jpg';
import pix3 from '../../assets/pix-4.jpg';
import pix4 from '../../assets/healthService3.jpg';
import pix5 from '../../assets/pipe3.jpg';
import {
	AnimatePresence,
	easeInOut,
	motion,
	useAnimation,
	useInView,
} from 'framer-motion';
import { SlideRight } from './animationEffects';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

const LastestSlider = () => {
	// const [activeData, setActiveData] = useState(SliderData[0]);
	// const [currentIndex, setCurrentIndex] = useState(0);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCurrentIndex((prevIndex) => (prevIndex + 1)) % SliderData.length;
	// 	}, 3000);

	// 	return () => clearInterval(interval);
	// }, [currentIndex]);

	// useEffect(() => {
	// 	setActiveData(SliderData[currentIndex]);
	// }, [currentIndex]);

	useEffect(() => {
		const slides = document.querySelector('.slider-items')?.children;
		const prev = document.querySelector('.prev');
		const next = document.querySelector('.next');
		const totalSlides = slides?.length;
		let index = 0;
		const duration = 10000;

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

		progress();
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

		ref = setInterval(() => {
			s;
		}, 3000);

		return () => clearInterval(ref);
	}, []);

	// useEffect(() => {
	//   setTimeout(() => {
	//     setShowImg(false);
	//   }, 9000);
	// }, [setShowImg]);

	return (
		<Styles.LastestSliderContainer>
			<Styles.Slider className='slider'>
				<Styles.SliderItems className='slider-items'>
					<Styles.Item className='item active'>
						<Styles.Img className='img' slider='slider1'>
							{/* <img src={pix1} alt='' /> */}
							<Styles.Caption className='caption'>
								<Styles.Text className='text'>
									<FadeInAlways delay={0.4} direction='down'>
										<div>
											<h1>Offshore Oil & Gas Rig</h1>
											<h4>Safe.Reliable.Sustainable</h4>
										</div>
										<p>
											At Joshcalebwill, we specialize in supporting offshore oil
											and gas operations with safe, efficient, and reliable
											services. Our expertise spans from rig setup and
											maintenance to supply chain support and safety management.
											With a commitment to innovation and global best practices,
											we ensure that offshore projects are executed with
											precision, minimizing downtime and maximizing
											productivity.
										</p>
									</FadeInAlways>
								</Styles.Text>
							</Styles.Caption>
							<Styles.CaptionImg>
								<FadeInAlways delay={0.6} direction='up' center='center'>
									<motion.img src={pix1} alt='' />
								</FadeInAlways>
							</Styles.CaptionImg>
						</Styles.Img>
					</Styles.Item>


					<Styles.Item className='item  '>
						<Styles.Img className='img' slider='slider2'>
							{/* <img src={pix1} alt='' /> */}
							<Styles.Caption className='caption'>
								<Styles.Text className='text'>
									<FadeInAlways delay={0.2} direction='left'>
										<div>
											<h1>EXPLORATION</h1>
											<p>
												We provide consultancy services in the area of upstream
												exploration and operations in crude oil, gas and mineral
												exploration and extraction and prospecting
											</p>
										</div>
									</FadeInAlways>
								</Styles.Text>
							</Styles.Caption>

							<Styles.CaptionImg>
								<FadeInAlways delay={0.4} direction='right'>
									<motion.img src={pix2} alt='' />
								</FadeInAlways>
							</Styles.CaptionImg>
						</Styles.Img>
					</Styles.Item>

					<Styles.Item className='item'>
						<Styles.Img className='img' slider='slider3'>
							{/* <img src={pix1} alt='' /> */}
							<Styles.Caption className='caption'>
								<Styles.Text className='text'>
									<FadeInAlways delay={0.2} direction='left'>
										<div>
											<h1>GAS COMPRESSION SERVICES</h1>
											<h4>
												Powering Efficiency. Driving Efficiency. Ensuring Flow.
											</h4>
										</div>
										<p>
											At Joshcalebwill, our Gas Compression Services ensure
											optimal pressure levels for the safe and efficient
											transport of natural gas. From design and installation to
											maintenance and upgrades, we provide end-to-end solutions
											that keep your operations running at peak performance.
										</p>
									</FadeInAlways>
								</Styles.Text>
							</Styles.Caption>
							<Styles.CaptionImg>
								<FadeInAlways delay={0.4} direction='right'>
									<img src={pix3} alt='' />
								</FadeInAlways>
							</Styles.CaptionImg>
						</Styles.Img>
					</Styles.Item>

					<Styles.Item className='item'>
						<Styles.Img className='img' slider='slider4'>
							{/* <img src={pix1} alt='' /> */}
							<Styles.Caption className='caption'>
								<Styles.Text className='text'>
									<FadeInAlways delay={0.4} direction='up'>
										<div>
											<h1>
												Health, Safety, and Environmental Assessment Consultancy
											</h1>
											<h4>Protecting People, Assets & Nature</h4>
										</div>
										<p>
											The oil and gas environment is a very volatile one, hence
											the need for consultancy services for organizations in the
											areas of Environment, Health and Safety for Workers and
											the Environment. We establish systems and policies that
											help in the safety and maintenance of oil and gas
											facility.
										</p>
									</FadeInAlways>
								</Styles.Text>
							</Styles.Caption>

							<Styles.CaptionImg>
								<FadeInAlways delay={0.4} direction='down'>
									<img src={pix4} alt='' />
								</FadeInAlways>
							</Styles.CaptionImg>
						</Styles.Img>
					</Styles.Item>

					

					{/* <Styles.Item className='item '>
						<Styles.Img className='img' slider='slider5'>

							<Styles.Caption className='caption'>
								<Styles.Text className='text'>
									<div>
										<h1>PIPELINE CONSTRUCTION AND MAINTENANCE:</h1>
										<p>
											We provide corrosion-free oil, water and gas pipeline
											construction, maintenance, fabrications and procurement
											services. We do Well-head Valves maintenance services.
										</p>
									</div>
								</Styles.Text>
							</Styles.Caption>
							<Styles.CaptionImg>
								<img src={pix5} alt='' />
							</Styles.CaptionImg>
						</Styles.Img>
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
		</Styles.LastestSliderContainer>
	);
};

export default LastestSlider;
