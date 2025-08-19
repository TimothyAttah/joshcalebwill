import sliderPix1 from '../../assets/heroImports.jpg';
import sliderPix2 from '../../assets/heroTeamwork2.jpg';
import sliderPix3 from '../../assets/heroPipeline.jpg';
import sliderPix4 from '../../assets/heroProcurement.jpg';
import sliderPix5 from '../../assets/heroRig.mp4';
import * as Styles from './NewSliderItemsStyles';
import { AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect } from 'react';

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
					<Styles.SliderItemContentWrapper>
						<Styles.NewSliderItemContent>
							<div>
								<h1>Offshore Oil & Gas Rig</h1>
								<p>Safe.Reliable.Sustainable</p>
							</div>
							<p>
								At Joshcalebwill, we specialize in supporting offshore oil and
								gas operations with safe, efficient, and reliable services. Our
								expertise spans from rig setup and maintenance to supply chain
								support and safety management. With a commitment to innovation
								and global best practices, we ensure that offshore projects are
								executed with precision, minimizing downtime and maximizing
								productivity.
							</p>
						</Styles.NewSliderItemContent>
					</Styles.SliderItemContentWrapper>
				</Styles.Item>

				<Styles.Item className='item'>
					<img src={sliderPix4} alt='' />
					<Styles.SliderItemContentWrapper>
						<Styles.NewSliderItemContent>
							<div>
								<h1>Procurement</h1>
								{/* <p>Safe.Reliable.Sustainable</p> */}
							</div>
							<p>
								At Joshcalebwill, we specialize in supporting offshore oil and
								gas operations with safe, efficient, and reliable services. Our
								expertise spans from rig setup and maintenance to supply chain
								support and safety management. With a commitment to innovation
								and global best practices, we ensure that offshore projects are
								executed with precision, minimizing downtime and maximizing
								productivity.
							</p>
						</Styles.NewSliderItemContent>
					</Styles.SliderItemContentWrapper>
				</Styles.Item>

				<Styles.Item className='item'>
					<img src={sliderPix3} alt='' />
					<Styles.SliderItemContentWrapper>
						<Styles.NewSliderItemContent>
							<div>
								<h1>PIPELINE CONSTRUCTION AND MAINTENANCE:</h1>
								{/* <p>Safe.Reliable.Sustainable</p> */}
							</div>
							<p>
								We provide corrosion-free oil, water and gas pipeline
								construction, maintenance, fabrications and procurement
								services. We do Well-head Valves maintenance services.
							</p>
						</Styles.NewSliderItemContent>
					</Styles.SliderItemContentWrapper>
				</Styles.Item>

				<Styles.Item className='item'>
					<img src={sliderPix2} alt='' />
					<Styles.SliderItemContentWrapper>
						<Styles.NewSliderItemContent>
							<div>
								<h1>Teamwork</h1>
								<p>Safe.Reliable.Sustainable</p>
							</div>
							<p>
								At Joshcalebwill, we specialize in supporting offshore oil and
								gas operations with safe, efficient, and reliable services. Our
								expertise spans from rig setup and maintenance to supply chain
								support and safety management. With a commitment to innovation
								and global best practices, we ensure that offshore projects are
								executed with precision, minimizing downtime and maximizing
								productivity.
							</p>
						</Styles.NewSliderItemContent>
					</Styles.SliderItemContentWrapper>
				</Styles.Item>

				<Styles.Item className='item'>
					<img src={sliderPix1} alt='' />
					<Styles.SliderItemContentWrapper>
						<Styles.NewSliderItemContent>
							<div>
								<h1>Importation and exportation Services</h1>
								<p>Safe.Reliable.Sustainable</p>
							</div>
							<p>
								At Joshcalebwill, we specialize in supporting offshore oil and
								gas operations with safe, efficient, and reliable services. Our
								expertise spans from rig setup and maintenance to supply chain
								support and safety management. With a commitment to innovation
								and global best practices, we ensure that offshore projects are
								executed with precision, minimizing downtime and maximizing
								productivity.
							</p>
						</Styles.NewSliderItemContent>
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
