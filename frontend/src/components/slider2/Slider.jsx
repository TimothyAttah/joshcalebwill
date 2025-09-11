import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import * as Styles from './SliderStyles';
import { FadeInAlways } from '../fadeIn/FadeInAlways';
import slidePix7 from '../../assets/oil1.jpg';

const Slider = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 7000 }),
	]);
	// const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	return (
		<div className='embla' ref={emblaRef}>
			<div className='embla__container'>
				{/* <Styles.Slide slide1 className='embla__slide'>
					<>
						<Styles.SlideContentWrapper>
							<Styles.SlideContentImg>
								<img src={slidePix7} alt='' />
							</Styles.SlideContentImg>
							<Styles.SlideContentText>
								<h1>Powering Energy with Precision</h1>
								<p>
									At Joshcalebwill, we deliver reliable oil & gas rig solutions
									built on safety, innovation, and efficiency. From rig
									construction to maintenance, our expertise keeps energy
									flowing sustainably.
								</p>

								<div>
									<Link>who we are</Link>
								</div>
							</Styles.SlideContentText>
						</Styles.SlideContentWrapper>
					</>
				</Styles.Slide> */}
				<Styles.Slide slide1 className='embla__slide'>
					<FadeInAlways delay={0.5} direction='left'>
						<Styles.SlideContent>
							<div>
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
							</div>
							<div>
								<Link>who we are</Link>
							</div>
						</Styles.SlideContent>
					</FadeInAlways>
				</Styles.Slide>
				<Styles.Slide slide2 className='embla__slide'>
					<FadeInAlways delay={0.7} direction='left'>
						<Styles.SlideContent>
							<div>
								<h1>EXPLORATION</h1>
								<p>
									We provide consultancy services in the area of upstream
									exploration and operations in crude oil, gas and mineral
									exploration and extraction and prospecting
								</p>
							</div>

							<div>
								<Link>who we are</Link>
							</div>
						</Styles.SlideContent>
					</FadeInAlways>
				</Styles.Slide>
				<Styles.Slide slide3 className='embla__slide'>
					<FadeInAlways delay={0.5} direction='left'>
						<Styles.SlideContent>
							<div>
								<h1>GAS COMPRESSION SERVICES</h1>
								<h4>Powering Efficiency. Driving Efficiency. Ensuring Flow.</h4>
								<p>
									At Joshcalebwill, our Gas Compression Services ensure optimal
									pressure levels for the safe and efficient transport of
									natural gas. From design and installation to maintenance and
									upgrades, we provide end-to-end solutions that keep your
									operations running at peak performance.
								</p>
							</div>

							<div>
								<Link>who we are</Link>
							</div>
						</Styles.SlideContent>
					</FadeInAlways>
				</Styles.Slide>
				<Styles.Slide slide4 className='embla__slide'>
					<FadeInAlways delay={0.5} direction='left'>
						<Styles.SlideContent>
							<div>
								<h1>
									Health, Safety, and Environmental Assessment Consultancy
								</h1>
								<h4>Protecting People, Assets & Nature</h4>
								<p>
									The oil and gas environment is a very volatile one, hence the
									need for consultancy services for organizations in the areas
									of Environment, Health and Safety for Workers and the
									Environment. We establish systems and policies that help in
									the safety and maintenance of oil and gas facility.
								</p>
							</div>

							<div>
								<Link>who we are</Link>
							</div>
						</Styles.SlideContent>
					</FadeInAlways>
				</Styles.Slide>
				{/* <Styles.Slide slide2 className='embla__slide'>
					<FadeInAlways delay={0.5} direction='left'>
						<Styles.SlideContent>
							<div>
								<h1>Repositioned for customer focus</h1>
								<p>
									We maintain our market leadership in innovation and supply
									while delivering value to our shareholders.
								</p>
							</div>

							<div>
								<Link>who we are</Link>
							</div>
						</Styles.SlideContent>
					</FadeInAlways>
				</Styles.Slide> */}
			</div>
		</div>
	);
};

export default Slider;
