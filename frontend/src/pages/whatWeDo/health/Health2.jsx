import pic1 from '../../../assets/safety4.png';
import pic2 from '../../../assets/safety5.png';
import pic3 from '../../../assets/safety6.png';
import pic4 from '../../../assets/safety7.png';
import pic5 from '../../../assets/safety8.png';
import pic6 from '../../../assets/safety9.png';
import pic7 from '../../../assets/safety4.png';


import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { FaDotCircle } from 'react-icons/fa';

import * as Styles from './Health2Styles';
import { useEffect } from 'react';
import HealthPolicy from '../../sustainability/healthPolicy/HealthPolicy';
import { ReactLenis } from 'lenis/react';
import Copy from '../../../components/copyText/CopyText';
import LazyImage from '../../../components/LazyImage';

const Health2 = () => {
	return (
		<>
			<ReactLenis root>
				<Styles.HealthContainer>
					<Styles.HealthHero>
						{/* <img src={servicePix3} alt='' /> */}
						<LazyImage src={pic1} />
						<Styles.BlendModeTitle>Health and Safety</Styles.BlendModeTitle>
					</Styles.HealthHero>
					<Styles.CultureInfo>
						<Copy delay={0.5}>
							<h4>HEALTH SAFETY AND ENVIRONMENTAL ASSESSMENT CONSULTANCY:</h4>
							<p>
								The petroluem environment is a very volatile one, hence the need
								for consultancy services for organizations in the areas of
								Environment, Health and Safety for Workers and the Environment.
								We establish systems and policies that help in the safety and
								maintenance of oil and gas facility.
							</p>
							<p>
								At <span>Joshcalebwill</span>, we understand that health,
								safety, and environmental (HSE) practices are at the core of
								sustainable business operations. Our consultancy services are
								designed to help organizations identify risks, maintain
								compliance, and foster a culture of safety while protecting the
								environment.
							</p>
						</Copy>
					</Styles.CultureInfo>

					<Styles.HealthServiceContainer>
						<Copy delay={0.5}>
							<h2>Our Services</h2>
						</Copy>
						<Styles.HealthServiceWrapper>
							<Styles.HealthServiceList>
								<Styles.HealthServiceListInfo>
									<Copy delay={0.5}>
										<h4>Workplace Safety Audits</h4>
										<p>
											identifying hazards, assessing risks, and recommending
											effective controls.
										</p>
									</Copy>
								</Styles.HealthServiceListInfo>
								<Styles.HealthServiceListImg>
									{/* <img src={pic2} alt='' /> */}
									<LazyImage src={pic2} />
								</Styles.HealthServiceListImg>
							</Styles.HealthServiceList>

							<Styles.HealthServiceList>
								<Styles.HealthServiceListInfo>
									<Copy delay={0.5}>
										<h4>Environmental Impact Assessments (EIA)</h4>
										<p>
											evaluating potential environmental consequences of
											projects and recommending sustainable solutions.
										</p>
									</Copy>
								</Styles.HealthServiceListInfo>
								<Styles.HealthServiceListImg>
									{/* <img src={servicePix2} alt='' /> */}
									<LazyImage src={pic3} />
								</Styles.HealthServiceListImg>
							</Styles.HealthServiceList>

							<Styles.HealthServiceList>
								<Styles.HealthServiceListInfo>
									<Copy delay={0.5}>
										<h4>Regulatory Compliance Support</h4>
										<p>
											ensuring operations meet local and international HSE
											regulations.
										</p>
									</Copy>
								</Styles.HealthServiceListInfo>
								<Styles.HealthServiceListImg>
									{/* <img src={pic1} alt='' /> */}
									<LazyImage src={pic4} />
								</Styles.HealthServiceListImg>
							</Styles.HealthServiceList>

							<Styles.HealthServiceList>
								<Styles.HealthServiceListInfo>
									<Copy delay={0.5}>
										<h4>Emergency Response Planning</h4>
										<p>
											preparing organizations to respond effectively to
											incidents and reduce downtime.
										</p>
									</Copy>
								</Styles.HealthServiceListInfo>
								<Styles.HealthServiceListImg>
									{/* <img src={servicePix4} alt='' /> */}
									<LazyImage src={pic5} />
								</Styles.HealthServiceListImg>
							</Styles.HealthServiceList>

							<Styles.HealthServiceList>
								<Styles.HealthServiceListInfo>
									<Copy delay={0.5}>
										<h4>Training & Capacity Building</h4>
										<p>
											equipping employees with the skills and awareness to work
											safely and responsibly.
										</p>
									</Copy>
								</Styles.HealthServiceListInfo>
								<Styles.HealthServiceListImg>
									{/* <img src={servicePix5} alt='' /> */}
									<LazyImage src={pic6} />
								</Styles.HealthServiceListImg>
							</Styles.HealthServiceList>
						</Styles.HealthServiceWrapper>
					</Styles.HealthServiceContainer>
					<Styles.HealthReasonWrapper>
						<div>
							<Copy delay={0.5}>
								<h4>Why HSE Matters</h4>
							</Copy>
							<Copy delay={0.5}>
								<ul>
									<li>
										<span>
											<FaDotCircle />
										</span>
										Protects people, assets, and the environment.
									</li>
									<li>
										<span>
											<FaDotCircle />
										</span>
										Reduces the risk of accidents, penalties, and reputational
										damage.
									</li>
									<li>
										<span>
											<FaDotCircle />
										</span>
										Enhances sustainability and corporate responsibility.
									</li>
									<li>
										<span>
											<FaDotCircle />
										</span>
										Builds trust with stakeholders and regulatory authorities.
									</li>
								</ul>
							</Copy>
						</div>
					</Styles.HealthReasonWrapper>
					<HealthPolicy />
				</Styles.HealthContainer>
			</ReactLenis>
		</>
	);
};

export default Health2;
