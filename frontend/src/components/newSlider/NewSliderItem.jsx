import sliderPix1 from '../../assets/heroImports.jpg';
import sliderPix2 from '../../assets/heroTeamwork2.jpg';
import sliderPix3 from '../../assets/heroPipeline.jpg';
import sliderPix4 from '../../assets/heroProcurement.jpg';
import sliderPix5 from '../../assets/heroRig.mp4';
import sliderPix6 from '../../assets/procurement6.mp4';

import * as Styles from './NewSliderItemsStyles';
import { AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

const NewSliderItem = () => {
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
			div.style.backgroundColor = 'red';
			div.style.zIndex = '999px';
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

	return (
		<Styles.Slider className='slider'>
			<Styles.SliderItems className='slider-items'>
				<Styles.Item className='item active'>
					<Styles.NewSliderVideo src={sliderPix5} autoPlay muted loop />
					<Styles.SliderOverlay />
					<Styles.SliderItemContentWrapper>
						<FadeInAlways delay={0.2} direction='up'>
							<Styles.NewSliderItemContent>
								<div>
									<FadeInAlways delay={0.2} direction='left'>
										<h1>Offshore Oil & Gas Rig</h1>
									</FadeInAlways>
									<FadeInAlways delay={0.4} direction='left'>
										<h4>Safe.Reliable.Sustainable</h4>
									</FadeInAlways>
								</div>
								<FadeInAlways delay={0.6} direction='left'>
									<p>
										At Joshcalebwill, we specialize in supporting offshore oil
										and gas operations with safe, efficient, and reliable
										services. Our expertise spans from rig setup and maintenance
										to supply chain support and safety management. With a
										commitment to innovation and global best practices, we
										ensure that offshore projects are executed with precision,
										minimizing downtime and maximizing productivity.
									</p>
								</FadeInAlways>
							</Styles.NewSliderItemContent>
						</FadeInAlways>
					</Styles.SliderItemContentWrapper>
				</Styles.Item>

				<Styles.Item className='item'>
					<img src={sliderPix1} alt='' loading='lazy' />
					<Styles.SliderOverlay />

					<Styles.SliderItemContentWrapper>
						<FadeInAlways delay={0.2} direction='up'>
							<Styles.NewSliderItemContent>
								<div>
									<FadeInAlways delay={0.3} direction='right'>
										<h1>🌍 Importation & Exportation Services</h1>
									</FadeInAlways>
									<FadeInAlways delay={0.5} direction='right'>
										<h4>
											Fast. Secure. Global. Your trusted partner in
											international trade.
										</h4>
									</FadeInAlways>
								</div>
								<FadeInAlways delay={0.7} direction='right'>
									<p>
										Expand your reach with
										<span>
											Joshcalebwill’s Importation & Exportation Services
										</span>
										. We bridge businesses to global markets with seamless
										logistics, trusted sourcing, and end-to-end trade solutions.
										From customs compliance to on-time delivery, we make
										international trade smooth, secure, and profitable
									</p>
								</FadeInAlways>
							</Styles.NewSliderItemContent>
						</FadeInAlways>
					</Styles.SliderItemContentWrapper>
				</Styles.Item>

				<Styles.Item className='item'>
					<Styles.NewSliderVideo src={sliderPix6} autoPlay muted loop />
					<Styles.SliderOverlay />

					<Styles.SliderItemContentWrapper>
						<FadeInAlways delay={0.2} direction='left'>
							<Styles.NewSliderItemContent>
								<div>
									<FadeInAlways delay={0.3} direction='up'>
										<h1>Procurement Solutions</h1>
									</FadeInAlways>

									<FadeInAlways delay={0.5} direction='up'>
										<h4>
											Seamless sourcing. Trusted delivery. Cost-effective
											results.
										</h4>
									</FadeInAlways>
								</div>
								<FadeInAlways delay={0.7} direction='up'>
									<p>
										At Joshcalebwill, we simplify procurement by ensuring
										reliable sourcing, transparent processes, and timely
										delivery of essential oil & gas materials and industrial
										equipment.
									</p>
								</FadeInAlways>

								<FadeInAlways delay={0.9} direction='up'>
									<Link to='/what-we-do/procurement-solutions'>
										Get Started with Procurement
									</Link>
								</FadeInAlways>
							</Styles.NewSliderItemContent>
						</FadeInAlways>
					</Styles.SliderItemContentWrapper>
				</Styles.Item>

				<Styles.Item className='item'>
					<img src={sliderPix2} alt='' loading='lazy' />
					<Styles.SliderOverlay />

					<Styles.SliderItemContentWrapper>
						<FadeInAlways delay={0.2} direction='right'>
							<Styles.NewSliderItemContent>
								<div>
									<FadeInAlways delay={0.3} direction='down'>
										<h1>Teamwork</h1>
									</FadeInAlways>
									{/* <p>Safe.Reliable.Sustainable</p> */}
								</div>
								<FadeInAlways delay={0.5} direction='down'>
									<p>
										At Joshcalebwill, teamwork is the driving force behind every
										successful project. Our people work seamlessly across
										disciplines, combining technical expertise with strategic
										insight to deliver solutions that meet the highest industry
										standards. Through collaboration and shared accountability,
										we ensure efficiency, innovation, and excellence in
										everything we do.
									</p>
								</FadeInAlways>
							</Styles.NewSliderItemContent>
						</FadeInAlways>
					</Styles.SliderItemContentWrapper>
				</Styles.Item>
				<Styles.Item className='item'>
					<img src={sliderPix3} alt='' loading='lazy' />
					<Styles.SliderOverlay />

					<Styles.SliderItemContentWrapper>
						<FadeInAlways delay={0.2} direction='down'>
							<Styles.NewSliderItemContent>
								<div>
									<FadeInAlways delay={0.3} direction='left'>
										<h1>Pipeline Construction & Maintenance</h1>
									</FadeInAlways>
									<FadeInAlways delay={0.5} direction='left'>
										<h4>
											Building reliability. Sustaining flow. Ensuring safety.
										</h4>
									</FadeInAlways>
								</div>
								<FadeInAlways delay={0.7} direction='left'>
									<p>
										We specialize in the construction, inspection, and
										maintenance of pipelines that power industries and
										communities. With a focus on safety, efficiency, and
										long-term reliability, our team ensures every project meets
										the highest engineering and environmental standards.
									</p>
								</FadeInAlways>
								<FadeInAlways delay={0.9} direction='left'>
									<Link to='/what-we-do/pipeline-construction-and-maintenance'>
										Discover Our Services
									</Link>
								</FadeInAlways>
							</Styles.NewSliderItemContent>
						</FadeInAlways>
					</Styles.SliderItemContentWrapper>
				</Styles.Item>
			</Styles.SliderItems>

			<Styles.Controls>
				<div className='prev'>
					<FaChevronLeft />
				</div>
				<div className='next'>
					<FaChevronRight />
				</div>
			</Styles.Controls>
			<Styles.Progress className='progress'></Styles.Progress>
		</Styles.Slider>
	);
};

export default NewSliderItem;
