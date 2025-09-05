import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import * as Styles from './SliderStyles';
import { FadeInAlways } from '../fadeIn/FadeInAlways';

const Slider = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
	// const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	return (
		<div className='embla' ref={emblaRef}>
			<div className='embla__container'>
				<Styles.Slide slide1 className='embla__slide'>
					<Styles.SlideContent>
						<div>
							<h1>
								Energy for today <br />
								Energy for tomorrow
							</h1>
						</div>
						<div>
							<Link>who we are</Link>
						</div>
					</Styles.SlideContent>
				</Styles.Slide>
				<Styles.Slide slide2 className='embla__slide'>
					<Styles.SlideContent>
						<div>
							<h1>Economic and Social Development</h1>
							<p>
								Ultimately, our goal is to help our host communities prosper and
								drive social development through various initiatives and service
								offerings
							</p>
						</div>

						<div>
							<Link>who we are</Link>
						</div>
					</Styles.SlideContent>
				</Styles.Slide>
				<Styles.Slide slide3 className='embla__slide'>
					<Styles.SlideContent>
						<div>
							<h1>Top Energy</h1>
							<p>
								We are committed to making energy available and accessible to
								all.
							</p>
						</div>

						<div>
							<Link>who we are</Link>
						</div>
					</Styles.SlideContent>
				</Styles.Slide>
				<Styles.Slide slide4 className='embla__slide'>
					<Styles.SlideContent>
						<div>
							<h1>Energy efficiency and sustainability</h1>
							<p>
								We are constantly innovating to be your company of choice for
								optimal and sustainable energy supply.
							</p>
						</div>

						<div>
							<Link>who we are</Link>
						</div>
					</Styles.SlideContent>
				</Styles.Slide>
				<Styles.Slide slide2 className='embla__slide'>
					<Styles.SlideContent>
						<div>
							<h1>Repositioned for customer focus</h1>
							<p>
								We maintain our market leadership in innovation and supply while
								delivering value to our shareholders.
							</p>
						</div>

						<div>
							<Link>who we are</Link>
						</div>
					</Styles.SlideContent>
				</Styles.Slide>
			</div>
		</div>
	);
};

export default Slider;
