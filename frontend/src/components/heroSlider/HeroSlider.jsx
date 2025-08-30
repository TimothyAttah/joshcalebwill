import Slider from 'react-slick';
import * as Styles from './HeroSliderStyles';
import { Link } from 'react-router-dom';
import pix1 from '../../assets/slide2.jpg'

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const HeroSlider = () => {
	const animation = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.4,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				x: 0,
				y: 0,
				transition: {
					duration: 1.25,
					type: 'tween',
					delay: delay,
					ease: [0.25, 0.25, 0.25, 0.75],
				},
			});
		}

		if (!inView) {
			animation.start({
				opacity: 0,
				x: direction === 'right' ? -100 : direction === 'left' ? 100 : 0,
				y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
			});
		}
	}, [inView, animation, delay, direction]);



	return (
		<Styles.Slider className='slider'>
			<Styles.SliderItems className='slider-items'>
				<Styles.Item className='item'>
					<Styles.Slide1>
						<Styles.SlideItem>
							<Styles.SlideItemInfo>
								<h1>Offshore Oil & Gas Rig</h1>
								<h4>Safe.Reliable.Sustainable</h4>
								<p>
									At Joshcalebwill, we specialize in supporting offshore oil and
									gas operations with safe, efficient, and reliable services.
									Our expertise spans from rig setup and maintenance to supply
									chain support and safety management. With a commitment to
									innovation and global best practices, we ensure that offshore
									projects are executed with precision, minimizing downtime and
									maximizing productivity.
								</p>
								<Link>Explore more</Link>
							</Styles.SlideItemInfo>
							<Styles.SlideItemImg>
								<img src={pix1} alt='' />
							</Styles.SlideItemImg>
						</Styles.SlideItem>
					</Styles.Slide1>
				</Styles.Item>
				<Styles.Item className='item'>
					<Styles.Slide2></Styles.Slide2>
				</Styles.Item>
				<Styles.Item className='item'>
					<Styles.Slide3></Styles.Slide3>
				</Styles.Item>
				<Styles.Item className='item'>
					<Styles.Slide4></Styles.Slide4>
				</Styles.Item>
				<Styles.Item className='item'>
					<Styles.Slide5>
						<Styles.SlideItem>
							<Styles.SlideItemInfo>
								<h1>Offshore Oil & Gas Rig</h1>
								<h4>Safe.Reliable.Sustainable</h4>
								<p>
									At Joshcalebwill, we specialize in supporting offshore oil and
									gas operations with safe, efficient, and reliable services.
									Our expertise spans from rig setup and maintenance to supply
									chain support and safety management. With a commitment to
									innovation and global best practices, we ensure that offshore
									projects are executed with precision, minimizing downtime and
									maximizing productivity.
								</p>
								<Link>Explore more</Link>
							</Styles.SlideItemInfo>
							<Styles.SlideItemImg>
								<img src={pix1} alt='' />
							</Styles.SlideItemImg>
						</Styles.SlideItem>
					</Styles.Slide5>
				</Styles.Item>
			</Styles.SliderItems>
		</Styles.Slider>
	);
};

export default HeroSlider;
