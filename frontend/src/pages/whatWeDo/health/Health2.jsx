import pic1 from '../../../assets/safety1.jpg';
import pic2 from '../../../assets/newHealth1.png';
import pic3 from '../../../assets/newGas3.png';
import servicePix1 from '../../../assets/healthService1.jpg';
import servicePix2 from '../../../assets/healthService2.jpg';
import servicePix3 from '../../../assets/newExp3.png';
import servicePix4 from '../../../assets/healthService4.jpg';
import servicePix5 from '../../../assets/healthService5.jpg';
import servicePix6 from '../../../assets/healthService6.jpg';
import servicePix7 from '../../../assets/healthService7.jpg';
import servicePix8 from '../../../assets/healthService8.jpg';
import servicePix9 from '../../../assets/healthService9.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { FaDotCircle } from 'react-icons/fa';

import * as Styles from './Health2Styles';
import { useEffect } from 'react';
import HealthPolicy from '../../sustainability/healthPolicy/HealthPolicy';

const Health2 = () => {
	return (
		<Styles.HealthContainer>
			<Styles.HealthHero>
				<img src={servicePix3} alt='' />
				<Styles.BlendModeTitle>Health and Safety</Styles.BlendModeTitle>
			</Styles.HealthHero>
			<Styles.CultureInfo>
				<h4>HEALTH SAFETY AND ENVIRONMENTAL ASSESSMENT CONSULTANCY:</h4>
				<p>
					The petroluem environment is a very volatile one, hence the need for
					consultancy services for organizations in the areas of Environment,
					Health and Safety for Workers and the Environment. We establish
					systems and policies that help in the safety and maintenance of oil
					and gas facility.
				</p>
				<p>
					At <span>Joshcalebwill</span>, we understand that health, safety, and
					environmental (HSE) practices are at the core of sustainable business
					operations. Our consultancy services are designed to help
					organizations identify risks, maintain compliance, and foster a
					culture of safety while protecting the environment.
				</p>
			</Styles.CultureInfo>

			<Styles.HealthServiceContainer>
				<h2>Our Services</h2>
				<Styles.HealthServiceWrapper>
					<Styles.HealthServiceList>
						<Styles.HealthServiceListInfo>
							<h4>Workplace Safety Audits</h4>
							<p>
								identifying hazards, assessing risks, and recommending effective
								controls.
							</p>
						</Styles.HealthServiceListInfo>
						<Styles.HealthServiceListImg>
							<img src={pic2} alt='' />
						</Styles.HealthServiceListImg>
					</Styles.HealthServiceList>
					<Styles.HealthServiceList>
						<Styles.HealthServiceListInfo>
							<h4>Environmental Impact Assessments (EIA)</h4>
							<p>
								evaluating potential environmental consequences of projects and
								recommending sustainable solutions.
							</p>
						</Styles.HealthServiceListInfo>
						<Styles.HealthServiceListImg>
							<img src={servicePix2} alt='' />
						</Styles.HealthServiceListImg>
					</Styles.HealthServiceList>
					<Styles.HealthServiceList>
						<Styles.HealthServiceListInfo>
							<h4>Regulatory Compliance Support</h4>
							<p>
								ensuring operations meet local and international HSE
								regulations.
							</p>
						</Styles.HealthServiceListInfo>
						<Styles.HealthServiceListImg>
							<img src={pic1} alt='' />
						</Styles.HealthServiceListImg>
					</Styles.HealthServiceList>
					<Styles.HealthServiceList>
						<Styles.HealthServiceListInfo>
							<h4>Emergency Response Planning</h4>
							<p>
								preparing organizations to respond effectively to incidents and
								reduce downtime.
							</p>
						</Styles.HealthServiceListInfo>
						<Styles.HealthServiceListImg>
							<img src={servicePix4} alt='' />
						</Styles.HealthServiceListImg>
					</Styles.HealthServiceList>
					<Styles.HealthServiceList>
						<Styles.HealthServiceListInfo>
							<h4>Training & Capacity Building</h4>
							<p>
								equipping employees with the skills and awareness to work safely
								and responsibly.
							</p>
						</Styles.HealthServiceListInfo>
						<Styles.HealthServiceListImg>
							<img src={servicePix5} alt='' />
						</Styles.HealthServiceListImg>
					</Styles.HealthServiceList>
				</Styles.HealthServiceWrapper>
			</Styles.HealthServiceContainer>
			<Styles.HealthReasonWrapper>
				<div>
					<h4>Why HSE Matters</h4>
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
							Reduces the risk of accidents, penalties, and reputational damage.
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
				</div>
			</Styles.HealthReasonWrapper>
			<HealthPolicy />
		</Styles.HealthContainer>
	);
};

export default Health2;
