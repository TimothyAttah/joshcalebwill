import pic1 from '../../../assets/haulage1.png';
import pic2 from '../../../assets/haulage2.png';
import pic3 from '../../../assets/haulage3.png';
import pic4 from '../../../assets/haulage4.png';
import pic5 from '../../../assets/haulage6.png';
import pic6 from '../../../assets/newHaulage1.png';

import * as Styles from './Haulage2Styles';
import { ReactLenis } from 'lenis/react';
import Copy from '../../../components/copyText/CopyText';
import LazyImage from '../../../components/LazyImage';
import Transition from '../../../components/Transition';


const Haulage2 = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.HaulageContainer>
					<Styles.HaulageHero>
						{/* <img alt='' /> */}
						<LazyImage src={pic1} />
						<Styles.BlendModeTitle>Haulage</Styles.BlendModeTitle>
					</Styles.HaulageHero>
					<Styles.CultureInfo>
						<Copy delay={0.5}>
							<small>A unique supply capability</small>
							<p>
								We provide haulage services especially in the area of Diesel,
								Petrol, Kerosene, CNG, and other petroleum products.
							</p>
						</Copy>
					</Styles.CultureInfo>
					<Styles.HaulageIntroSection>
						<Copy delay={0.5}>
							<p>
								With our own import infrastructure in key demand locations and
								lifting rights at inland locations, we have unique national
								supply capability.
							</p>
						</Copy>
						<Copy delay={0.5}>
							<p>
								We understand that supply resilience is of paramount importance
								to our customers, and our priority is to deliver.
							</p>
						</Copy>
						<Copy delay={0.5}>
							<p>
								Our national footprint minimises transport distances between our
								storage terminals and our customers’ sites, so we can ensure
								cost effective and reliable supply. Our 24/7 in-house logistics
								operation, supported by a Nigeria based customer care and
								scheduling team, ensures that our haulage operations match our
								exacting standards of reliability and service.
							</p>
						</Copy>
						<Styles.HaulageIntroGalleryContainer>
							<div>
								{/* <img src={pic7} alt='' loading='lazy' /> */}
								<LazyImage src={pic2} />
							</div>
							<div>
								{/* <img src={pic2} alt='' loading='lazy' /> */}
								<LazyImage src={pic3} />
							</div>
							<div>
								{/* <img src={pic4} alt='' loading='lazy' /> */}
								<LazyImage src={pic4} />
							</div>
							<div>
								{/* <img src={pic3} alt='' loading='lazy' /> */}
								<LazyImage src={pic5} />
							</div>

							<div>
								{/* <img src={pic6} alt='' loading='lazy' /> */}
								<LazyImage src={pic6} />
							</div>
						</Styles.HaulageIntroGalleryContainer>
					</Styles.HaulageIntroSection>
					<Styles.HaulageServicesList>
						<Styles.HaulageService>
							<Copy delay={0.5}>
								<h2>Why buy from us?</h2>
								<p>
									We work to earn the long-term loyalty of each and every
									customer. We are determined to outperform our competitors on
									both cost and service.
								</p>
							</Copy>
						</Styles.HaulageService>
						<Styles.HaulageService primary>
							<Copy delay={0.5}>
								<h2>We offer:</h2>
								<h4>Competitive pricing</h4>
								<p>
									An extensive range of fuel petroluem products including
									petrol, diesel, gasoil, marine gasoil and kerosene.
								</p>
							</Copy>
						</Styles.HaulageService>
						<Styles.HaulageService>
							<Copy delay={0.5}>
								<h2>Proven supply resilience and reliable delivery</h2>
								<p>
									Our own managed supply locations across the Nigeria - we're
									not at risk of supply disruption by other providers A 24/7
									haulage operation with real-time scheduling and a Nigeria
									based customer service team, to resolve issues promptly
								</p>
							</Copy>
						</Styles.HaulageService>
						<Styles.HaulageService primary>
							<Copy delay={0.5}>
								<h2> More on our 24/7 haulage operation</h2>
								<p>
									Online ordering and auto-invoicing providing error-free
									back-office processes Wetstock management, allowing us to
									remotely monitor and manage fuel stocks at customers sites and
									ensure our customers never stock out. We don't own or operate
									any forecourts, so we're able to put the interests of our
									customers first - 100% of the time.
								</p>
							</Copy>
						</Styles.HaulageService>
						<Styles.HaulageService>
							<Copy delay={0.5}>
								<h2>Safety</h2>
								<p>
									Safety underpins everything we do. We work continually to
									identify, assess and mitigate the risks associated with our
									operations.
								</p>
							</Copy>
						</Styles.HaulageService>
						<Styles.HaulageService primary>
							<Copy delay={0.5}>
								<h2>Our approach</h2>
								<h4>We create safe working environments by:</h4>
								<p>
									Instilling the highest possible level of safety awareness in
									everyone involved in storing, moving and delivering our fuel,
									whether that person is a member of staff or employed by a
									contractor or sub-contractor. Encouraging and empowering every
									individual working in the business to observe and report
									hazards, near misses or unwanted events, however small,
									without fear of blame.
								</p>
								<p>
									Responding quickly to identified trends and near-misses in
									order to prevent more significant incidents or injuries.
									Ensuring that every individual working in our business is
									properly trained for the work they do.
								</p>
							</Copy>
						</Styles.HaulageService>
						<Styles.HaulageService>
							<Copy delay={0.5}>
								<h2> Driver safety</h2>
								<p>
									We take every possible step to ensure our drivers, vehicles
									and equipment are prepared for all foreseeable hazards.
								</p>
								<p>
									Our drivers carry hazardous product on the public highway and
									operate around members of the public at customer forecourts.
									It is of paramount importance that they are equipped and
									competent for the tasks they perform.
								</p>
								<p>
									To ensure the safety of our drivers and those around them, we
									provide ongoing training and assessment, exceeding industry
									norms, to ensure that safety standards on the road, in the
									terminal and at the customer site are maintained.
								</p>
								<p>
									Our drivers are best placed to observe safety hazards in our
									logistics operations. Many channels of communication exist
									within the company, both formal and informal, to ensure that
									individual drivers' observations and experience are shared and
									improvement actions put in place.
								</p>
							</Copy>
						</Styles.HaulageService>
						<Styles.HaulageService primary>
							<Copy delay={0.5}>
								<h2>Creating a culture of incident reporting</h2>
								<p>
									Across the company we strongly encourage a culture of open and
									honest reporting of all unwanted events as part of a
									"no-blame" culture.
								</p>
								<p>
									We focus on capturing the near misses and hazards observations
									that can easily remain un-noticed and un-reported in a
									business. We also conduct regular audits throughout the
									business to identify gaps and put action plans in place to
									resolve.
								</p>
								<p>
									Information from these observations is vitally important for
									us in understanding safe working practices and in identifying
									and correcting potential issues that have potential to lead to
									serious injuries or events in the future.
								</p>
							</Copy>
						</Styles.HaulageService>
					</Styles.HaulageServicesList>
				</Styles.HaulageContainer>
			</ReactLenis>
		</>
	);
};

export default Transition(Haulage2);
