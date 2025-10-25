import * as Styles from './WhoWeAreStyles';
import wg1 from '../../assets/who3.png';
import wg2 from '../../assets/who4.png';
import wg3 from '../../assets/who5.png';
import wg4 from '../../assets/who6.png';
import wg5 from '../../assets/who7.png';
import wg6 from '../../assets/who8.png';
import visionLogo from '../../assets/visionLogo.png';
import pix1 from '../../assets/who9.png';
import pix2 from '../../assets/who10.png';
import pix3 from '../../assets/who11.png';
import { FadeInAlways } from '../../components/fadeIn/FadeInAlways';
import { FaCircle } from 'react-icons/fa';
import { ReactLenis } from 'lenis/react';
import Copy from '../../components/copyText/CopyText';
import LazyImage from '../../components/LazyImage';

const WhoWeAre = () => {
	return (
		<ReactLenis root>
			<Styles.WhoWeAreHero>
				<Styles.BlendModeTitle>who we are</Styles.BlendModeTitle>
			</Styles.WhoWeAreHero>
			<Styles.CultureInfo>
				<Copy delay={0.5}>
					<p>
						Energy drives human progress and creates positive change for modern
						society. We work hard to deliver energy that can improve the lives
						of millions of people around the world.
					</p>
				</Copy>
			</Styles.CultureInfo>
			<Styles.WhoWeAreContainer>
				<Styles.WhoWeAreInfoContainer>
					<Copy delay={0.7}>
						<h1>what we believe drives how we work</h1>
					</Copy>

					<Copy delay={0.9}>
						<p>
							Joshcalebwill Petroluem Limited is a dynamic and forward-thinking
							international energy company committed to driving excellence
							across the global oil and gas industry. With a steadfast
							dedication to innovation, reliability, and superior service
							delivery, we play a pivotal role in supporting the success and
							sustainability of the energy sector across its entire value chain.
						</p>
					</Copy>

					<Copy delay={0.9}>
						<p>
							At the core of our operations lies a comprehensive and integrated
							approach that spans the full spectrum of the oil and gas
							industry—from upstream exploration and production, through the
							midstream transportation and storage infrastructure, to downstream
							refining, distribution, and marketing. In addition, we bring
							specialized capabilities and strategic focus to the gas
							sub-sector, reinforcing our position as a versatile and dependable
							partner in the evolving energy landscape.
						</p>
					</Copy>

					<Copy delay={0.9}>
						<p>
							Our commitment goes beyond commercial success. Joshcalebwill
							Petroluem Limited stands as a symbol of operational integrity,
							technological advancement, and industry leadership. We are
							purpose-driven and solution-oriented, working collaboratively with
							clients, governments, and stakeholders to deliver value, enhance
							efficiency, and ensure long-term sustainability in all aspects of
							our engagements.
						</p>
					</Copy>
					<Copy delay={0.9}>
						<p>
							With a team of highly skilled professionals, cutting-edge
							technology, and a global perspective, we continuously strive to
							exceed expectations and contribute meaningfully to the growth and
							transformation of the energy sector. Whether navigating the
							challenges of exploration and production, optimizing logistics and
							infrastructure, or driving innovation in gas utilization,
							Joshcalebwill Petroluem Limited remains a trusted force committed
							to powering progress—responsibly and efficiently.
						</p>
					</Copy>
				</Styles.WhoWeAreInfoContainer>
				<Styles.WhoWeAreGallerryContainer>
					<Styles.WhoWeAreGallerryPixWrapper>
						<div className='pix pix1'>
							{/* <img src={wg1} alt='' /> */}
							<LazyImage src={wg1} />
						</div>
						<div className='pix pix2'>
							{/* <img src={wg2} alt='' /> */}
							<LazyImage src={wg2} />
						</div>
						<div className='pix pix3'>
							{/* <img src={wg3} alt='' /> */}
							<LazyImage src={wg3} />
						</div>
						<div className='pix pix4'>
							{/* <img src={wg4} alt='' /> */}
							<LazyImage src={wg4} />
						</div>
						<div className='pix pix5'>
							{/* <img src={wg5} alt='' /> */}
							<LazyImage src={wg5} />
						</div>
						<div className='pix pix6'>
							{/* <img src={wg6} alt='' /> */}
							<LazyImage src={wg6} />
						</div>
					</Styles.WhoWeAreGallerryPixWrapper>
				</Styles.WhoWeAreGallerryContainer>
			</Styles.WhoWeAreContainer>
			<Styles.WhoWeAreValuesContainer>
				<FadeInAlways delay={0.5} direction='down'>
					<Styles.WhoWeAreValuesPic>
						{/* <img src={visionLogo} alt='' loading='lazy' /> */}
						<LazyImage src={visionLogo} />
					</Styles.WhoWeAreValuesPic>
				</FadeInAlways>

				<Styles.WhoWeAreValuesBox>
					<FadeInAlways delay={0.5} direction='right'>
						<Styles.WhoWeAreValuesItem>
							<FadeInAlways delay={0.5} direction='up'>
								<Copy>
									<h4> Our Vision</h4>
								</Copy>
							</FadeInAlways>

							<FadeInAlways delay={0.6} direction='up'>
								<Styles.WhoWeAreValueImg>
									{/* <img src={pix1} alt='' /> */}
									<LazyImage src={pix1} />
								</Styles.WhoWeAreValueImg>
							</FadeInAlways>

							<FadeInAlways delay={0.7} direction='up'>
								<Copy>
									<p>
										Building long lasting relationships with clients by
										providing the best engineering service through the creation
										of system and models which ensures quality assurance, safety
										and satisfaction for our clients at all times.
									</p>
								</Copy>
							</FadeInAlways>
						</Styles.WhoWeAreValuesItem>
					</FadeInAlways>
					<FadeInAlways delay={0.7} direction='right'>
						<Styles.WhoWeAreValuesItem>
							<FadeInAlways delay={0.5} direction='up'>
								<Copy>
									<h4> Our Mission</h4>
								</Copy>
							</FadeInAlways>
							<FadeInAlways delay={0.6} direction='up'>
								<Styles.WhoWeAreValueImg>
									<LazyImage src={pix2} />
								</Styles.WhoWeAreValueImg>
							</FadeInAlways>
							<FadeInAlways delay={0.7} direction='up'>
								<Copy>
									<p>
										To be the first Choice in the Services we offer in the Oil &
										Gas Industry
									</p>
								</Copy>
							</FadeInAlways>
						</Styles.WhoWeAreValuesItem>
					</FadeInAlways>

					<FadeInAlways delay={0.9} direction='right'>
						<Styles.WhoWeAreValuesItem>
							<FadeInAlways delay={0.5} direction='up'>
								<Copy>
									<h4> Our Values</h4>
								</Copy>
							</FadeInAlways>
							<FadeInAlways delay={0.6} direction='up'>
								<Styles.WhoWeAreValueImg>
									<LazyImage src={pix3} />
								</Styles.WhoWeAreValueImg>
							</FadeInAlways>

							<ul>
								<FadeInAlways delay={0.2} direction='left'>
									<li>
										<FaCircle /> Professionalism
									</li>
								</FadeInAlways>
								<FadeInAlways delay={0.3} direction='left'>
									<li>
										<FaCircle />
										integrity
									</li>
								</FadeInAlways>
								<FadeInAlways delay={0.4} direction='left'>
									<li>
										<FaCircle />
										quality
									</li>
								</FadeInAlways>
								<FadeInAlways delay={0.5} direction='left'>
									<li>
										<FaCircle />
										safety
									</li>
								</FadeInAlways>
								<FadeInAlways delay={0.6} direction='left'>
									<li>
										<FaCircle />
										service excellence
									</li>
								</FadeInAlways>
								<FadeInAlways delay={0.7} direction='left'>
									<li>
										<FaCircle />
										team work
									</li>
								</FadeInAlways>
							</ul>
						</Styles.WhoWeAreValuesItem>
					</FadeInAlways>
				</Styles.WhoWeAreValuesBox>
			</Styles.WhoWeAreValuesContainer>
		</ReactLenis>
	);
};

export default WhoWeAre;
