import React, { useEffect,useState } from 'react';
import './slider.css';
import { slidesData } from './sliderData';
import ReactPlayer from 'react-player'
import { AnimatePresence, motion } from 'framer-motion'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
	const [duration, setDuration] = useState(slidesData[0]?.duration);
	const [secondsLeft, setSecondsLeft] = useState(slidesData[0]?.duration);

	useEffect(() => {
		const interval = setInterval(() => {
			setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);

		return () => clearInterval(interval);
	}, [duration]);

	 useEffect(() => {
			const interval = setInterval(() => {
				setCurrentIndex((prevIndex) => {
					const newIndex = prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1;
					setDuration(slidesData[newIndex]?.duration);
					setSecondsLeft(slidesData[newIndex]?.duration);
					// playerRefs.current.forEach((player, index) => {
					// 	if (player && player.getInternalPlayer()) {
					// 		try {
					// 			if (newIndex === index) {
					// 				player.seekTo(0);
					// 				player.getInternalPlayer().playVideo();
					// 			}
					// 			player.getInternalPlayer().pauseVideo();
					// 		} catch (error) {
					// 			console.error('YouTube player error: ', error);
					// 		}
					// 	}
					// });
					return newIndex;
				});
			}, duration * 1000 + 1000);

			return () => clearInterval(interval);
		}, [duration, currentIndex]);

	const progressBarWidth = `${(secondsLeft / duration) * 100}%`;

	 const handlePrev = () => {
			setCurrentIndex((prevIndex) => {
				const newIndex = prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1;
				setDuration(slidesData[newIndex]?.duration);
				setSecondsLeft(slidesData[newIndex]?.duration);
				// playerRefs.current.forEach((player, index) => {
				// 	if (player && player.getInternalPlayer()) {
				// 		try {
				// 			if (newIndex === index) {
				// 				player.seekTo(0);
				// 				player.getInternalPlayer().playVideo();
				// 			}
				// 			player.getInternalPlayer().pauseVideo();
				// 		} catch (error) {
				// 			console.error('YouTube player error: ', error);
				// 		}
				// 	}
				// });
				return newIndex;
			});
		};

	  const handleNext = () => {
			setCurrentIndex((prevIndex) => {
				const newIndex = prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1;
				setDuration(slidesData[newIndex]?.duration);
				setSecondsLeft(slidesData[newIndex]?.duration);
				// playerRefs.current.forEach((player, index) => {
				// 	if (player && player.getInternalPlayer()) {
				// 		try {
				// 			if (newIndex === index) {
				// 				player.seekTo(0);
				// 				player.getInternalPlayer().playVideo();
				// 			}
				// 			player.getInternalPlayer().pauseVideo();
				// 		} catch (error) {
				// 			console.error('YouTube player error: ', error);
				// 		}
				// 	}
				// });
				return newIndex;
			});
		};



	return (
		<div className='carousel-container'>
			<div className='carousel-images'>
				<div className='current-img-div'>
					{slidesData.map((slide, index) => (
						<div
							className='current-image'
							style={{
								transform: `translateX(-${
									(currentIndex !== 0 && currentIndex) * 100
								}%)`,
							}}>
							{slide.mediaType === 'image' ? (
								<img src={slide.url} loading='lazy' />
							) : (
								<div className='video-container'>
									<ReactPlayer url={slide.url} />
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className='carousel-content'>
				{slidesData.map((slide, index) => (
					<React.Fragment key={slide.id}>
						{index === currentIndex && (
							<>
								<AnimatePresence>
									<motion.div
										className='main-content'
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{
											duration: 0.5,
											delay: 0.3,
											ease: 'easeInOut',
										}}
										exit={{ opacity: 0 }}>
										<h2 className='name'>{slide.slideTitle}</h2>
										<div className='subtitle'>{slide.slideSubtitle}</div>
										<p className='description'>{slide.sliderDesc}</p>
									</motion.div>
								</AnimatePresence>
								<div className='secondary-content'>
									<div className='back-and-next-container'>
										<div className='back' onClick={handlePrev}>
											<FaChevronLeft />
										</div>

										{/* <div className='indicator'>{`${currentIndex + 1} of ${
											slidesData.length
										}`}</div> */}
										<div className='progress-container'>
											<div
												key={slide.id}
												className='progress-bar'
												style={{ width: progressBarWidth }}></div>
										</div>

										<div className='next' onClick={handleNext}>
											<FaChevronRight />
										</div>
									</div>
								</div>
							</>
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Slider;
