import * as Styles from './SecondServicesStyles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import welcomePix1 from '../../../assets/import2.jpg';
import welcomePix2 from '../../../assets/welcome-2.jpg';

import pix1 from '../../../assets/Picture4.png';
import pix2 from '../../../assets/Picture1.png';
import pix3 from '../../../assets/Picture3.png';
import pix5 from '../../../assets/Picture5.png';
import pix6 from '../../../assets/Picture6.png';
import { AnimatedCopy } from '../../../components/AnimatedCopy';
import { FadeInAlways } from '../../../components/fadeIn/FadeInAlways';

const SecondServices = () => {
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.from('.img-1', {
			x: 1200,
			stagger: {
				amount: 0.4,
			},
			scrollTrigger: {
				trigger: '.imgs-container',
				// start: 0,
				scrub: true,
			},
		});
	});
	return (
		<Styles.SecondServiceContainer>
			<Styles.SecondServiceWrapper>
				<AnimatedCopy>
					<Styles.SecondServiceContentsBox className='content-wrapper'>
						<div className='title'>
							<FadeInAlways delay={0.1} direction='down'>
								<small>JOSHCALEB WILL PETROLEUM LIMITED</small>
							</FadeInAlways>
							<FadeInAlways delay={0.2} direction='up'>
								<h2>We are a Leading Petroluem Company in Nigeria</h2>
							</FadeInAlways>
						</div>
						<div className='contents'>
							<FadeInAlways delay={0.3} direction='down'>
								<p>
									we believe that humanity can solve any challenge. that our
									greatest resource is our people. and that responsibility,
									trust and integrity will help us drive a prosperous future.
								</p>
							</FadeInAlways>
							<FadeInAlways delay={0.4} direction='down'>
								<p>
									With our experienced professionals and strategic global
									partners, JOSHCALEBWIL PETROLEUM LIMITED is committed to
									client satisfaction and quality performance which guarantees
									our clients’ confidence in the oil and gas business every step
									of the way.
								</p>
							</FadeInAlways>
						</div>
					</Styles.SecondServiceContentsBox>
				</AnimatedCopy>

				<Styles.SecondServiceImgsContainer className='imgs-container'>
					<Styles.SecondServiceImgBox className='intro-img-box'>
						<FadeInAlways delay={0.5} direction='down'>
							<Styles.ImgBox className='img-box'>
								<img src={welcomePix1} alt='' loading='lazy' />
							</Styles.ImgBox>
						</FadeInAlways>
						<FadeInAlways delay={0.6} direction='down'>
							<p>petroleum products importation</p>
						</FadeInAlways>
					</Styles.SecondServiceImgBox>

					<Styles.SecondServiceImgBox className='intro-img-box'>
						<FadeInAlways delay={0.5} direction='down'>
							<Styles.ImgBox className='img-box'>
								<img src={welcomePix2} alt='' loading='lazy' />
							</Styles.ImgBox>
						</FadeInAlways>
						<FadeInAlways delay={0.6} direction='down'>
							<p>petroleum products marketing</p>
						</FadeInAlways>
					</Styles.SecondServiceImgBox>
				</Styles.SecondServiceImgsContainer>
			</Styles.SecondServiceWrapper>
			<Styles.SecondServiceGalleyContainer>
				<Styles.SecondServiceGalleyImgWrapper>
					<Styles.SecondServiceGalleyDetailWrapper>
						<FadeInAlways delay={0.6} direction='left'>
							<h1> Rehabilitation of production facility</h1>
						</FadeInAlways>
					</Styles.SecondServiceGalleyDetailWrapper>
					<Styles.SecondServiceGalleyImgContainer>
						<FadeInAlways delay={0.7} direction='right'>
							<img src={pix1} alt='' loading='lazy' />
						</FadeInAlways>
						<FadeInAlways delay={0.8} direction='right'>
							<img src={pix2} alt='' loading='lazy' />
						</FadeInAlways>
					</Styles.SecondServiceGalleyImgContainer>
				</Styles.SecondServiceGalleyImgWrapper>
				<Styles.SecondServiceGalleyImgWrapper primary='true'>
					<Styles.SecondServiceGalleyDetailWrapper>
						<FadeInAlways delay={0.6} direction='right'>
							<h1> Ongoing construction of Buoy</h1>
						</FadeInAlways>
					</Styles.SecondServiceGalleyDetailWrapper>
					<Styles.SecondServiceGalleyImgContainer>
						<FadeInAlways delay={0.7} direction='left'>
							<img src={pix3} alt='' />
						</FadeInAlways>
						<FadeInAlways delay={0.8} direction='left'>
							<img src={pix5} alt='' />
						</FadeInAlways>
					</Styles.SecondServiceGalleyImgContainer>
				</Styles.SecondServiceGalleyImgWrapper>
			</Styles.SecondServiceGalleyContainer>
		</Styles.SecondServiceContainer>
	);
};

export default SecondServices;
