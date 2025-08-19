import React, { useEffect, useState } from 'react';
import video from '../../assets/heroRig.mp4';
import * as Styles from './NewSliderStyles';
import { slidesData } from './sliderItems';
import { AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NewSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [duration, setDuration] = useState(slidesData[0].duration);
	const [secondsLeft, setSecondsLeft] = useState(slidesData[0].duration);

	useEffect(() => {
		const interval = setInterval(() => {
			// setSecondsLeft(secondsLeft - 1);
			setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);

		return () => clearInterval(interval);
	}, [duration]);

	const progressBarWidth = `${(secondsLeft / duration) * 100}%`;

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => {
			const newIndex = prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1;
			setDuration(slidesData[newIndex].duration);
			setSecondsLeft(slidesData[newIndex].duration);

			return newIndex;
		});
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => {
			const newIndex = prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1;
			setDuration(slidesData[newIndex].duration);
			setSecondsLeft(slidesData[newIndex].duration);

			return newIndex;
		});
	};
	return (
		<Styles.NewSliderMainContainer className='ca-container'>
			<Styles.NewSliderContainer className='ca-images'>
				<Styles.CurrentImagesDiv className='current-img-div'>
					{slidesData.map((item, index) => (

							<Styles.NewSliderUrlWrapper
								style={{
									transform: `translateX(-${
										(currentIndex !== 0 && currentIndex) * 100
									}%)`,
								}}
								className='current-image'>
								{item.mediaType === 'video' ? (
									<>
										<Styles.NewSliderVideo src={item.url} autoPlay muted loop playsInline playing={currentIndex === index} />
										<Styles.NewSliderItemOverlay />
									</>
								) : (
									<>
										<img src={item.url} alt='' loading='lazy' />
									</>
								)}
							</Styles.NewSliderUrlWrapper>

					))}
				</Styles.CurrentImagesDiv>
			</Styles.NewSliderContainer>
			<Styles.NewSliderItemContentWrapper>
				{slidesData.map((item, index) => (
					<>
						{index === currentIndex && (
							<>
								<AnimatePresence>
									<Styles.NewSliderItemContent>
										<div>
											<h1>{item.slideTitle}</h1>
											<h4>{item.slideSubtitle}</h4>
										</div>
										<p>{item.sliderDesc}</p>
										<Styles.ProgressBar>
											<div style={{ width: progressBarWidth }}></div>
										</Styles.ProgressBar>
									</Styles.NewSliderItemContent>
								</AnimatePresence>

								<Styles.Controls>
									<Styles.ControlsButtons>
										<div className='back' onClick={handlePrev}>
											<FaChevronLeft />
										</div>
										<div className='indicator'>
											{`${currentIndex + 1} of ${slidesData.length}`}
										</div>
										<div className='next' onClick={handleNext}>
											<FaChevronRight />
										</div>
									</Styles.ControlsButtons>
								</Styles.Controls>
							</>
						)}
					</>
				))}
			</Styles.NewSliderItemContentWrapper>
		</Styles.NewSliderMainContainer>
	);
};

export default NewSlider;
