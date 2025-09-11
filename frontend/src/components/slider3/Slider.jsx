import React, { useState, useEffect, useCallback } from 'react';
import { DotButton, PrevButton, NextButton } from './EmblaCarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
import { slides } from './sliderData';
import Autoplay from 'embla-carousel-autoplay';
import * as Styles from './SliderStyles';
import { Link } from 'react-router-dom';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

const EmblaCarousel = () => {
	const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 7000 }),
	]);
	// const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	// const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const scrollTo = useCallback(
		(index) => embla && embla.scrollTo(index),
		[embla],
	);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setSelectedIndex(embla.selectedScrollSnap());
		// setPrevBtnEnabled(embla.canScrollPrev());
		// setNextBtnEnabled(embla.canScrollNext());
	}, [embla, setSelectedIndex]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		setScrollSnaps(embla.scrollSnapList());
		embla.on('select', onSelect);
	}, [embla, setScrollSnaps, onSelect]);

	return (
		<>
			<div className='embla' ref={viewportRef}>
				<div className='embla__container'>
					{slides.map((slide, index) => (
						<Styles.Slide className='embla__slide' key={ index }>
							<Styles.SliderOverlay/>
							<video src={slide.vic} autoPlay muted loop playsInline />
							<Styles.SlideContent>
								<FadeInAlways
									delay={0.4}
									direction={
										slide.slidePosition === 'slide1'
											? 'down'
											: slide.slidePosition === 'slide3'
											? 'up'
											: 'right'
									}>
									<FadeInAlways delay={0.2} direction='left'>
										<h2>{slide.title}</h2>
									</FadeInAlways>
									<FadeInAlways delay={0.4} direction='left'>
										<h5>{slide.subtitle}</h5>
									</FadeInAlways>
									<FadeInAlways delay={0.6} direction='left'>
										<p>{slide.desc}</p>
									</FadeInAlways>
									<FadeInAlways delay={0.8} direction='left'>
										<Link>Who we are</Link>
									</FadeInAlways>
								</FadeInAlways>
							</Styles.SlideContent>
						</Styles.Slide>
					))}
				</div>

				{/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
				<NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
				<div className='embla__dots'>
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							selected={index === selectedIndex}
							onClick={() => scrollTo(index)}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default EmblaCarousel;
